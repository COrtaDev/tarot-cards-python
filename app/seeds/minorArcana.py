import wikipedia
# from .minor_helper import helper as names
# from .tarot_card import TarotCard


class TarotCard:
    def __init__(self, name, suit, img, api_endpoint, deck):
        self.name = name
        self.suit = suit
        self.img = img
        self.api_endpoint = api_endpoint
        self.deck = deck


names = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
         "Nine", "Ten", "Page", "Knight", "Queen", "King", ]


def getCardData():
    img_urls = wikipedia.WikipediaPage('Minor Arcana').images
    suits = [makeName(
            [url for url in img_urls if url.rfind(
                'Wands') > 0], names, 'Wands'),
             makeName([url for url in img_urls if url.rfind(
                 'Pents') > 0], names, 'Coins'),
             makeName([url for url in img_urls if url.rfind(
                 'Cups') > 0], names, 'Cups'),
             makeName([url for url in img_urls if url.rfind(
                 'Swords') > 0], names, 'Swords'), ]
    return [TarotCard(card['name'], card['suit'], card['img'],
                      card['api_endpoint'], 'minor')
            for suit in suits for card in suit]


def makeName(url_list, names, suit):
    return [{'name': f"{name} of {suit}", 'suit': suit.lower(), 'img': url,
             'api_endpoint': f"{name}_of_{suit}"} for name in names
            for url in url_list]


minor_arcana = getCardData()
# print(minor_arcana)
