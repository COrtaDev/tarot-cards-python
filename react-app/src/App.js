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
  // const [authenticated, setAuthenticated] = useState(false);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // (async () => {
    //   const user = await authenticate();
    //   if (!user.errors) {
    //     setAuthenticated(true);
    //   }
    //   setLoaded(true);
    // })();
  }, []);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <>
      <h1>My Home Page</h1>
    </>
  );
}

export default App;