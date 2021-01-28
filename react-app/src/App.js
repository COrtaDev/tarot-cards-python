import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import './styles/css/mystyles.css';

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

  if (!loaded) return null;
  console.log(cards)
  return (
    <>
      <HeroBanner />
      <Deck props={cards} />
      <Footer />
    </>
  );
}

export default App;
