from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import ProductType

product_types_routes = Blueprint('product_types_routes', __name__)

# GET Route
@product_types_routes.route('/product_types')
@login_required
def all_products_types():
  all_types = ProductType.query.all()
  return {"all_types": [product_type.to_dict() for product_type in all_types]}
