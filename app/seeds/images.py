from app.models import db, Image


def seed_images():
    image1 = Image(
        product_id=1,
        url='https://i.etsystatic.com/23118931/r/il/b937a6/3411072701/il_1140xN.3411072701_c3z5.jpg'
    )
    image2 = Image(
        product_id=1,
        url='https://i.etsystatic.com/23118931/r/il/7c6a20/2643461694/il_1140xN.2643461694_djfu.jpg'
    )
    image3 = Image(
        product_id=2,
        url='https://i.etsystatic.com/33345449/r/il/abc8d2/3692632366/il_1140xN.3692632366_74zi.jpg'
    )
    image4 = Image(
        product_id=2,
        url='https://i.etsystatic.com/33345449/r/il/651739/3697517053/il_1140xN.3697517053_8wys.jpg'
    )
    image5 = Image(
        product_id=2,
        url='https://i.etsystatic.com/33345449/r/il/db2021/3649901134/il_1140xN.3649901134_3ga9.jpg'
    )

    
    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    
    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

