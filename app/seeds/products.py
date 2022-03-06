from app.models import db, Product


def seed_products():    
    cat_slippers = Product(
        title='Crotchet Slippers for Cats - Orange Magic Flying Slippers, Cat Accessories, Cat Clothes, Gifts for cat lovers, Cat Toys',
        price=13.00,
        details='["Handmade","Materials: crotchet, Yarn, Blue Flower"]',
        description="""
These Orange Magic Flying Slippers are great photo ops, but also great fun. Each slipper end has a loop to attach to your teaser wand. Just pop on, drag, and play. And if your cat is a slipper-stealer likes ours - you can let them know they have their own set of house slippers now. The Orange Magic Flying Slippers come in a pair with one plain slipper and one decorated with a small purple flower.
Our Orange Magic Flying Slippers includes:
• 2 handmade Orange Magic Flying Slippers; 1 x Plain Orange, 1 x Orange with Small Purple Flower
More product details:
• Not machine washable
• Hand crocheted in South Korea
• Fits cats up to 14 lbs
Dimensions (approximate):
• Length: 3 inches per slipper 
• Width: 2 inches per slipper 
        """,
        quantity=21,
        user_id=4,
        product_type_id=4,
        pet_type_id=1
        )
    
    cat_weed = Product(
        title='Catbuzz Premium and Organically Grown Catnip | Fresh | Grown by Family Farmers in USA | All-Natural | Eco-Friendly',
        price=12.95,
        details='["Handmade","Materials: catnip, leaves and flowers"]',
        description="""
⭐ PREMIUM CATNIP: The highest quality organically grown catnip, hand-harvested at the peak of the season for freshness, and a brilliant design you and your cats will love!
😻 ONLY THE BEST: Our catnip is non-GMO, all-natural. We make sure we only harvest the best quality catnip possible because we believe your pets are our family.
🙌 GREAT VALUE: Comes with pure catnip leaves and flowers in a 100% cotton drawstring pouch. All packaged in an eco-friendly reusable tube container.
♻️ ECO-FRIENDLY: The packaging is made from FSC certified sustainable and biodegradable materials with corn-based green ink. A small portion of your purchases will go towards supporting wildlife ecosystems to help keep the planet green for our cats. Learn more at Pettobox.com
USA GROWN & PACKAGED: This catnip was grown and hand-harvested by family farmers in Rainier, Washington, and packaged in California.

Catbuzz contains a magical blend of leaves and flowers of the catnip plant wrapped in a reusable cotton pouch; for easy, safe, and fresh storage and packaged in our bio-degradable and eco-friendly packaging. Why is this blend so magical? Nepetalactone, the chemical compound that produces psychedelic effects on cats, is most concentrated in the leaves and flowers of the catnip plant.

Fun fact! Catnip (Nepeta cataria) belongs to the mint family Lamiaceae, which includes aromatic herbs such as rosemary, sage, oregano, and basil.

Our catnip is:

High-quality
Non-GMO
Organically grown and all-natural
Hand-harvested
Hand-packaged
Grown locally in Rainier, Washington by family farmers

The packaging is biodegradable, environmentally friendly, and reusable. Please help keep our planet green for our cats! As part of our commitment to sustainability, a small portion of your purchase will go towards saving and improving wildlife ecosystems. Learn more visit pettobox.com/pages/sustainability.

What to Expect

Catnip is considered to be nonaddictive and completely harmless to cats. When cats smell catnip they exhibit several behaviors: They may rub their heads and body on the herb or jump, roll around, vocalize and salivate. This response lasts for about 10 minutes, after which the cat becomes temporarily immune to catnip's effects for roughly 30 minutes. Response to catnip is hereditary; about 70 to 80 percent of cats exhibit this behavior in the plant's presence. In addition, catnip does not affect kittens until they are about six months old and begin to reach sexual maturity.
        """,
        quantity=12,
        user_id=5,
        product_type_id=1,
        pet_type_id=1
    )

    cat_gift_box = Product(
        title='Quarantine Cat Gift Box, New Kitten Goody Box, Organic Catnip Mice, Eco-friendly Pet Gifts, Unique Cat Gift, Sock Mouse, Free Shipping',
        price=26.00,
        details='["Handmade","Materials: organic catnip, cat treats, giant pipe cleaner, Three Blind Mice, darn socks mice, shoelaces, felted wool sweaters, Pipe cleaner"]',
        description="""
Working from home with cats certainly is easier than with kids, but your furry friend can still be a distraction. Spoil your favorite feline with this Quarantine Cat Gift Box. No guarantees for increased work from home productivity. You may find yourself with a Camera Roll filled with cute cat photos!

Current boxes don’t have the see thru windows, but it’s what’s inside that matters.

Included:

darn!socks catnip mouse
one Three Bind mouse
giant pipe cleaner
fluorescent ping pong ball
silvervine chew stick
small packet of organic catnip
small packet of nutritional yeast (aka “cat crack”— sprinkle on food or just give a little pinch as a treat)
small packet of freeze dried minnows or cat treats

SHIPPING INCLUDED

Or ship your gift in a fun decorative mailer for $4. Use the drop menu to add this to your order.

Colors vary, but your cat won’t care!

Three Blind Mice: They may be blind, but they sure are cute! Felted wool sweater scraps with organic catnip rolled inside for extra oomph!

darn!socks: I’m just an old holey sock, filled with organic catnip, recycled crinkly plastic and pop bottle stuffing. Your cat will love me!

just need mice?

just one or two?- https://www.etsy.com/listing/62029712/darn-socks-upcycled-wool-sock-cat-toy?

know a lot of crazy cat ladies?

find more gift boxes here: https://www.etsy.com/shop/MarvelousMelissa?section_id=15513538&ref=shopsection_leftnav_5

Three Blind Mice: They may be blind, but they sure are cute! Felted wool sweater scraps with organic catnip rolled inside for extra oomph!

darn!socks: I’m just an old holey sock, filled with organic catnip, recycled crinkly plastic and pop bottle stuffing. Your cat will love me!
        """,
        quantity=5,
        user_id=5,
        product_type_id=2,
        pet_type_id=1
        )


    db.session.add(cat_slippers)
    db.session.add(cat_weed)
    db.session.add(cat_gift_box)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

