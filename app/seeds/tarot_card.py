class TarotCard:
    def __init__(self, id, name, img, query, deck):
        self._id = id
        self._name = name
        self._img = img
        self._query = query
        self._deck = deck

        @property
        def id(self):
            return self._id

        @property
        def name(self):
            return self._name

        @property
        def img(self):
            return self._img

        @property
        def query(self):
            return self._query

        @property
        def deck(self):
            return self_deck


tarot_card = TarotCard(1, 'The Fool', 'https://the_fool.jpg',
                       'The_Fool_(Tarot_card)', 'major')

print(tarot_card._name)
