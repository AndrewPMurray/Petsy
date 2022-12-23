from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = 'images'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    url = db.Column(db.String, nullable=False)
    
    single_product = db.relationship("Product", back_populates="images")
    
    def to_dict(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "url": self.url
        }