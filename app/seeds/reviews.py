from app.models import db, Review


def seed_reviews():
    cat_slipper1 = Review(
        content='',
        rating=5,
        user_id=5,
        product_id=1,
        url=''
    )
    
    cat_weed1 = Review(
        content='Excellent Catnip! My kitties love it. Cute packaging too. My order was well packed and shipped fast.',
        rating=5,
        user_id=4,
        product_id=2,
        url=''
    )
    
    cat_gift_box1 = Review(
        content="Best Birthday Present for a Quarantine Cat Party! 🎉🥳😺🌸🎈😻 We had so much fun! Anticipation of a speedy delivery! The package was attacked before we made it from the mailbox to the deck! Huge Big Bites! Human cut the tape and let Dovekie open the gift! Cutest wrapping paper! We saved it and rewrap it everyday! The Chew Stick was a hit! The crinkle paper packing material was fun! Oh my the blind mouse and the Darn sock Mouse are so much fun! Great colors! Super wonderful, thoughtful treats! xoxo 🐾Dovekie & human.",
        rating=5,
        user_id=4,
        product_id=3,
        url='https://i.etsystatic.com/iap/67446a/3013542551/iap_640x640.3013542551_st78r337.jpg?version=0'
    )
    
    db.session.add(cat_slipper1)
    db.session.add(cat_weed1)
    db.session.add(cat_gift_box1)
    
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

