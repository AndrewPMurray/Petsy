from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import ProductType, Product

product_types_routes = Blueprint('product_types_routes', __name__)

# GET Route
@product_types_routes.route('/product_types')
def all_products_types():
  all_types = ProductType.query.all()
  return {"all_types": [product_type.to_dict() for product_type in all_types]}

@product_types_routes.route('/<int:pet_type_id>/<int:product_type_id>')
def get_products_by_type(pet_type_id, product_type_id):
  products = Product.query.filter(Product.pet_type_id == pet_type_id).all()
  return {"products": [product.to_dict() for product in products if product.product_type_id == product_type_id]}

