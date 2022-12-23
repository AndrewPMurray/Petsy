from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    url = db.Column(db.String)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    purchase_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('purchases.id')))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    single_product = db.relationship("Product", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")
    purchase = db.relationship("Purchase", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "purchase_id": self.purchase_id,
            "content": self.content,
            "rating": self.rating,
            "user_id": self.user_id,
            "url": self.url,
            "product_id": self.product_id,
            "user": self.user.to_dict(),
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
