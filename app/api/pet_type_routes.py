from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product


pet_type_routes = Blueprint('pet_type_routes', __name__);

@pet_type_routes.route('/<int:id>')
def get_products_by_pet_type(id):
    products = Product.query.filter(Product.pet_type_id == id).all()
    return {"products": [product.to_dict() for product in products]}

