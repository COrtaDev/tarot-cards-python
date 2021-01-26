from flask.cli import AppGroup
from .cards import seed_cards

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_cards()
    # Add other seed functions here
