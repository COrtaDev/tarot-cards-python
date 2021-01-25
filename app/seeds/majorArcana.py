import wikipedia
from major import major
from tarot_card import TarotCard


# takes in an array of objects and adds
#  a query property and and img url to each
def getCardData(deck):
    for card in deck:
        card['query'] = card['name'].replace(' ', '_') + '_(Tarot_card)'
        urls = wikipedia.WikipediaPage(card['query']).images
        for url in urls:
            if '/RWS' in url:
                card['img'] = url
    return deck


# Here we make the cards array and make objects out of it.
cards = getCardData(major)
# Now that we have and array of cards, we can make a
# tarot card object for each one:
major_arcana = [TarotCard(card['id'], card['name'], card['img'],
                          card['query'], 'major') for card in cards]
print(major_arcana)
# major_card = major_arcana[0]
# print(major_card.name)
# print(major_card.img)
# print(getImgData(major))
