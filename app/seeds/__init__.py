from flask.cli import AppGroup

# from .majorArcana import major_arcana
# from .minorArcana import minor_arcana
# from .major import major
# from .minor_helper import helper
# from .tarot_card import TarotCard

from .cards import seed_cards, drop_all_cards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_cards()
    # Add other seed functions here


drop_commands = AppGroup('drop_all')


@drop_commands.command('cards')
def drop():
    drop_all_cards()
