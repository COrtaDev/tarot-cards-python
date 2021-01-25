from app.models import db, Cards
from .majorArcana import major_arcana as cards


def seed_cards():
    for card in cards:
        tarot_card = Card(deck=card.deck, name=card)
    # cards = [for card in major]
    # We are going to write the scripts to
    # automaticallly seed the database from here
    # card = Card(deck='')
