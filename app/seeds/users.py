from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='Demo', email='demo@aa.io', password='password')
    marnie = User(username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(username='bobbie', email='bobbie@aa.io', password='password')
    
    catthew = User(username='McCat', email='cat1@aa.io', password='password')
    serPurrceval = User(username='SerPurrceval', email='cat2@aa.io', password='password')
    
    stewart = User(username="Stewart", email='dog1@aa.io', password='password')
    henderson = User(username="Henderson", email='dog2@aa.io', password='password')
    
    paulie = User(username="Paulie", email='bird1@aa.io', password='password')
    chip = User(username="chip", email='bird2@aa.io', password='password')
    
    rango = User(username="Rango", email='reptile1@aa.io', password='password')
    charizard = User(username="Charizard", email='reptile2@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
