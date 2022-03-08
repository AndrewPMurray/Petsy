from flask import Blueprint, jsonify
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
  print('*******', form.pet_type_id)

  # if form.validate_on_submit():
  product = Product()
  form.populate_obj(product)
  print('=======', product)
  db.session.add(product)
  db.session.commit()
  return product

  



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
