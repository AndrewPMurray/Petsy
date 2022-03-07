from app.models import db, Image
from app.seeds.data.cat_image_seeds import cat_images
from app.seeds.data.dog_image_seeds import dog_images
from app.seeds.data.bird_image_seeds import bird_images
from app.seeds.data.reptile_image_seeds import reptile_images


def seed_images():
    for image in cat_images:
        new_image =  Image(
        product_id=image.get('product_id'),
        url=image.get('url')
    )
        db.session.add(new_image)
        
    for image in dog_images:
        new_image =  Image(
        product_id=image.get('product_id'),
        url=image.get('url')
    )
        db.session.add(new_image)
    
    for image in bird_images:
        new_image =  Image(
        product_id=image.get('product_id'),
        url=image.get('url')
    )
        db.session.add(new_image)

    for image in reptile_images:
        new_image =  Image(
        product_id=image.get('product_id'),
        url=image.get('url')
    )
        db.session.add(new_image)
        
    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

