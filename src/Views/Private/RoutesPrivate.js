import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Profile } from "./Profile/profile";
import Navbar from "./../../components/Navbar/Navbar";
import token from "../../localstorage/token";
import HomeCliente from "./Cliente/Home/HomeClient";
import CrearEventos from "./Cliente/Eventos/CrearEvento/CrearEventos.jsx";
import ListaEventos from "./Cliente/Eventos/ListaEventos/ListaEventos";
import AgregarServicio from "./Cliente/Servicios/AgregarServicio/AgregarServicio.jsx";
import ListadoServicio from "./Cliente/Servicios/ListaServicios/ListaServicios.jsx";
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
          <Route path="/home" exact>
            <HomeCliente />
          </Route>

          <Route path="/gestionarEvento" exact>
            <CrearEventos />
          </Route>
          <Route path="/ListadoEventos" exact>
            <ListaEventos />
          </Route>

          <Route path="/gestionarServicio" exact>
            <AgregarServicio/>
          </Route>
        

          <Route path="/ListadoServicio" exact>
            <ListadoServicio />
          </Route>

          <Route path="/QuienesSomos" exact>
            <h1>QuienesSomos</h1>
            <ListaEventos />
          </Route>
        </>
      ) : role === 2 ? (
        <>
          <Route path="/home" exact>
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
