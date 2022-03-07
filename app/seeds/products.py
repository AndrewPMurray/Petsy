from app.models import db, Product
from app.seeds.data.cat_seeds import cats
from app.seeds.data.dog_seeds import dogs
from app.seeds.data.bird_seeds import birds
from app.seeds.data.reptile_seeds import reptiles

def seed_products():
 
    for cat in cats:
        new_cat = Product(
            title=cat.get('title'),
            price=cat.get('price'),
            details=cat.get('details'),
            description=cat.get('description'),
            quantity=cat.get('quantity'),
            user_id=cat.get('user_id'),
            product_type_id=cat.get('product_type_id'),
            pet_type_id=cat.get('pet_type_id')
        )
        db.session.add(new_cat)
    
    for dog in dogs:
        new_dog = Product(
            title=dog.get('title'),
            price=dog.get('price'),
            details=dog.get('details'),
            description=dog.get('description'),
            quantity=dog.get('quantity'),
            user_id=dog.get('user_id'),
            product_type_id=dog.get('product_type_id'),
            pet_type_id=dog.get('pet_type_id')
        )
        db.session.add(new_dog)

    for bird in birds:
        new_bird = Product(
            title=bird.get('title'),
            price=bird.get('price'),
            details=bird.get('details'),
            description=bird.get('description'),
            quantity=bird.get('quantity'),
            user_id=bird.get('user_id'),
            product_type_id=bird.get('product_type_id'),
            pet_type_id=bird.get('pet_type_id')
        )
        db.session.add(new_bird)
    
    for reptile in reptiles:
        new_reptile = Product(
            title=reptile.get('title'),
            price=reptile.get('price'),
            details=reptile.get('details'),
            description=reptile.get('description'),
            quantity=reptile.get('quantity'),
            user_id=reptile.get('user_id'),
            product_type_id=reptile.get('product_type_id'),
            pet_type_id=reptile.get('pet_type_id')
        )
        db.session.add(new_reptile)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

