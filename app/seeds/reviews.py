from app.models import db, Review
from app.seeds.data.cat_review_seeds import cat_reviews
from app.seeds.data.dog_review_seeds import dog_reviews
from app.seeds.data.bird_review_seeds import bird_reviews
from app.seeds.data.reptile_review_seeds import reptile_reviews


def seed_reviews():
    for review in cat_reviews:
        new_review = Review(
            content=review.get('content'),
            rating=review.get('rating'),
            user_id=review.get('user_id'),
            product_id=review.get('product_id'),
            url=review.get('url')
        )
    db.session.add(new_review)
    
    for review in dog_reviews:
        new_review = Review(
            content=review.get('content'),
            rating=review.get('rating'),
            user_id=review.get('user_id'),
            product_id=review.get('product_id'),
            url=review.get('url')
        )
        db.session.add(new_review)
    
    for review in bird_reviews:
        new_review = Review(
            content=review.get('content'),
            rating=review.get('rating'),
            user_id=review.get('user_id'),
            product_id=review.get('product_id'),
            url=review.get('url')
        )
        db.session.add(new_review) 

    for review in reptile_reviews:
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

