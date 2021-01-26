from app.models import db, Card
from .majorArcana import major_arcana as cards
from .minorArcana import minor_arcana


def seed_cards():
    tarot_cards = [Card(deck=card.deck, name=card.name, img=card.img,
                        api_endpoint=card.api_endpoint) for card in cards]
    db.session.add_all(tarot_cards)
    db.session.commit()
