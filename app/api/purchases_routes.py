from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Purchase,db

purchases_routes = Blueprint('purchases_routes', __name__)

# GET Route
@purchases_routes.route('/<int:user_id>')
@login_required
def all_purchases(user_id):
  purchases = Purchase.query.filter(Purchase.user_id == user_id).all()
  return {"purchases": [purchase.to_dict() for purchase in purchases]}

# POST Route
@purchases_routes.route('/', methods=["POST"])
@login_required
def make_purchase():
  new_purchase = Purchase(
    user_id = request.json['user_id'],
    product_id = request.json['product_id'],
    quantity = request.json['quantity']
  )
  if new_purchase:
    db.session.add(new_purchase)
    db.session.commit()
  return new_purchase.to_dict()
