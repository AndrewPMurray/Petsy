from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Review

reviews_routes = Blueprint('reviews_routes', __name__)

# GET Route
@reviews_routes.route('/reviews/users/<int:id>')
# @login_required
def reviews_by_user(id):
  reviews = Review.query.filter(Review.user_id == id).all()
  # will return reviews belonging to user with product_id as the key for each review
  return {"userReviews": [review.to_dict() for review in reviews]}

# POST Route
@reviews_routes.route('/reviews', methods=["POST"])
@login_required
def create_review():
  pass


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
