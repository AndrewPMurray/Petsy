from flask import Blueprint, jsonify, render_template
from flask_login import login_required
from app.models import db, Review
from app.forms.review_form import NewReview
from flask_migrate import Migrate

reviews_routes = Blueprint('reviews_routes', __name__)

# GET Route for reviews by user
@reviews_routes.route('/<int:id>')
# @login_required
def reviews_by_user(id):
  reviews = Review.query.filter(Review.user_id == id).all()
  # will return reviews belonging to user with product_id as the key for each review
  return {"userReviews": [review.to_dict() for review in reviews]}

# GET AND POST Route | create new review form
@reviews_routes.route('/reviews', methods=["GET","POST"])
@login_required
def create_review():
  form = NewReview()
  if form.validate_on_submit():
    data = form.data
    new_review = Review(
      content=data["content"],
      rating=data["rating"],
      url=data["url"],
      user_id=data["user_id"],
      product_id=data["product_id"],
      # created_at=data["created_at"],
      # updated_at=data["updated_at"],
    )
    db.session.add(new_review)
    db.session.commit()
    # TODO: figure out closing modal from here
  # return new_review to dict


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
