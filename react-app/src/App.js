import React, { useState, useEffect } from "react";

function App() {
  const [deck, setDeck] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch('/api/cards/major', {
        headers: {
          "Content-Type": "application/json",
        }
      });
      const cards = await data.json();
      if (!cards.errors) {
        setDeck(cards);
      }
      setLoaded(true)
    })();
  }, []);

  if (!loaded) {
    return null;
  }
  console.log(deck)
  return (
    <>
      <h1>My Home Page</h1>
    </>
  );
}

export default App;
