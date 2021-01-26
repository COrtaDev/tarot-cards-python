from app.models import db, Card
from .majorArcana import major_arcana as cards


def seed_cards():
    tarot_cards = [Card(deck=card.deck, name=card.name,
                        img=card.img, query=card.query) for card in cards]
    db.session.add_all(tarot_cards)
    db.session.commit()
