import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import FlippableCard from "./components/card/FlippableCard";
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
  // console.log(cards)
  return (
    <>
      <BrowserRouter>
        <Route exact path={"/"}>
          <HeroBanner />
          <Deck deck={cards} />
          <Footer />
        </Route>
        <Route exact path={"/newcard"}>
          <FlippableCard />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
