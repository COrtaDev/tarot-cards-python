import wikipedia
from .minor import helper
from .tarot_card import TarotCard


def getCardData():
    img_urls = wikipedia.WikipediaPage('Minor Arcana').images
    wands_urls = [url for url in img_urls if url.rfind('Wands') > 0]
    coins_urls = [url for url in img_urls if url.rfind('Pents') > 0]
    cups_urls = [url for url in img_urls if url.rfind('Cups') > 0]
    swords_urls = [url for url in img_urls if url.rfind('Swords') > 0]
    # We would like to return a list full of tarot card objects in the end
    # Right now, we have 4 lists of urls per suit.
    # Next, we need to iterate over the helper list and make a name for
    # each card for each suit
    makeName(wands_urls, help, 'Wands')
    return


def makeName(suitArr, helper, suit):
    for name in helper:
        print(f"{name} of {suit}")

    return


    # def makeCardFromSuit(suitArr, suit):
    #     cards = [TarotCard()]
    # for card in suitArr:
    #     tarot_card = TarotCard
getCardData()
