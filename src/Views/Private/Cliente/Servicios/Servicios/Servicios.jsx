import React from "react";
import "./Servicios.css";
import {Link} from  "react-router-dom"
import img1 from "../../../../../Assests/Img/arregloFloral.jpg";
import img2 from "../../../../../Assests/Img/Camara.png";
import img4 from "../../../../../Assests/Img/bufet.png";
import img3 from "../../../../../Assests/Img/lugares.jpg";
import img5 from "../../../../../Assests/Img/sonido.jpg";
import img6 from "../../../../../Assests/Img/animacion.png";
import { Card } from "antd";

export default function Servicios() {

  return (
    <div className="MainServicios">
      <h1>Servicios</h1>
      <p>Tenemos todos los servicios para acompañarte en tu fecha especial</p>
      <div className="contenedorServicios">
        <div className="contenedorCards">
          <Link to="/" className="cardServicios">
            <img src={img1} />
            <h2>Decoración</h2>
            <p>Es muy importante contar con un toque de belleza y armonía.</p>
          </Link>
          <Link to="/" className="cardServicios">
            <img src={img3} />
            <h2>Sitios</h2>
            <p>
              Para que sea único e inolvidable, tenemos los espacios ideales.
            </p>
          </Link>
          <Link to="/" className="cardServicios">
            <img src={img4} />
            <h2>Buffet</h2>
            <p>Sabores que cautivan, los más exquisitos y variados platos. </p>
          </Link>
        </div>
        <div className="contenedorCards">
          <Link to="/" className="cardServicios">
            <img src={img5} />
            <h2>Sonido</h2>
            <p>Impresiona al mundo con el mejor sonido en tus eventos. </p>
          </Link>
          <Link to="/" className="cardServicios">
            <img src={img2} />
            <h2>Fotografía</h2>
            <p>Capturamos en el momento justo para que revivas aquel día.</p>
          </Link>
          <Link to="/" className="cardServicios">
            <img src={img6} />
            <h2>Animación</h2>
            <p>Comparte y diviertete con los tuyos en las fechas especiales.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
