import React from 'react';
import CardTiles from './CardTiles';
// import tarotCards from '../../cards/tarot';

// const theHighPriestess = tarotCards[2];
// console.log(theHighPriestess);

const CardModal = ({ closeModal, modalState }) => {
  if (!modalState) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div style={{ overflow: "hidden" }} className="modal-content">
        <CardTiles />
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
  )
}
export default CardModal;
