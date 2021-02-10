import React from 'react';

const CardTiles = () => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </article>
            <article className="tile is-child notification is-warning">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                {/* <img src="https://bulma.io/images/placeholders/640x480.png"> */}
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            {/* <p className="title">Description</p> */}
            <p className="subtitle">Description</p>
            <div className="content">
            "You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon’s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.\n\nThe High Priestess's location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess."
              {/* <!-- Content --> */}
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-success">
          <div className="content">
            <p className="title">Meaning</p>
            {/* <p className="subtitle"></p> */}
            <div className="content">
            The meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated.\n\nThe card itself shows a night-time scene, meaning that the world in which she protects and guards is one that may at first seem frightening, but has the potential to lead us into the growth of the self. When she appears in a reading, she is calling to you to listen to her message, and follow her into your own depths. There is searching within yourself to be done for the answers that you seek. The answers to the questions you have are within, not without."
            {/* "You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon’s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.\n\nThe High Priestess's location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess." */}
              {/* <!-- Content --> */}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CardTiles;
