import React from 'react';
import Card from './Card';
// import '../styles/css/mystyles.css';

const Deck = ({ deck }) => {
    console.log(deck);
    const cards = deck.cards.map(card=> <Card key={card.id} card={card}/>)

    return (
        <>
            <section className={"section"}>
                <div style={{ display: "flex", justifyContent: "center" }} className={"colums is-mobile"}>
                    <div className={"column is-11"}>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                            {cards}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Deck;
