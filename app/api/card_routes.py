from flask import Blueprint, jsonify
from app.models import db, Card

card_routes = Blueprint('cards', __name__)


@card_routes.route('/all')
def get_all_cards():
    major = get_major()
    minor = get_minor()
    return {'cards': [major, minor]}


@card_routes.route('/major')
def get_major():
    cards = Card.query.filter(Card.deck == 'major').all()
    return {'deck': 'major', 'cards': [card.to_dict() for card in cards]}


@card_routes.route('/minor')
def get_minor():
    cards = Card.query.filter(Card.deck == 'minor').all()
    return {'deck': 'minor', 'cards': [card.to_dict() for card in cards]}
