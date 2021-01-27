import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";
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

  if (!loaded) {
    return null;
  }
  // console.log(cards)
  return (
    <>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Hero title
      </h1>
            <h2 class="subtitle">
              Hero subtitle
      </h2>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <div className={"container"}>
          <Deck props={cards} />
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">

        </div>
      </footer>
    </>
  );
}

export default App;
