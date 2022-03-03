from flask import Flask, render_template
from flask_migrate import Migrate
from .config import Configuration
# from .routes import 
from flask_server.models import db, Image, PetType, ProductType, Product, Review, User

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)

# app.register_blueprint(.bp)