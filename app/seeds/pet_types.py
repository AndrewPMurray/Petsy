from app.models import db, PetType


# Adds a demo user, you can add other users here if you want
def seed_pet_types():
    cat = PetType(title='Cat', icon='<i class="fa-solid fa-cat"></i>')
    dog = PetType(title='Dog', icon='<i class="fa-solid fa-dog"></i>')
    reptile = PetType(title='Reptile', icon='<i class="fa-solid fa-dragon"></i>')
    bird = PetType(title='Bird', icon='<i class="fa-solid fa-crow"></i>')

    db.session.add(cat)
    db.session.add(dog)
    db.session.add(bird)
    db.session.add(reptile)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_pet_types():
    db.session.execute('TRUNCATE pet_types RESTART IDENTITY CASCADE;')
    db.session.commit()
