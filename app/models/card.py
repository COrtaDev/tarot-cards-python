from .db import db


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=True)
    deck = db.Column(db.String, nullable=False)
    suit = db.Column(db.String, nullable=False)
    value = db.Column(db.Integer, nullable=False)
    img = db.Column(db.String, nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False)
    upright_keywords = db.Column(db.Text, nullable=False)
    upright_general_meaning = db.Column(db.Text, nullable=False)
    upright_genereal_quote = db.Column(db.Text, nullable=False)
    upright_career_keywords = db.Column(db.Text, nullable=False)
    upright_love_keywords = db.Column(db.Text, nullable=False)
    upright_finances_keywords = db.Column(db.Text, nullable=False)
    upright_career_meaning = db.Column(db.Text, nullable=False)
    upright_love_meaning = db.Column(db.Text, nullable=False)
    upright_finances_meaning = db.Column(db.Text, nullable=False)
    reversed_keywords = db.Column(db.Text, nullable=False)
    reversed_general_meaning = db.Column(db.Text, nullable=False)
    reversed_genereal_quote = db.Column(db.Text, nullable=True)
    reversed_career_keywords = db.Column(db.Text, nullable=False)
    reversed_love_keywords = db.Column(db.Text, nullable=False)
    reversed_finances_keywords = db.Column(db.Text, nullable=False)
    reversed_career_meaning = db.Column(db.Text, nullable=False)
    reversed_love_meaning = db.Column(db.Text, nullable=False)
    reversed_finances_meaning = db.Column(db.Text, nullable=False)
    astrology = db.Column(db.String, nullable=True)
    element = db.Column(db.String, nullable=True)
    zodiac = db.Column(db.String, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'deck': self.deck,
            'suit': self.suit,
            'value': self.value,
            'img': self.img,
            'description': self.description,
            'upright_keywords': self.upright_keywords,
            'upright_general_meaning': self.upright_general_meaning,
            'upright_genereal_quote': self.upright_genereal_quote,
            'upright_career_keywords': self.upright_career_keywords,
            'upright_love_keywords': self.upright_love_keywords,
            'upright_finances_keywords': self.upright_finances_keywords,
            'upright_career_meaning': self.upright_career_meaning,
            'upright_love_meaning': self.upright_love_meaning,
            'upright_finances_meaning': self.upright_finances_meaning,
            'reversed_keywords': self.reversed_keywords,
            'reversed_general_meaning': self.reversed_general_meaning,
            'reversed_genereal_quote': self.reversed_genereal_quote,
            'reversed_career_keywords': self.reversed_career_keywords,
            'reversed_love_keywords': self.reversed_love_keywords,
            'reversed_finances_keywords': self.reversed_finances_keywords,
            'reversed_career_meaning': self.reversed_career_meaning,
            'reversed_love_meaning': self.reversed_love_meaning,
            'reversed_finances_meaning': self.reversed_finances_meaning,
            'astrology': self.astrology,
            'element': self.element,
            'zodiac': self.zodiac,
        }
