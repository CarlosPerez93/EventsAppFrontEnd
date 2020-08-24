import React, { useState, useEffect } from "react";
import "./EventosAsignados.css";
import { Select, Form, Col, Row } from "antd";
import api from "../../../../../common/api/api";
import CardEvento from "../CardEvento/CardEvento";
import Token from "../../../../../localstorage/token";

export default function EventosAsognados() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const apidata = async () => {
      const id = Token.decodeJWT().id;
      const resultado = await api.get("eventService/all/event", { id });
      setEvents(resultado.data);
    };
    apidata();
  }, []);

  return (
    <Col lg={{ span: 18, offset: 3 }} className="mainEventosAdquiridos">
      <h1>Eventos Asignados</h1>
      <Row>
        {events &&
          events.map((event) => {
            return (
              <Col lg={{ span: 6, offset: 1 }} key={event.id}>
                <CardEvento data={event} />
              </Col>
            );
          })}
      </Row>
    </Col>
  );
}
