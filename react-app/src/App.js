import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";

function App() {
  const [cards, setCards] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch('/api/cards/all');
      const cards = await data.json();
      if (!cards.errors) {
        setCards(cards);
      }
      setLoaded(true)
    })();
  }, []);

  if (!loaded) {
    return null;
  }
  // console.log(cards)
  return (
    <>
      <h1>My Home Page</h1>
      <Deck props={cards} />
    </>
  );
}

export default App;
