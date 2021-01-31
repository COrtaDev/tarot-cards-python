from app.models import db, Card
from .majorArcana import major_arcana as major
from .minorArcana import minor_arcana as minor


def seed_cards():
    seed_major()
    seed_minor()
    db.session.commit()


def seed_major():
    tarot_cards = [Card(deck=card.deck, name=card.name, suit='trump',
                        img=card.img, api_endpoint=card.api_endpoint)
                   for card in major]
    db.session.add_all(tarot_cards)
    db.session.flush()  # Sends the data to the database


def seed_minor():
    tarot_cards = [Card(deck=card.deck, name=card.name, suit=card.suit,
                        img=card.img, api_endpoint=card.api_endpoint)
                   for card in minor]
    db.session.add_all(tarot_cards)
    db.session.flush()  # Sends the data to the database


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_cards():
    db.session.execute('TRUNCATE cards;')
    db.session.commit()
