from .db import db


class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    deck = db.Column(db.String(5), nullable=False)
    name = db.Column(db.String(40), nullable=False, unique=True)
    suit = db.Column(db.String(12), nullable=False)
    img = db.Column(db.String(255), nullable=False, unique=True)
    api_endpoint = db.Column(db.String(60), nullable=False, unique=True)
    # description = db.Column(db.Text, nullable=False)
    # upKWs = db.Column(db.String(255), nullable=False)
    # revKWs = db.Column(db.String(255), nullable=False)
    # upMeaning = db.Column(db.Text, nullable=False)
    # revMeaning = db.Column(db.Text, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'deck': self.deck,
            'name': self.name,
            'suit': self.suit,
            'img': self.img,
            'api_endpoint': self.api_endpoint,
            #     'description': self.description,
            #     'upKWs': self.upKWs,
            #     'revKWs': self.revKWs,
            #     'upMeaning': self.upMeaning,
            #     'revMeaning': self.revMeaning,
        }
