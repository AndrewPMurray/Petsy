from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required
from app.models import db, Review
from flask_migrate import Migrate
from app.forms.review_form import ReviewForm
from datetime import date
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
  
  if form.validate_on_submit():
    new_review = Review(
      content=data["content"],
      rating=data["rating"],
      url=data["url"],
      user_id=data["user_id"],
      product_id=data["product_id"],
      )
    db.session.add(new_review)
    db.session.commit() 
  else:
    print('****',form.errors)
    
  return new_review.to_dict()


# PUT Route
@reviews_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
  print( '==========')
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data
  
  if form.validate_on_submit():
    review = Review.query.get(id)
    
    review.content=data["content"],
    review.rating=data["rating"],
    review.url=data["url"],
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
