from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True, nullable=False)
    price = db.Column(db.Float, nullable=False)
    details = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_type_id = db.Column(db.Integer, db.ForeignKey('product_types.id'), nullable=False)
    pet_type_id = db.Column(db.Integer, db.ForeignKey('pet_types.id'), nullable=False)
    
    user = db.relationship("User", back_populates="products")
    product_type = db.relationship("ProductType", back_populates="products")
    pet_type = db.relationship("PetType", back_populates="products")
    images = db.relationship("Image", back_populates="single_product", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="single_product", cascade="all, delete")
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "details": self.details,
            "description": self.description,
            "quantity": self.quantity,
            "user_id": self.user_id,
            "product_type_id": self.product_type_id,
            "pet_type_id": self.pet_type_id
        }
