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
    wands = [url for url in img_urls if url.rfind('Wands') > 0]
    suits = [
        makeName(
            list(zip([url for url in img_urls if url.rfind(
                'Wands') > 0], names)), 'Wands'),
        makeName(list(zip([url for url in img_urls if url.rfind(
            'Pents') > 0], names)), 'Coins'),
        makeName(list(zip([url for url in img_urls if url.rfind(
            'Cups') > 0], names)), 'Cups'),
        makeName(list(zip([url for url in img_urls if url.rfind(
            'Swords') > 0], names)), 'Swords'), ]
    return [TarotCard(card['name'], card['suit'], card['img'],
                      card['api_endpoint'], 'minor')
            for suit in suits for card in suit]


def makeName(suits, suit):
    # print(suits[0], suits[1])
    return [{'name': f"{s[1]} of {suit}", 'suit': suit.lower(), 'img': s[0],
             'api_endpoint': f"{s[1]}_of_{suit}"} for s in suits]


minor_arcana = getCardData()
# print(minor_arcana)
