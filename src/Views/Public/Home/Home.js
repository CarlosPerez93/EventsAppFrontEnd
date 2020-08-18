import React, { useEffect, useState } from "react";
// import api from "../../../common/api/api";
// import token from "../../../localstorage/token";
import { Carousel, Tabs, Col, Row, Card } from "antd";
// import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../../Assests/Img/1.jpg";
import img2 from "../../../Assests/Img/2.png";
import img3 from "../../../Assests/Img/3.png";
import img4 from "../../../Assests/Img/4.png";
import img5 from "../../../Assests/Img/5.png";
import img6 from "../../../Assests/Img/6.png";
import img7 from "../../../Assests/Img/7.png";
import img8 from "../../../Assests/Img//Decoracion/deco1.jpg";
import img9 from "../../../Assests/Img/Decoracion/deco2.jpg";
import img10 from "../../../Assests/Img/Decoracion/deco3.jpg";
import img11 from "../../../Assests/Img/Lugar/Lugar1.jpg";
import img12 from "../../../Assests/Img/Lugar/Lugar2.jpg";
import img13 from "../../../Assests/Img/Lugar/Lugar3.jpg";
import img14 from "../../../Assests/Img/Buffet/Buffet1.jpg";
// import img15 from "../../../Assests/Img/Buffet/Buffet2.jpg";
// import img16 from "../../../Assests/Img/Buffet/Buffet3.jpg";
import img17 from "../../../Assests/Img/Fotografia/Fotog1.jpg";
import img18 from "../../../Assests/Img/Fotografia/Fotog2.jpg";
import img19 from "../../../Assests/Img/Fotografia/Fotog3.jpg";
import img20 from "../../../Assests/Img/Animacion/Animacio1.png";
import Search from "antd/lib/input/Search";

const Home = () => {
  // const [user, setUser] = useState(null);

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
      <Search
        placeholder="Buscar"
        onSearch={(value) => console.log(value)}
        style={{ width: "50%" }}
      />
      <Carousel autoplay>
        <div className="cont">
          <img
            className="imgs"
            src={img1}
            style={{ resize: "cover" }}
            alt=" "
          />
        </div>

        <div className="cont">
          <img className="imgs" src={img2} alt=" " />
        </div>
        <div className="cont">
          <img className="imgs" src={img3} alt=" " />
        </div>
        <div className="cont">
          <img className="imgs" src={img4} alt=" " />
        </div>
        <div className="cont">
          <img className="imgs" src={img5} alt=" " />
        </div>
        <div className="cont">
          <img className="imgs" src={img6} alt=" " />
        </div>
        <div className="cont">
          <img className="imgs" src={img7} alt=" " />
        </div>
      </Carousel>

      <div className="containerAvatars">
        <Tabs onChange={callback} className="tab">
          <TabPane key="1" tab="decoracion" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img8} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img9} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img10} alt=" " />
              </div>
            </Carousel>
          </TabPane>

          <TabPane key="2" tab="Lugares" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img11} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img12} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img13} alt=" " />
              </div>
            </Carousel>
          </TabPane>
          <TabPane key="3" tab="Buffet" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img14} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img2} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img3} alt=" " />
              </div>
            </Carousel>
          </TabPane>
          <TabPane key="4" tab="Sonido" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img1} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img2} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img3} alt=" " />
              </div>
            </Carousel>
          </TabPane>
          <TabPane key="5" tab="Fotografia" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img17} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img18} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img19} alt=" " />
              </div>
            </Carousel>
          </TabPane>
          <TabPane key="6" tab="Animación" className="tab1">
            <Carousel autoplay className="carrousel">
              <div className="cont">
                <img className="imgs" src={img20} alt=" " />
              </div>

              <div className="cont">
                <img className="imgs" src={img2} alt=" " />
              </div>
              <div className="cont">
                <img className="imgs" src={img3} alt=" " />
              </div>
            </Carousel>
          </TabPane>
        </Tabs>
      </div>
      <h1 className="h11">Nuestros Servicios</h1>
      <br />
      <br />

      <Row className="about">
        <Col lg={{ span: 6, offset: 1 }}>
         <Card style={{borderRadius: 6}} className="card-about">
         <h2>Misión</h2>
          <p>
            Re-BesT nace con la misión de satisfacer las necesidades de nuestros
            clientes a la hora de buscar un servicio personalizado de excelente
            calidad para la organización de todo tipo de eventos, teniendo en
            cuenta cada detalle para que sea inolvidable.
          </p>
         </Card>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Card style={{borderRadius: 6}} className="card-about">
          <h2>Visión</h2>
          <p>
            Nuestra empresa Re-BesT, busca liderar el mercado nacional de
            empresas organizadoras de eventos, innovando nuestros servicios con
            el propósito de satisfacer las exigencias de nuestros clientes.
          </p>
          </Card>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Card style={{borderRadius: 6}} className="card-about">
          <h2>Valores</h2>
          <p>
            Cumplimiento, respeto, calidad, creatividad, confianza, serán
            nuestros principios para tener éxito, atender los eventos con
            puntualidad, estar al tanto de los cambios para implementarlos en
            los servicios que ofrecemos, tratar a todos por igual, que nuestros
            eventos sean recordados por nuestros clientes y nos recomienden.
          </p>
          </Card>
        </Col>
      </Row>

      <h1>Quienes Somos</h1>
    </div>
  );
};
export default Home;
