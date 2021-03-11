import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/login";
import { RegistrationForm } from "./Registre/Registre";

import Navbar from './../../components/Navbar/Navbar';

function RoutesPublic({setAuth}) {
  return (
    <>
    
    <Switch> 
      <Route path="/" exact >
      <Navbar/>
        <Home/>
      </Route>
      <Route path="/login" exact>
       <Login setAuth={setAuth}/>
        </Route>
      <Route path="/register" component={RegistrationForm} />
     
    </Switch>
    </>
  );
}

export default RoutesPublic;
