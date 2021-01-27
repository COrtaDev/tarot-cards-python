import React from 'react'

const Card = ({ card }) => {
    console.log(card)
    return (

        <div className={"card"}>
            <header className={"card-header"}>
                <p className={"card-header-title is-centered"}>{card.name}</p>
            </header>
            <div className={"card-image"}>
                <figure className={"image is-3by5 is-fullwidth"}>
                    <img src={card.img}  alt={""} />
                </figure>
            </div>
            {/* <footer className={"card-footer"}>
                <a href="#" className={"card-footer-item"}>Save</a>
                <a href="#" className={"card-footer-item"}>Edit</a>
                <a className={"card-footer-item"}>Delete</a>
            </footer> */}
        </div>

    )
}
export default Card;
