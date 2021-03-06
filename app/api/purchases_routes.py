from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Purchase, Product, db
from app.aws import delete_image_from_s3

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
  product_id = request.json['product_id']
  quantity = request.json['quantity']
  product = Product.query.get(product_id)
  
  if product.quantity < quantity:
    if product.quantity == 0:
      return {"errors": f'{product.title} is currently out of stock, please remove this item from your cart to complete purchase'}, 400
    return {"errors": f'only {product.quantity} of {product.title} available, unable to complete purchase with requested quantity'}, 400
  else:
    new_quantity = product.quantity - quantity
    product.quantity = new_quantity
    
    # if product.quantity == 0: 
    #   for image in product.images:
    #     if 'amazonaws' in image.url:
    #       delete_image_from_s3(str(image.url).split('/')[-1])
    #   db.session.delete(product)
      
    db.session.commit()
    
    new_purchase = Purchase(
      user_id = request.json['user_id'],
      product_id = product_id,
      quantity = quantity
  )
    if new_purchase:
      db.session.add(new_purchase)
      db.session.commit()
      return new_purchase.to_dict()
    return {"errors": "Server error. Unable to make purchase"}
