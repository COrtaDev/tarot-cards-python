import React from 'react';
import Card from './Card';

const Deck = ({ props }) => {
    // console.log(props.cards);
    const cards = props.cards.map(deck => deck.cards.map(card => <Card key={card.id} card={card} />));

    return (
        <>
            <section className={"section"}>
                <div>
                    <div className={"container"} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {cards}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Deck;
