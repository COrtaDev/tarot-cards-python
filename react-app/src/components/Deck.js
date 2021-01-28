import React from 'react';
import Card from './Card';
// import '../styles/css/mystyles.css';

const Deck = ({ props }) => {
    // console.log(props.cards);
    const cards = props.cards.map(deck => deck.cards.map(card => <Card key={card.id} card={card} />));

    return (
        <>
            <section className={"section"}>
                <div style={{ display: "flex", justifyContent: "center" }} className={"colums"}>
                    {/* <div className={"column is-three-fifths is-offset-one-fifth"}> */}
                    {/* <div className={"column is-1"}></div> */}
                    <div className={"column is-four-fifths"}>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                            {cards}
                        </div>
                    </div>
                    {/* <div className={"column is-1"}></div> */}
                </div>
            </section>
        </>
    );
}

export default Deck;
