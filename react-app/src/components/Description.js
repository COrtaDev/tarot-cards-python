import React, { useEffect, useState } from 'react';

const Description = ({ modalState, name, card }) => {
  const [description, setDescription] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // console.log(card.suit)
  useEffect(() => {
    // console.log(modalState)
    // if (description) return
    if (!modalState) return;
    (async () => {
      const data = await fetch(`api/cards/${name.toLowerCase().replaceAll(" ", "-")}?suit=${card.suit}`)
      const description = await data.json();
      if (!description.errors) {
        setDescription(description);
      }
      setLoaded(true);
    })();
  }, [card.suit, modalState, name]);

  if (!loaded) return null;
  // console.log(description)
  return (
    <p className={"has-text-justified is-size-4-mobile is-size-3"} style={{ color: 'black' }}>{description.description}</p>
    // <p style={{ color: 'black' }}>{description.description}</p>
  )
}

export default Description;
