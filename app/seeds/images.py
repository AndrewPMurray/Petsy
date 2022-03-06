from app.models import db, Image
from app.seeds.data.image_seeds import images

def seed_images():
    
    
    for image in images:
        new_image =  Image(
        product_id=image.get('product_id'),
        url=image.get('url')
    )
        db.session.add(new_image)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

