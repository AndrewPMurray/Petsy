from flask.cli import AppGroup
from .users import seed_users, undo_users
from .pet_types import seed_pet_types, undo_pet_types
from .product_types import seed_product_types, undo_product_types
from .images import seed_images, undo_images
from .products import seed_products, undo_products
from .reviews import seed_reviews, undo_reviews
from .purchases import seed_purchases, undo_purchases

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pet_types()
    seed_product_types()
    seed_products()
    seed_images()
    seed_reviews()
    seed_purchases()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_pet_types()
    undo_product_types()
    undo_images()
    undo_products()
    undo_reviews()
    undo_purchases()
    # Add other undo functions here
