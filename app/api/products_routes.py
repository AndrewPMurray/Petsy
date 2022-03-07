from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product

products_routes = Blueprint('products_routes', __name__)


# GET Route
@products_routes.route('/')
# @login_required
def all_products():
  all_products = Product.query.all()
  return {"all_products": [product.to_dict() for product in all_products]}


# POST Route
@products_routes.route('/products', methods=["POST"])
@login_required
def create_products_listing():
  pass


# PUT Route
@products_routes.route('/products/<int:id>', methods=["PUT"])
@login_required
def edit_products_listing(id):
  pass


# DELETE Route
@products_routes.route('/products/<int:id>', methods=["DELETE"])
@login_required
def delete_products_listing(id):
  pass
