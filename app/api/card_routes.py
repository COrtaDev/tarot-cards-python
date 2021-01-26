from flask import Blueprint, jsonify
from app.models import Card

card_routes = Blueprint('cards', __name__)


@card_routes.route('/major')
def major():
    # db.session.query
    print("Up here nigga!!!")
    cards = Card.query.get()
    # cards = session.query(Card).filter(Card.deck == 'major').all()
    # cards = Card.query.filter(Card.deck == 'major')
    return {'deck': [card.to_dict() for card in cards]}
    # print("hello earth")
    # return {"This is it!"}
