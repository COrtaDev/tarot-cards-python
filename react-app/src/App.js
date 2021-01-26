import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
// import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
// import { authenticate } from "./services/auth";

function App() {
  const [deck, setDeck] = useState(null);
  // const [authenticated, setAuthenticated] = useState(false);
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
    // (async () => {
    //   const user = await authenticate();
    //   if (!user.errors) {
    //     setAuthenticated(true);
    //   }
    //   setLoaded(true);
    // })();
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
