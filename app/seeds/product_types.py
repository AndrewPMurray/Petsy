from app.models import db, ProductType


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


def undo_product_types():
    db.session.execute('TRUNCATE product_types RESTART IDENTITY CASCADE;')
    db.session.commit()

