from app.models import db, Review


def seed_reviews():
    cat_slipper1 = Review(
        content='this is our 2nd braid. my doggies love them!',
        rating=5,
        user_id=5,
        product_id=1,
        url=''
    )

    
    db.session.add(cat_slipper1)
    
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

