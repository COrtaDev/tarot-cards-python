from app.models import db, Card
from .majorArcana import major_arcana as major
from .minorArcana import minor_arcana as minor
# from .description import


def seed_cards():
    seed_major()
    seed_minor()


def seed_major():
    tarot_cards = [Card(deck=card.deck, name=card.name, suit='trump',
                        img=card.img, api_endpoint=card.api_endpoint)
                   for card in major]
    db.session.add_all(tarot_cards)
    db.session.commit()


def seed_minor():
    tarot_cards = [Card(deck=card.deck, name=card.name, suit=card.suit,
                        img=card.img, api_endpoint=card.api_endpoint)
                   for card in minor]
    db.session.add_all(tarot_cards)
    db.session.commit()


def drop_all_cards():
    db.session.drop_all()
