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
    cat_sunglasses1 = Image(
        product_id=4,
        url="https://i.etsystatic.com/27752622/r/il/e0202b/3238848903/il_794xN.3238848903_5odu.jpg"
    )
    cat_sunglasses2 = Image(
        product_id=4,
        url="https://i.etsystatic.com/27752622/r/il/a45b35/3056695774/il_794xN.3056695774_cy00.jpg"
    )
    cat_sunglasses3 = Image(
        product_id=4,
        url="https://i.etsystatic.com/27752622/r/il/09dfce/3104439135/il_794xN.3104439135_22nc.jpg"
    )
    cat_cave1 = Image(
        product_id=5,
        url="https://i.etsystatic.com/32942464/r/il/214a67/3628927845/il_794xN.3628927845_c7hr.jpg"
    )
    cat_cave2 = Image(
        product_id=5,
        url="https://i.etsystatic.com/32942464/r/il/60d6b3/3520385980/il_794xN.3520385980_33t1.jpg"
    )
    cat_cave3 = Image(
        product_id=5,
        url="https://i.etsystatic.com/32942464/r/il/15adb2/3552416170/il_794xN.3552416170_ajbd.jpg"
    )
    cat_tree1 = Image(
        product_id=6,
        url="https://i.etsystatic.com/32103991/r/il/804de3/3532964418/il_794xN.3532964418_7u07.jpg"
    )
    cat_tree2 = Image(
        product_id=6,
        url="https://i.etsystatic.com/32103991/r/il/80ae8f/3532964384/il_794xN.3532964384_dh9z.jpg"
    )
    cat_tree3 = Image(
        product_id=6,
        url="https://i.etsystatic.com/32103991/r/il/046d82/3532964414/il_794xN.3532964414_mno6.jpg"
    )
    cat_tree4 = Image(
        product_id=6,
        url="https://i.etsystatic.com/32103991/r/il/208cfe/3580606851/il_794xN.3580606851_g54q.jpg"
    )
    cat_tree5 = Image(
        product_id=6,
        url="https://i.etsystatic.com/32103991/r/il/dd03f3/3532964410/il_794xN.3532964410_ruvs.jpg"
    )
    cat_food_lid1 = Image(
        product_id=7,
        url="https://i.etsystatic.com/26339049/r/il/2d5743/3039223065/il_794xN.3039223065_qmbj.jpg"
    )
    cat_food_lid2 = Image(
        product_id=7,
        url="https://i.etsystatic.com/26339049/r/il/568212/3462732773/il_794xN.3462732773_6l7e.jpg"
    )
    cat_food_lid3 = Image(
        product_id=7,
        url="https://i.etsystatic.com/26339049/r/il/8a9620/3415061478/il_794xN.3415061478_6the.jpg"
    )
    cat_food_bowl1 = Image(
        product_id=8,
        url="https://i.etsystatic.com/17860591/r/il/0cc628/2436749262/il_794xN.2436749262_4b8a.jpg"
    )
    cat_food_bowl2 = Image(
        product_id=8,
        url="https://i.etsystatic.com/17860591/r/il/b62213/1756938766/il_794xN.1756938766_4d1p.jpg"
    )
    cat_food_bowl3 = Image(
        product_id=8,
        url="https://i.etsystatic.com/17860591/r/il/c99590/2550231124/il_794xN.2550231124_9250.jpg"
    )
    cat_bird_toy1 = Image(
        product_id=9,
        url="https://i.etsystatic.com/22528987/r/il/63cba3/3369244293/il_794xN.3369244293_k358.jpg"
    )
    cat_bird_toy2 = Image(
        product_id=9,
        url="https://i.etsystatic.com/22528987/r/il/bbdc6d/3369316675/il_794xN.3369316675_35x5.jpg"
    )
    cat_bird_toy3 = Image(
        product_id=9,
        url="https://i.etsystatic.com/22528987/r/il/1bd341/3321553658/il_794xN.3321553658_ivik.jpg"
    )
    cat_cardigan1 = Image(
        product_id=10,
        url="https://i.etsystatic.com/24610013/r/il/b7129b/3295270098/il_794xN.3295270098_ikxy.jpg"
    )
    cat_cardigan2 = Image(
        product_id=10,
        url="https://i.etsystatic.com/24610013/r/il/9f27df/3342963105/il_794xN.3342963105_7u1r.jpg"
    )
    cat_cardigan3 = Image(
        product_id=10,
        url="https://i.etsystatic.com/24610013/r/il/8e9727/3295270092/il_794xN.3295270092_em7d.jpg"
    )
    cat_cardigan4 = Image(
        product_id=10,
        url="https://i.etsystatic.com/24610013/r/il/7f3c9f/3295278410/il_794xN.3295278410_t6m1.jpg"
    )
    cat_cardigan5 = Image(
        product_id=10,
        url="https://i.etsystatic.com/24610013/r/il/3ba614/3295270888/il_794xN.3295270888_jesv.jpg"
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
    db.session.add(cat_sunglasses1)
    db.session.add(cat_sunglasses2)
    db.session.add(cat_sunglasses3)
    db.session.add(cat_cave1)
    db.session.add(cat_cave2)
    db.session.add(cat_cave3)
    db.session.add(cat_tree1)
    db.session.add(cat_tree2)
    db.session.add(cat_tree3)
    db.session.add(cat_tree4)
    db.session.add(cat_tree5)
    db.session.add(cat_food_lid1)
    db.session.add(cat_food_lid2)
    db.session.add(cat_food_lid3)
    db.session.add(cat_food_bowl1)
    db.session.add(cat_food_bowl2)
    db.session.add(cat_bird_toy1)
    db.session.add(cat_bird_toy2)
    db.session.add(cat_bird_toy3)
    db.session.add(cat_cardigan1)
    db.session.add(cat_cardigan2)
    db.session.add(cat_cardigan3)
    db.session.add(cat_cardigan4)
    db.session.add(cat_cardigan5)
    
    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()

