from app.models import db, Product


# Adds a demo user, you can add other users here if you want
def seed_products():
    product1 = Product(
        title='Braided Fleece Dog Tug Toys',
        price=4.99,
        details='["Handmade","Materials: Fleece"]',
        description='FAST shipping (usually within one day). Variety of color combinations. Two different braid types. Washable. Safer & softer than rope. Very stretchy - great for tug wars. Reminder: colors may not be exactly accurately displayed in the images.',
        quantity=12,
        user_id=1,
        product_type_id=2,
        pet_type_id=2
        )
    
    product2 = Product(
    title='Duck Combo Sample Pack - Natural Dog Chews - Homemade Organic Dog Treats',
    price=8.99,
    details='["Handmade", "Materials: Duck Neck, Duck Leg, Duck Wing, Duck Feet, Duck Head"]',
    description="""
Ingredient: 100% Duck

**Deluxe Duck Combo:

- Duck Feet 2 pc
- Large Duck Wing 1 pc
- Half Duck Head 2 pc
- Duck Leg 1 pc
- Duck Neck 1 pc
- Duck Gizzard 0.5 oz

**Regular Duck Combo:

- Duck Foot 1 pc
- Regular Duck Wing 1 pc
- Half Duck Head 2 pc
- Duck Gizzard 0.5 oz

100% Healthy and Natural Guarantee: No additives, No preservatives, Single Ingredient, Fat Free

The bones in our dog treats are safe for sure. Both raw and dehydrated bones are safe for dogs. They are not as hard as cooked bones, the dehydrated bones are extremely crunchy and usually need to be dehydrated for 48-72 hours to ensure safety. Our bones are processed at a very low temperature. When your dog chewed, the bones would become crushed rather than splinters. In addition, bones are a taste of the wild and rich in minerals, which is good for dogs.

Duck Benefits:

1. A low-allergen white meat alternative for dogs who have poultry sensitivities
2. A cooling protein, providing relief of allergies and skin irritations for dogs
3. A source of iron and easy-to-digest protein
4. Rich in amino acids, which helps support you pups strong muscles.

Don't forget to provide plenty of water after your pup has enjoyed our tasty treats.

Please store in the refrigerator after opening to ensure freshness and longevity.
If stored at room temperature, please keep in a dry place and consume within two weeks.
""",
    quantity=20,
    user_id=2,
    product_type_id=1,
    pet_type_id=2
    )


    db.session.add(product1)
    db.session.add(product2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

