import React from 'react'

const Card = ({ card }) => {
    console.log(card)
    return (
        <span >
            <div>
                <p>{card.name}</p>
                <img src={card.img} style={{ width: '200px' }} />
            </div>
        </span>
    )
}
export default Card;
