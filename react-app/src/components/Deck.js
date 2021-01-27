import React from 'react';
import Card from './Card';

const Deck = ({ props }) => {
    // console.log(props.cards);
    const cards = props.cards.map(deck => deck.cards.map(card => <Card card={card} />));

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {cards}
            </div>
        </>
    );

}

export default Deck;
