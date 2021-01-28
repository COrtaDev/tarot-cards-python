import React from 'react';
import Description from './Description';
// import Modal from 'react-bootstrap/Modal';


const DetailModal = ({ closeModal, modalState, card }) => {
  if (!modalState) return null;
  return (
    <div className={"modal is-active"}>
      <div className={"modal-background"} onClick={closeModal}></div>
      <div className={"modal-content"}>
        <p className={"image is-full-height"}>
          <div className={"modal-card"}>
            <header className={"modal-card-head"}>
              <p className={"modal-card-title"}>{card.name}</p>
              <button
                className={"delete"} aria-label={"close"} onClick={closeModal}></button>
            </header>
            <section className={"modal-card-body"}>
              <div className={"container"}>
                <div className={"columns is-mobile"}>
                  <div className={"column is-one-third"}>
                    <figure className={"image is-3by5"}>
                      <img src={card.img} alt={card.name} />
                    </figure>
                  </div>
                  <div className={"column is-two-thirds"}>
                    <Description modalState={modalState} name={card.name} card={card} />
                  </div>
                </div>
              </div>
            </section>
            <footer className={"modal-card-foot"}>
              <div className={"container"}>
                <div className={"columns"} style={{ display: "flex", justifyContent: "center" }} >
                  <div className={"column is-half"} >
                    <button className={"button is-fullwidth"} onClick={closeModal}>Back</button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </p>
      </div>
    </div>
  );
}

export default DetailModal;
