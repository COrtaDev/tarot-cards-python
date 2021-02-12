from flask import Blueprint, jsonify, request
import requests
from bs4 import BeautifulSoup
from app.models import db, Card

card_routes = Blueprint('cards', __name__)


@card_routes.route('/all')
def get_all_cards():
    all_cards = Card.query.all()
    cards = [card.to_dict() for card in all_cards]
    return {'cards': cards}
    # major = get_major()
    # minor = get_minor()
    # return {'cards': [major, minor]}


# # @card_routes.route('/major')
# def get_major():
#     cards = Card.query.filter(Card.deck == 'major').all()
#     return {'deck': 'major', 'cards': [card.to_dict() for card in cards]}


# # @card_routes.route('/minor')
# def get_minor():
#     cards = Card.query.filter(Card.deck == 'minor').all()
#     return {'deck': 'minor', 'cards': [card.to_dict() for card in cards]}


# @card_routes.route('/<card_name>')
# def get_description(card_name):
#     base_url = 'https://labyrinthos.co/blogs/tarot-card-meanings-list/'
#     suit = request.args.get('suit')
#     if suit == 'trump':
#         url = base_url+card_name+'-meaning-major-arcana-tarot-card-meanings'
#         data = requests.get(url).text
#         soup = BeautifulSoup(data, "html.parser")
#         content = soup.find_all('p')
#         tag = soup.br.extract()
#         description = content[1].get_text()
#         return {'description': description}
#     elif suit == 'coins':
#         card_name = card_name.replace('coins', 'pentacles')
#         url = base_url+card_name+'-meaning-tarot-card-meanings'
#         data = requests.get(url).text
#         soup = BeautifulSoup(data, "html.parser")
#         content = soup.find_all('p')
#         description = content[1].get_text()
#         return {'description': description}
#     elif suit == 'cups' or suit == 'wands' or suit == 'swords':
#         url = base_url+card_name+'-meaning-tarot-card-meanings'
#         data = requests.get(url).text
#         soup = BeautifulSoup(data, "html.parser")
#         content = soup.find_all('p')
#         description = content[1].get_text()
#         return {'description': description}
