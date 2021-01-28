import React, { useState } from 'react';
import DetailModal from './DetailModal';

const Card = ({ card }) => {
    const [modalState, setModalState] = useState(false);

    function toggleModal() {
        setModalState(!modalState);
    }

    return (
        <>
            <DetailModal card={card} closeModal={toggleModal} modalState={modalState} />
            <div onClick={() => toggleModal()} style={{ margin: "0.5rem 0.5rem" }}>
                <div style={{ width: "200px" }} className={"box box-radius"}>
                    <div className={"card"} >
                        <header className={"card-header"}>
                            <p className={"card-header-title is-centered"}>{card.name}</p>
                        </header>
                        <div className={"card-image"}>
                            <figure className={"image is-3by5"}>
                                <img src={card.img} alt={""} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
