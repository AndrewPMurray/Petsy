from .db import db, environment, SCHEMA, add_prefix_for_prod

class ProductType(db.Model):
    __tablename__ = 'product_types'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=True, nullable=False)
    url = db.Column(db.String)
    
    products = db.relationship("Product", back_populates="product_type", cascade="all, delete")
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "url": self.url,
        }
