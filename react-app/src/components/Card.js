import React from 'react'

const Card = ({ card }) => {
    console.log(card)
    return (
        <span >
            <div>
                <h6>{card.name}</h6>
                <img src={card.img} style={{ width: '200px' }} alt={""}/>
            </div>
        </span>
    )
}
export default Card;
