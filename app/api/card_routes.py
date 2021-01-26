from flask import Blueprint, jsonify
from app.models import db, Card

card_routes = Blueprint('cards', __name__)


@card_routes.route('/major')
def get_major():
    cards = Card.query.filter(Card.deck == 'major').all()
    return {'deck': [card.to_dict() for card in cards]}
