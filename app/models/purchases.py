from .db import db

class Purchase(db.Model):
    __tablename__ = 'purchases'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    purchase_date = db.Column(db.Date, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    
    user = db.relationship("User", back_populates="purchases")
    single_product = db.relationship("Product", back_populates="purchases")
    
    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "purchase_date": self.purchase_date,
            "quantity": self.quantity,
        }