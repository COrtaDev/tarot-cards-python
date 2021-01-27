import React from 'react'

const Card = ({ card }) => {
    // console.log(card)
    return (
        <div className={"card"}>
            <header className={"card-header"}>
                <p className={"card-header-title is-centered"}>{card.name}</p>
            </header>
            <div className={"card-image"}>
                <figure className={"image is-3by5 is-fullwidth"}>
                    <img src={card.img} alt={""} />
                </figure>
            </div>
        </div>
    );
}
export default Card;
