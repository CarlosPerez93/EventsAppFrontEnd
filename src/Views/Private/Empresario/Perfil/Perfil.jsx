import React from "react";
import "./Perfil.css";
import token from "./../../../../localstorage/token";
import img1 from "./../../../../Assests/Img/Logo.png";
import { Button } from "antd";
export default function Perfil() {
  return (
    <div className="mainPerfil">
      <img className="logoModal" src={img1} alt="imagen no cargada"/>

      <div className="contendorMainPerfil">
        <div className="contenedor1Perfil">
          <h2>Datos Personales</h2>
          <div className="contenedorDatosPerfil">
            <div className="contenedorDatosPerfil1">
              <p htmlFor="">primer nombre</p>
              <p htmlFor="">primer Apellido</p>
              <p htmlFor="">primer nombre</p>
              <p htmlFor="">primer nombre</p>
            </div>
            <div className="contenedorDatosPerfil2">
              <p htmlFor="">segundo nombre</p>
              <p htmlFor="">segundo Apellido</p>
              <p htmlFor="" title={"@" + token.decodeJWT().username}>
                usuario
              </p>
            </div>
          </div>
        </div>
        <div className="contenedor2Perfil">
          <h2>Servicios Ofrecidos</h2>
        </div>
      </div>
      <div className="btnsPerfil">
        <Button>Eventos Asignados</Button>
        <Button>Agregar Servicio</Button>
      </div>
    </div>
  );
}
