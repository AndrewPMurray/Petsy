from app.models import db, ProductType


# Adds a demo user, you can add other users here if you want
def seed_product_types():
    food = ProductType(title='Food', url='url')
    toys = ProductType(title='Toys', url='url')
    furniture = ProductType(title='Furniture', url='url')
    clothing = ProductType(title='Clothing', url='url')

    db.session.add(food)
    db.session.add(toys)
    db.session.add(furniture)
    db.session.add(clothing)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_product_types():
    db.session.execute('TRUNCATE product_types RESTART IDENTITY CASCADE;')
    db.session.commit()

