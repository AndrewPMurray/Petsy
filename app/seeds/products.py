from app.models import db, Product
from app.seeds.data.dog_seeds import dogs

def seed_products():
 
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

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

