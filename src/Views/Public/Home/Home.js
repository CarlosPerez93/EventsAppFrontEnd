import React, { useEffect, useState } from "react";
import api from "../../../common/api/api";
import token from "../../../localstorage/token";
import { Carousel, Divider, Tabs } from "antd";
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
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    dataApi();
  });
  const { TabPane } = Tabs;

  return (
    <div className="mainHome">

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




      <div className="containerAvatars">
        <Tabs onChange={callback} className="tab">

          <TabPane key="1" tab="decoracion" className="tab1" >
           
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
          </TabPane>

          <TabPane key="2" tab="Lugares" className="tab1">

            <Link to="/">
              <img className="Avatars" src={img6} />
            </Link>
          </TabPane >
          <TabPane key="3" tab="Buffet" className="tab1">
            <Link to="/">
              <img className="Avatars" src={img7} />
            </Link>

          </TabPane>
          <TabPane key="4" tab="Sonido" className="tab1">
            <Link to="/">
              <img className="Avatars" src={img8} />
            </Link>

          </TabPane>
          <TabPane key="5" tab="Fotografia" className="tab1">
            <Link to="/">
              <img className="Avatars" src={img9} />
            </Link>

          </TabPane>
          <TabPane key="6" tab="Animación" className="tab1">
            <Link to="/">
              <img className="Avatars" src={img11} />
            </Link>

          </TabPane>

        </Tabs>
      </div>
      <h1 className="h11">Nuestros Servicios</h1>
      <br />
      <br />
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
      <h1 className="h12">Quienes Somos</h1>
      <Divider dashed />
    </div>
  );
};
export default Home;
