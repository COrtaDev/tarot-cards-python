from app.models import db, Card
from app.seedables import tarot_card_data
# from .majorArcana import major_arcana as major
# from .minorArcana import minor_arcana as minor


def seed_cards():
    # seed_major()
    # seed_minor()
    seed_deck()
    db.session.commit()


def seed_deck():
    tarot_cards = [
        Card(name=data['name'],
             deck=data['deck'],
             suit=data['suit'],
             value=data['value'],
             img=data['img'],
             description=data['description'],
             upright_keywords=data['uprightKeywords'],
             upright_general_meaning=data['uprightGeneralMeaning'],
             upright_genereal_quote=data['uprightGeneralQuote'],
             upright_career_keywords=data['uprightCareerKeywords'],
             upright_love_keywords=data['uprightLoveKeywords'],
             upright_finances_keywords=data['uprightFinancesKeywords'],
             upright_career_meaning=data['uprightCareerMeaning'],
             upright_love_meaning=data['uprightLoveMeaning'],
             upright_finances_meaning=data['uprightFinancesMeaning'],
             reversed_keywords=data['reversedKeywords'],
             reversed_general_meaning=data['reversedGeneralMeaning'],
             reversed_genereal_quote=data['reversedGeneralQuote'],
             reversed_career_keywords=data['reversedCareerKeywords'],
             reversed_love_keywords=data['reversedLoveKeywords'],
             reversed_finances_keywords=data['reversedFinancesKeywords'],
             reversed_career_meaning=data['reversedCareerMeaning'],
             reversed_love_meaning=data['reversedLoveMeaning'],
             reversed_finances_meaning=data['reversedFinancesMeaning'],
             astrology=data['astrology'],
             element=data['element'],
             zodiac=data['zodiac'],
             )for data in tarot_card_data]
    db.session.add_all(tarot_cards)
    # db.session.flush()
    # def seed_major():
    #     tarot_cards = [Card(deck=card.deck, name=card.name, suit='trump',
    #                         img=card.img, api_endpoint=card.api_endpoint)
    #                    for card in major]
    #     db.session.add_all(tarot_cards)
    #     db.session.flush()  # Sends the data to the database

    # def seed_minor():
    #     tarot_cards = [Card(deck=card.deck, name=card.name, suit=card.suit,
    #                         img=card.img, api_endpoint=card.api_endpoint)
    #                    for card in minor]
    #     db.session.add_all(tarot_cards)
    #     db.session.flush()  # Sends the data to the database

    # Uses a raw SQL query to TRUNCATE the users table.
    # SQLAlchemy doesn't have a built in function to do this
    # TRUNCATE Removes all the data from the table, and resets
    # the auto incrementing primary key


def undo_cards():
    db.session.execute('TRUNCATE cards;')
    db.session.commit()
