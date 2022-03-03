from flask import Blueprint, render_template, redirect
# from app.forms import ???
# from app.models import ???, db

bp = Blueprint('index', __name__, url_prefix='')

@bp.route('/')
def index():
    return "<h1>Skeleton</h1>"