import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import token from "./localstorage/token";
import RoutesPrivate from "./Views/Private/RoutesPrivate";
import RoutesPublic from "./Views/Public/RoutesPublic";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(token.getToken() !== null);
  }, [setAuth]);

  return <Router>{auth ? <RoutesPrivate setAuth={setAuth} /> : <RoutesPublic setAuth={setAuth}/>}</Router>;
}

export default App;
