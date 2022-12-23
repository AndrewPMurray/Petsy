from email.policy import default
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Purchase(db.Model):
    __tablename__ = 'purchases'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    purchase_date = db.Column(db.DateTime, nullable=False, default=datetime.now())
    quantity = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="purchases")
    single_product = db.relationship("Product", back_populates="purchases")
    reviews = db.relationship("Review", back_populates="purchase", cascade="all, delete")
  
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "purchase_date": self.purchase_date,
            "quantity": self.quantity,
            "product": self.single_product.to_dict(),
            'user': self.user.to_dict()
        }
