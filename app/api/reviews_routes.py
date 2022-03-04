from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Review

reviews_routes = Blueprint('reviews_routes', __name__)

# GET Route
@reviews_routes.route('/reviews')
@login_required
def all_reviews():
  # all_reviews = Review.query.filter()
  pass


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
