from app.models import db, Review
from app.seeds.data.review_seeds import reviews

def seed_reviews():

    for review in reviews:
        new_review = Review(
            content=review.get('content'),
            rating=review.get('rating'),
            user_id=review.get('user_id'),
            product_id=review.get('product_id'),
            url=review.get('url')
        )
        db.session.add(new_review)
    
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

