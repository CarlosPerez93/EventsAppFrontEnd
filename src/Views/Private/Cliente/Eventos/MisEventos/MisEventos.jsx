import React, { useState,useEffect } from "react";
import { Col, Button, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./MisEventos.css";
import CardMisEventos from "./CardMisEventos/CardMisEventos";

import { Link } from "react-router-dom";

import Api from "./../../../../../common/api/api";
import Token from "./../../../../../localstorage/token";
import SinEventos from "./SinEventos/SinEventos";

export default function MisEventos() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      const result = await Api.get("event/all/user", {
        idUser: Token.decodeJWT().id,
      });
      if (result.status === 200) {
        setEvents(result.data);
      }
    };
    apiData();
  }, []);
  if (events){
    return (

    
      <Col
        lg={{ span: 18, offset: 3 }}
        xs={{ span: 18, offset: 3 }}
        className="MisEventos"
      >
        <h1>Mis Eventos</h1>
        <Col lg={{ span: 4, offset: 18 }}>
          <Link to="/gestionarEvento">
            <Button
              icon={<PlusOutlined />}
              type="primary"
              shape="round"
              size="large"
              style={{ backgroundColor: "#8063FF" }}
            >
              Nuevo Evento
            </Button>
          </Link>
        </Col>
  
        <Row>
  
          {events !== null ? (
            events.map((event, index) => {
              return (
                <Col key={index} lg={{ span: 6, offset: 1 }} xs={{ span: 6, offset: 2 }}>
                  <CardMisEventos data={event} />
                </Col>
              )
            })
          ) : (
              <></>
            )}
  
        </Row>
      </Col>
    );
  }else{
    return <SinEventos/>
  }
  
}
