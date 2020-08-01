import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Profile } from "./Profile/profile";
import Navbar from "./../../components/Navbar/Navbar";
import token from "../../localstorage/token";
import HomeCliente from "./Cliente/Home/HomeClient";
import ListaEventos from "./Cliente/Eventos/ListaEventos/ListaEventos";

function RoutesPrivate({ setAuth }) {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const role = token.decodeJWT().role.id;
    setRole(role);
  }, [setRole]);

  // 1 -> CLIENT 2 -> EMPRESARIO  3 -> Admon

  return (
    <>
      <Navbar role={role} setAuth={setAuth} />
      {role === 1 ? (
        <>
          <Route path="/" exact>
            <HomeCliente />
          </Route>
          <Route path="/gestionarEventos" exact>
            <h1>Gestionar Eventos</h1>
            <ListaEventos />
          </Route>
        </>
      ) : role === 2 ? (
        <>
          <Route path="/" exact>
            <h1>Home Empresario</h1>
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/services" exact>
            <h1>Servicios</h1>
          </Route>
        </>
      ) : (
        <>
        <Route path="/" exact>
          <h1>Admin Home</h1>
        </Route>
        </>
      )}
    </>
  );
}

export default RoutesPrivate;
