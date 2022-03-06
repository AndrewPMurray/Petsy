from app.models import db, Image


def seed_images():
    cat_slipper1 = Image(
        product_id=1,
        url='https://i.etsystatic.com/32187741/r/il/c68db1/3642574895/il_794xN.3642574895_2rev.jpg'
    )
    cat_slipper2 = Image(
        product_id=1,
        url="https://i.etsystatic.com/32187741/r/il/c3df5c/3642574833/il_794xN.3642574833_smmt.jpg"
    )
    cat_slipper3 = Image(
        product_id=1,
        url="https://i.etsystatic.com/32187741/r/il/c763c2/3642574993/il_794xN.3642574993_ku28.jpg"
    )
    cat_weed1 = Image(
        product_id=2,
        url="https://i.etsystatic.com/27943310/r/il/51fe0c/3001849373/il_794xN.3001849373_lojq.jpg"
    )
    cat_weed2 = Image(
        product_id=2,
        url="https://i.etsystatic.com/27943310/r/il/34b0ab/2922001704/il_794xN.2922001704_tezk.jpg"
    )
    cat_weed3 = Image(
        product_id=2,
        url="https://i.etsystatic.com/27943310/r/il/2c5e51/2969691745/il_794xN.2969691745_cpc3.jpg"
    )
    cat_gift_box1 = Image(
        product_id=3,
        url="https://i.etsystatic.com/5376178/r/il/32d892/2501925501/il_794xN.2501925501_7uf0.jpg"
    )
    cat_gift_box2 = Image(
        product_id=3,
        url="https://i.etsystatic.com/5376178/r/il/397394/2710329364/il_794xN.2710329364_nx7v.jpg"
    )
    cat_gift_box3 = Image(
        product_id=3,
        url="https://i.etsystatic.com/5376178/r/il/5fb75f/2871695901/il_794xN.2871695901_aya7.jpg"
    )
    cat_gift_box4 = Image(
        product_id=3,
        url="https://i.etsystatic.com/5376178/r/il/ec1ed1/2454259470/il_794xN.2454259470_q8gq.jpg"
    )
    cat_gift_box5 = Image(
        product_id=3,
        url="https://i.etsystatic.com/5376178/r/il/e0193c/2454259064/il_794xN.2454259064_c48u.jpg"
    )
    
    db.session.add(cat_slipper1)
    db.session.add(cat_slipper2)
    db.session.add(cat_slipper3)
    db.session.add(cat_weed1)
    db.session.add(cat_weed2)
    db.session.add(cat_weed3)
    db.session.add(cat_gift_box1)
    db.session.add(cat_gift_box2)
    db.session.add(cat_gift_box3)
    db.session.add(cat_gift_box4)
    db.session.add(cat_gift_box5)
    
    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

