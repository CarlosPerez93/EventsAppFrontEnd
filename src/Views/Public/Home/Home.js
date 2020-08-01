import React, { useEffect, useState } from "react";
import { LayoutMenu } from "../../LayoutMenu/layoutMenu"; 
import api from "../../../common/api/api";
import token from "../../../localstorage/token";

import { Carousel, Divider } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../../Assests/Img/1.png";
import img2 from "../../../Assests/Img/2.png";
import img3 from "../../../Assests/Img/3.png";
import img4 from "../../../Assests/Img/4.png";
import img5 from "../../../Assests/Img/5.png";
import img12 from "../../../Assests/Img/6.png";
import img13 from "../../../Assests/Img/7.png";
import img6 from "../../../Assests/Img/lugaresEventos.png";
import img7 from "../../../Assests/Img/alimentosBebidas.png";
import img8 from "../../../Assests/Img/Sonido.png";
import img9 from "../../../Assests/Img/fotografiaVideo.png";
import img10 from "../../../Assests/Img/decoracion.png";
import img11 from "../../../Assests/Img/Animacion2.png";

const Home = () => {
  const [user, setUser] = useState(null);

  const dataApi = async () => {
//  const result = await api.get("user/profile", { id: token.decodeJWT().id });
  //  setUser(result.data);
  };

  useEffect(() => {
    dataApi();
  });

  return (
    <div className="mainHome">
      <LayoutMenu className="barra" />
      {/* <LayoutClient className="barra" /> */}
      {/* <LayoutEmpre className="barra" /> */}
      <Carousel autoplay className="carrousel">
        <div className="cont">
          <img className="imgs" src={img1} />
        </div>

        <div className="cont">
          <img className="imgs" src={img2} />
        </div>
        <div className="cont">
          <img className="imgs" src={img3} />
        </div>
        <div className="cont">
          <img className="imgs" src={img4} />
        </div>
        <div className="cont">
          <img className="imgs" src={img5} />
        </div>
        <div className="cont">
          <img className="imgs" src={img12} />
        </div>
        <div className="cont">
          <img className="imgs" src={img13} />
        </div>
      </Carousel>
      ,
      <div className="containerAvatars">
        <Link to="/">
          <img className="Avatars" src={img10} />
        </Link>
        <Link to="/">
          <img className="Avatars" src={img6} />
        </Link>
        <Link to="/">
          <img className="Avatars" src={img7} />
        </Link>
        <Link to="/">
          <img className="Avatars" src={img8} />
        </Link>
        <Link to="/">
          <img className="Avatars" src={img9} />
        </Link>
        <Link to="/">
          <img className="Avatars" src={img11} />
        </Link>
      </div>
      <h1>Nuestros Servicios</h1>
      <Divider dashed />
      <div className="ContainerSomos">
        <div className="Mision">
          <h2>Misión</h2>
          <p>
            Re-BesT nace con la misión de satisfacer las necesidades de nuestros
            clientes a la hora de buscar un servicio personalizado de excelente
            calidad para la organización de todo tipo de eventos, teniendo en
            cuenta cada detalle para que sea inolvidable.
          </p>
        </div>
        <div className="Vision">
          <h2>Visión</h2>
          <p>
            Nuestra empresa Re-BesT, busca liderar el mercado nacional de
            empresas organizadoras de eventos, innovando nuestros servicios con
            el propósito de satisfacer las exigencias de nuestros clientes.
          </p>
        </div>
        <div className="Valores">
          <h2>Valores</h2>
          <p>
            Cumplimiento, respeto, calidad, creatividad, confianza, serán
            nuestros principios para tener éxito, atender los eventos con
            puntualidad, estar al tanto de los cambios para implementarlos en
            los servicios que ofrecemos, tratar a todos por igual, que nuestros
            eventos sean recordados por nuestros clientes y nos recomienden.
          </p>
        </div>
      </div>
      <h1>Quienes Somos</h1>
      <Divider dashed />
    </div>
  );
};
export default Home;
