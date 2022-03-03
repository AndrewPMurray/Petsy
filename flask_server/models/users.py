from .db import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    hashed_password = db.Column(db.String, nullable=False)
    
    products = db.relationship("Product", back_populates="user", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="user", cascade="all, delete")
    
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
        }