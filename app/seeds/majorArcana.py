import wikipedia
from .major import major
from .tarot_card import TarotCard


# takes in an array of objects and adds
#  a query property and and img url to each
def getCardData(deck):
    for card in deck:
        card['api_endpoint'] = card['name'].replace(' ', '_') + '_(Tarot_card)'
        urls = wikipedia.WikipediaPage(card['api_endpoint']).images
        for url in urls:
            if '/RWS' in url:
                card['img'] = url
    return deck


# Here we make the cards array and make objects out of it.
cards = getCardData(major)
# Now that we have and array of cards, we can make a
# tarot card object for each one:
major_arcana = [TarotCard(card['id'], card['name'], card['img'],
                          card['api_endpoint'], 'major') for card in cards]
