import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/login";
import { RegistrationForm } from "./Registre/Registre";
import { Services } from "../Services/Services";
import Navbar from './../../components/Navbar/Navbar';

function RoutesPublic({setAuth}) {
  return (
    <>
    <Navbar/>
    <Switch> 
      <Route path="/" exact >
        <Home/>
      </Route>
      <Route path="/login" exact>
       <Login setAuth={setAuth}/>
        </Route>
      <Route path="/register" component={RegistrationForm} />
      <Route path="/services" component={Services} />
      <Route path="/about">
        <h1>Quienes somos</h1>
      </Route>
    </Switch>
    </>
  );
}

export default RoutesPublic;
