import React, { useState } from 'react';
import CardModal from './CardModal';
import '../../styles/css/newcard.css';

const FlippableCard = () => {
  const [cardState, setCardState] = useState("");
  const [modalState, setModalState] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  function toggleModal() {
    setModalState(!modalState);
    setModalShow(!modalShow);
  };

  function flip(e) {
    e.preventDefault();
    if (modalShow) return;
    if (!cardState) {
      setCardState('flipped');
    } else {
      setCardState('');
    }
  };

  return (
    <>
      <CardModal closeModal={toggleModal} modalState={modalState} />
      <section className={"singlecard"}>
        <div id="card1" className={`card ${cardState}`} onClick={flip}>
          <figure className={"front"}><img src="http://www.sacred-texts.com/tarot/tcc/img/ugar02.jpg" /></figure>
          <figure className={"back"} >
            <button className={"button is-outlined"} onClick={() => toggleModal()}>Get Info</button>
          </figure>
        </div>
      </section>
    </>
  );
}

export default FlippableCard;
