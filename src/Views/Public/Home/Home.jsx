import React, { useState, useEffect } from "react";
// import api from "../../../common/api/api";
import { Carousel, Col, Row, Card } from "antd";
import "./Home.css";
// import img1 from "../../../Assests/Img/1.jpg";
// import img2 from "../../../Assests/Img/2.png";
// import img3 from "../../../Assests/Img/3.png";
// import img4 from "../../../Assests/Img/4.png";
// import img5 from "../../../Assests/Img/5.png";
// import img6 from "../../../Assests/Img/6.png";
// import img7 from "../../../Assests/Img/7.png";
import Search from "antd/lib/input/Search";
import CardProxEvents from "./CardProxEvents/cardProxEvents";
import api from "../../../common/api/api";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
  // const [user, setUser] = useState(null);
  const [services, setServices] = useState(null);

  const [events, setEvents] = useState();

  useEffect(() => {
    const apiData = async () => {
      const result = await api.get("event/all");
      if (result.status === 200) {
        setEvents(result.data);
      }

      console.log(result);
    };

    apiData();
  }, [setEvents]);

  useEffect(() => {
    const apiData = async () => {
      const result = await api.get("service/all");
      if (result.status === 200) {
        setServices(result.data);
      }
    };
    apiData();
  }, []);

  return (
    <Col
      lg={{ span: 24, offset: 1 }}
      xs={{ span: 22, offset: 1 }}
      className="mainHome"
    >
      <Carousel>
        <div className="cont">
          <img className="imgs" src="./6.png" alt=" " />
        </div>
      </Carousel>
      <Search className="search" />

      <Row className="about">
        <Col lg={{ span: 6, offset: 2 }}>
          <Card style={{ borderRadius: 6 }} className="card-about">
            <h2>Misión</h2>
            <p>
              Re-BesT nace con la misión de satisfacer las necesidades de
              nuestros clientes a la hora de buscar un servicio personalizado de
              excelente calidad para la organización de todo tipo de eventos,
              teniendo en cuenta cada detalle para que sea inolvidable.
            </p>
          </Card>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Card style={{ borderRadius: 6 }} className="card-about">
            <h2>Visión</h2>
            <p>
              Nuestra empresa Re-BesT, busca liderar el mercado nacional de
              empresas organizadoras de eventos, innovando nuestros servicios
              con el propósito de satisfacer las exigencias de nuestros
              clientes.
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
              los servicios que ofrecemos, tratar a todos por igual, que
              nuestros eventos sean recordados por nuestros clientes y nos
              recomienden.
            </p>
          </Card>
        </Col>
      </Row>

      <h3>Proximos eventos</h3>

  
        <Col lg={{span:12, offset:0}} style={{display:"flex"}}>
          {events &&
            events.map((event, index) => {
              return <CardProxEvents key={index} data={event} />;
            })}
        </Col>
            <br/>
      <Footer />
    </Col>
  );
};
export default Home;
