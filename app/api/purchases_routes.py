from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Purchase

purchases_routes = Blueprint('purchases_routes', __name__)

# GET Route
@purchases_routes.route('/<int:user_id>')
@login_required
def all_purchases(user_id):
  purchases = Purchase.query.filter(Purchase.user_id == user_id).all()
  return {"purchases": [purchase.to_dict() for purchase in purchases]}

# 
