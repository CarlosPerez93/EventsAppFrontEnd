import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import HomeAdministrador from "./Admin/HomeAdmin/HomeAdmin";
import GestionRoles from "./Admin/GestionRoles/GestionRolEmpresario/GestionRoles";
import GestionRolCliente from "./Admin/GestionRoles/GestionRolCliente/GestionRolCliente"
import GestionServicios from "./Admin/GestionServicios/GestionServicios"
import CrearTipoServicio from "./Admin/GestionServicios/CrearTipoServicio/CrearTipoServicio";
import EditarTipoServicio from "./Admin/GestionServicios/EditarTipoServicio/EditarTipoServicio";
import HomeEmpresario from "../Private/Empresario/Home/Home.jsx";
import PerfilEmpresario from "../Private/Empresario/Perfil/Perfil.jsx";
import AgregarServicioEmpresario from "../Private/Empresario/Servicios/CrearServicio/CrearServicio.jsx";
import EventosAsignadosEmpresario from "../Private/Empresario/Eventos/EventosAsignados/EventosAsignados.jsx";
import MisServiciosEmpresario from "./Empresario/Servicios/MisServicios/MisServicios";
import Navbar from "./../../components/Navbar/Navbar";
import token from "../../localstorage/token";
import HomeCliente from "./Cliente/Home/HomeClient";
import CrearEventosCliente from "./Cliente/Eventos/CrearEvento/CrearEventos.jsx";
import ServiciosCliente from "./Cliente/Servicios/Servicios/Servicios.jsx";
import MisEventos from "./Cliente/Eventos/MisEventos/MisEventos";
import SinEventos from "./Cliente/Eventos/MisEventos/SinEventos/SinEventos.jsx"
import InfEvento from "./Cliente/Eventos/InfEvento/InfEvento";
import PerfilInfo from "../Private/Cliente/PerfilInfo/PerfilInfo";
import EditarEventos from "../Private/Cliente/Eventos/MisEventos/EditarEventos/EditarEventos"
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
          <Route path="/EditarEvento/:id" exact>
            <EditarEventos />
          </Route>
          <Route path="/informacionEventos/:id" exact>
            <InfEvento />
          </Route>
          <Route path="/sinEventos" exact>
            <SinEventos />
          </Route>


          <Route path="/servicios" exact>
            <ServiciosCliente />
          </Route>

          <Route path="/infoEmpresario/:id" exact>
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
          <Route path="/misServicios" exact>
            <MisServiciosEmpresario />
          </Route>

          <Route path="/eventosAsignados" exact>
            <EventosAsignadosEmpresario />

          </Route>
        </>
      ) : (
            <>
              <Route path="/" exact>
                <HomeAdministrador />
              </Route>

              <Route path="/gestionServicios" exact>
                <GestionServicios />
              </Route>
              <Route path="/crearTipoServicio" exact>
                <CrearTipoServicio />
              </Route>
              <Route path="/editarTipoServicio" exact>
                <EditarTipoServicio />
              </Route>
              <Route path="/gestionRolEmpresario" exact>
                <GestionRoles/>
              </Route>
              <Route path="/gestionRolCliente" exact>
                <GestionRolCliente/>
              </Route>
            </>
          )}
    </>
  );
}

export default RoutesPrivate;
