from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Purchase

purchases_routes = Blueprint('purchases_routes', __name__)

# GET Route
@purchases_routes.route('/purchases')
@login_required
def all_purchases():
  pass

# 
