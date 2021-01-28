import React from 'react';
// import Modal from 'react-bootstrap/Modal';


const DetailModal = ({ closeModal, modalState, card }) => {
  if (!modalState) return null;
  return (
    <div className={"modal is-active"}>
      <div className={"modal-background"} onClick={closeModal}></div>
      <div className={"modal-card"}>
        <header className={"modal-card-head"}>
          <p className={"modal-card-title"}>{card.name}</p>
          <button
            className={"delete"} aria-label={"close"} onClick={closeModal}></button>
        </header>
        <section className={"modal-card-body"}>

        </section>
        <footer className={"modal-card-foot"}>
          <div className={"container"}>
            <button className={"button is-fullwidth"} onClick={closeModal}>Back</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DetailModal;
