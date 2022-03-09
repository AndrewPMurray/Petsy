from flask import Blueprint, jsonify, render_template, request
from flask_login import login_required
from app.models import db, Review
from app.forms.review_form import ReviewForm
from datetime import date
from flask_migrate import Migrate
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
  print('****',form.validate_on_submit)
  
  if form.validate_on_submit():
    new_review = Review(
      content=data["content"],
      rating=data["rating"],
      url=data["url"],
      user_id=data["user_id"],
      product_id=data["product_id"],
      )
  else:
    print('eeeeeeee',form.errors)
    
    
  db.session.add(new_review)
  db.session.commit()
  return new_review
  
  

# **** {'content': 'testsetest', 'rating': 4, 'user_id': 1, 'url': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'product_id': 30, 'created_at': None, 'updated_at': None, 'csrf_token': 'IjhhMzk4YjBjY2RhMzU5ZjUyOTcyNTVmMTRjZGIzMzI0N2YzN2IwMWIi.YigbgQ.gliaP669UJt6FIRYOJemIhrU7jM'}


# PUT Route
@reviews_routes.route('/reviews/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
  pass


# DELETE Route
@reviews_routes.route('/reviews/<int:id>', methods=["DELETE"])
@login_required
def delete_review(id):
  pass
