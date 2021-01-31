import requests
from bs4 import BeautifulSoup
from .tarot_card import TarotCard
from .minorArcana import minor_arcana
from .majorArcana import major_arcana


def get_description(card_name):
    base_url = 'https://labyrinthos.co/blogs/tarot-card-meanings-list/'
    # suit = request.args.get('suit')
    if suit == 'trump':
        url = base_url+card_name+'-meaning-major-arcana-tarot-card-meanings'
        data = requests.get(url).text
        soup = BeautifulSoup(data, "html.parser")
        content = soup.find_all('p')
        tag = soup.br.extract()
        description = content[1].get_text()
        return {'description': description}
    elif suit == 'coins':
        card_name = card_name.replace('coins', 'pentacles')
        url = base_url+card_name+'-meaning-tarot-card-meanings'
        data = requests.get(url).text
        soup = BeautifulSoup(data, "html.parser")
        content = soup.find_all('p')
        description = content[1].get_text()
        return {'description': description}
    elif suit == 'cups' or suit == 'wands' or suit == 'swords':
        url = base_url+card_name+'-meaning-tarot-card-meanings'
        data = requests.get(url).text
        soup = BeautifulSoup(data, "html.parser")
        content = soup.find_all('p')
        description = content[1].get_text()
        return {'description': description}


# major = [TarotCard(card.name)]
