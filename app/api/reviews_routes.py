from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required
from app.models import db, Review
from flask_migrate import Migrate
from app.forms.review_form import ReviewForm
from datetime import date
from app.aws import (
    delete_image_from_s3, upload_file_to_s3, allowed_file, get_unique_filename, download_image)

reviews_routes = Blueprint('reviews_routes', __name__)

# GET Route for reviews by user
@reviews_routes.route('/<int:id>')
# @login_required
def reviews_by_user(id):
  reviews = Review.query.filter(Review.user_id == id).all()
  # will return reviews belonging to user with product_id as the key for each review
  return {"userReviews": [review.to_dict() for review in reviews]}

# GET AND POST Route | create new review form
@reviews_routes.route('/', methods=["POST"])
@login_required
def create_review():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data
  image = form.image.data

  if "image" not in request.files:
      return {"errors": "image required"}, 400

  image = request.files["image"]
  # product_id = request.form['product_id']
  
  if not allowed_file(image.filename):
      return {"errors": "file type not permitted"}, 400
  
  image.filename = get_unique_filename(image.filename)
  
  upload = upload_file_to_s3(image)
  
  if "url" not in upload:
      # if the dictionary doesn't have a url key
      # it means that there was an error when we tried to upload
      # so we send back that error message
      return upload, 400

  image_url = upload["url"] 

  #NOTE code from before
  if form.validate_on_submit():
    new_review = Review(
      content=data["content"],
      rating=data["rating"],
      url=image_url,
      user_id=data["user_id"],
      product_id=data["product_id"],
      )
  else:
    print('*******', form.errors)
  db.session.add(new_review)
  db.session.commit() 
    
  return new_review.to_dict()


# PUT Route
@reviews_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
  print( '==========')
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data
  image = form.image.data

  if "image" not in request.files:
      return {"errors": "image required"}, 400

  image = request.files["image"]
  # product_id = request.form['product_id']
  
  if not allowed_file(image.filename):
      return {"errors": "file type not permitted"}, 400
  
  image.filename = get_unique_filename(image.filename)
  
  upload = upload_file_to_s3(image)
  
  if "url" not in upload:
      # if the dictionary doesn't have a url key
      # it means that there was an error when we tried to upload
      # so we send back that error message
      return upload, 400

  image_url = upload["url"] 
  
  if form.validate_on_submit():
    review = Review.query.get(id)
    
    review.content=data["content"],
    review.rating=data["rating"],
    review.url=image_url,
    review.user_id=data["user_id"],
    review.product_id=data["product_id"],
    
    db.session.commit() 
  else:
    print('****',form.errors)
    
  return review.to_dict()


# DELETE Route
@reviews_routes.route('/reviews/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
  pass
