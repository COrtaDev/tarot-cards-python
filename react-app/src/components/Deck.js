import React from 'react';
import Card from './Card';
// import '../styles/css/mystyles.css';

const Deck = ({ props }) => {
    // console.log(props.cards);
    const cards = props.cards.map(deck => deck.cards.map(card => <Card key={card.id} card={card} />));

    return (
        <>
            <section className={"section"}>
                <div className={"colums"}>
                    <div className={"column is-three-fifths is-offset-one-fifth"}>
                        {cards}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Deck;
