import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import HomeEmpresario from "../Private/Empresario/Home/Home.jsx";
import PerfilEmpresario from "../Private/Empresario/Perfil/Perfil.jsx";
import AgregarServicioEmpresario from "../Private/Empresario/Servicios/CrearServicio/CrearServicio.jsx";
import EventosAsignadosEmpresario from "../Private/Empresario/Eventos/EventosAsignados/EventosAsignados.jsx";
import Navbar from "./../../components/Navbar/Navbar";
import token from "../../localstorage/token";
import HomeCliente from "./Cliente/Home/HomeClient";
import CrearEventosCliente from "./Cliente/Eventos/CrearEvento/CrearEventos.jsx";
import MisEventos from "./Cliente/Eventos/MisEventos/MisEventos";
import ServiciosCliente from "./Cliente/Servicios/Servicios/Servicios.jsx";
import CardMisEventos from "./Cliente/Eventos/InfEvento/InfEvento.jsx";
import PerfilInfo from "../Private/Cliente/PerfilInfo/PerfilInfo";
import SinEventos from "./Cliente/Eventos/MisEventos/SinEventos/SinEventos.jsx"
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

          <Route path="/misEventos" exact>
            <MisEventos />
          </Route>

          <Route path="/gestionarEvento" exact>
            <CrearEventosCliente />
          </Route>
          <Route path="/informacionEventos" exact>
            <CardMisEventos />
          </Route>
          <Route path="/sinEventos" exact>
            <SinEventos />
          </Route>
        

          <Route path="/servicios" exact>
            <ServiciosCliente />
          </Route>
    
          <Route path="/infoEmpresario" exact>
            <PerfilInfo />
          </Route>
         



        </>
      ) : role === 2 ? (
        <>
          <Route path="/" exact>
            <HomeEmpresario />
          </Route>
          <Route path="/home" exact>
            <HomeEmpresario />
          </Route>
          <Route path="/perfil" exact>
            <PerfilEmpresario />
          </Route>
          <Route path="/servicios" exact>
            <ServiciosCliente />
          </Route>
          <Route path="/agregarServicios" exact>
            <AgregarServicioEmpresario />
          </Route>
        
          <Route path="/eventosAsignados" exact>
            <EventosAsignadosEmpresario />

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
