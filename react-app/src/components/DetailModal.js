import React from "react";

const DetailModal = ({ closeModal, modalState, card }) => {
  if (!modalState) return null;
  return (
    <div className={"modal is-active mx-4-fullhd-only"}>
      <div className={"modal-background"} onClick={closeModal}></div>
      <div className={"modal-content"}>
        <p className={"image is-fullheight-mobile"}>
          <div className={"modal-card"}>
            <header className={"modal-card-head"}>
              <p className={"modal-card-title is-size-1"}>{card.name}</p>
              <button
                className={"delete is-large"}
                aria-label={"close"}
                onClick={closeModal}
              ></button>
            </header>
            <section
              className={
                "modal-card-body is-clipped-fullhd is-clipped-widescreen is-clipped-desktop"
              }
            >
              <div className={"container "}>
                <div className={"columns is-mobile"}>
                  <div className={"column is-fullwidth is-fullwidth-mobile"}>
                    <figure className={"image is-3by5 "}>
                      <img src={card.img} alt={card.name} />
                    </figure>
                  </div>
                  <div className={"column is-two-thirds"}>
                    <p
                      style={{ color: "black" }}
                      className={
                        "has-text-justified is-size-6-desktop is-size-4-mobile is-size-3"
                      }
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <footer className={"modal-card-foot"}>
              <div className={"container"}>
                <div
                  className={"columns"}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className={"column is-half"}>
                    <button
                      className={"button is-large is-fullwidth"}
                      onClick={closeModal}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </p>
      </div>
    </div>
  );
};

export default DetailModal;
