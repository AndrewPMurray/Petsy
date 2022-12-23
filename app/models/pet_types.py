from .db import db, environment, SCHEMA, add_prefix_for_prod

class PetType(db.Model):
    __tablename__ = 'pet_types'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), unique=True, nullable=False)
    icon = db.Column(db.String)
    
    products = db.relationship("Product", back_populates="pet_type", cascade="all, delete")
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "icon": self.icon,
        }
