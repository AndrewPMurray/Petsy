from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Product, db
from app.forms.product_form import ProductForm


products_routes = Blueprint('products_routes', __name__)


# GET Route
@products_routes.route('/')
def all_products():
  all_products = Product.query.all()
  return {"all_products": [product.to_dict() for product in all_products]}


# POST Route
@products_routes.route('/', methods=["POST"])
@login_required
def create_products_listing():
  form = ProductForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data
  
  if form.validate_on_submit():
    product = Product(
      title=data['title'],
      price=data['price'],
      details=data['details'],
      description=data['description'],
      quantity=data['quantity'],
      user_id=data['user_id'],
      product_type_id=data['product_type_id'],
      pet_type_id=data['pet_type_id']
    )
    
    db.session.add(product)
    db.session.commit()
    return product.to_dict()

  



# PUT Route
@products_routes.route('/<int:id>', methods=["PUT"])
@login_required
def edit_products_listing(id):
  pass


# DELETE Route
@products_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_products_listing(id):
  pass
