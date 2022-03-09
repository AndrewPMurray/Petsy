from app.models import Purchase, db


# Adds a demo user, you can add other users here if you want
def seed_purchases():
    first = Purchase(user_id=1, product_id=1, quantity=15)
    second = Purchase(user_id=1, product_id=30, quantity=10)
    
    db.session.add(first)
    db.session.add(second)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchases():
    db.session.execute('TRUNCATE product_types RESTART IDENTITY CASCADE;')
    db.session.commit()

