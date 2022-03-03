from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

product_types_routes = Blueprint('product_types_routes', __name__)

# GET Route
@product_types_routes.route('/product_types')
@login_required
def all_products_types_routes():
  pass
