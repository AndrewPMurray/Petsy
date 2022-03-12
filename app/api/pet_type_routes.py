from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product, PetType


pet_type_routes = Blueprint('pet_type_routes', __name__);

@pet_type_routes.route('/<int:id>')
def get_products_by_pet_type(id):
    products = Product.query.filter(Product.pet_type_id == id).all()
    pet_types = PetType.query.all()
    
    return {"products": [product.to_dict() for product in products],
            "pet_types": [pet_type.id for pet_type in pet_types]}

