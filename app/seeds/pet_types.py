from app.models import db, PetType


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


def undo_pet_types():
    db.session.execute('TRUNCATE pet_types RESTART IDENTITY CASCADE;')
    db.session.commit()
