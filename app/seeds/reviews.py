from app.models import db, Review


def seed_reviews():
    review1 = Review(
        content='this is our 2nd braid. my doggies love them!',
        rating=5,
        user_id=2,
        product_id=1,
        url=''
    )

    review2 = Review(
        content='',
        rating=4,
        user_id=3,
        product_id=1,
        url='https://i.etsystatic.com/iap/496960/3715008747/iap_640x640.3715008747_i7e891g9.jpg?version=0'
    )
    
    review3 = Review(
        content='Great snack and great customer service. Items came very fast. I give my dogs 1 chew a day each for their dental routine.',
        rating=5,
        user_id=3,
        product_id=2,
        url='https://i.etsystatic.com/iap/9b75ba/3745091257/iap_640x640.3745091257_jtuajz5b.jpg?version=0'
    )

    review4 = Review(
        content='Can’t wait to have Oz try these! Shipped so quickly and are good sized for any dog.',
        rating=4,
        user_id=1,
        product_id=2,
        url=''
    )


    
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

