import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import {Login} from "../Login/login";
import {RegistrationForm} from "../Registre/Registre";
import {Services} from "../Services/Services";

export const Rutas =()=>{

        return( 
        
                <Router>
                    <Switch>    
                        <Route exact path="/"  component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/login" component={Login}/> 
                        <Route path="/registre" component={RegistrationForm}/> 
                        <Route path="/services" component={Services}/> 
                    </Switch>
                </Router>

        )
    }


