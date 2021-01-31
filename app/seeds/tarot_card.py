class TarotCard:
    def __init__(self, name, suit, img, api_endpoint, deck, description=''):
        self.name = name
        self.suit = suit
        self.img = img
        self.api_endpoint = api_endpoint
        self.deck = deck
        self.description = description

        @property
        def name(self):
            return self.name

        @property
        def suit(self):
            return self.nasuitme

        @property
        def img(self):
            return self.img

        @property
        def api_endpoint(self):
            return self.api_endpoint

        @property
        def deck(self):
            return self.deck

        @property
        def description(self):
            return self.description

        def __repr__(self):
            return f"TarotCard(name={self.name}, suit={self.suit}, img={self.img}, api_endpoint={self.api_endpoint}, deck={self.deck}, descripton={self.description})"
