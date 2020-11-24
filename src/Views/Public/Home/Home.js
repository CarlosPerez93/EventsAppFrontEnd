import React, { useEffect } from "react";
// import api from "../../../common/api/api";
// import token from "../../../localstorage/token";
import { Carousel, Col, Row, Card } from "antd";
// import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../../Assests/Img/1.jpg";
import img2 from "../../../Assests/Img/2.png";
import img3 from "../../../Assests/Img/3.png";
import img4 from "../../../Assests/Img/4.png";
import img5 from "../../../Assests/Img/5.png";
import img6 from "../../../Assests/Img/6.png";
import img7 from "../../../Assests/Img/7.png";
import Search from "antd/lib/input/Search";




const Home = () => {
  // const [user, setUser] = useState(null);

  const dataApi = async () => {
    //  const result = await api.get("user/profile", { id: token.decodeJWT().id });
    //  setUser(result.data);
  };

  useEffect(() => {
    dataApi();
  });


  return (
    <Col lg={{ span: 18, offset: 3 }} xs={{ span: 18, offset: 3 }} className="mainHome">

      <Carousel >
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
      <Search className='search' />

      <Col lg={{ span: 6, offset: 2 }} xs={{ span: 6, offset: 2 }}>
            
      </Col>

      <Row className="about">
        <Col lg={{ span: 6, offset: 1 }}>
          <Card style={{ borderRadius: 6 }} className="card-about">
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
          <Card style={{ borderRadius: 6 }} className="card-about">
            <h2>Visión</h2>
            <p>
              Nuestra empresa Re-BesT, busca liderar el mercado nacional de
              empresas organizadoras de eventos, innovando nuestros servicios con
              el propósito de satisfacer las exigencias de nuestros clientes.
          </p>
          </Card>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Card style={{ borderRadius: 6 }} className="card-about">
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


    </Col>
  );
};
export default Home;
