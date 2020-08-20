import React, { useState, useEffect } from "react";
import "./EventosAsignados.css";
import { Select, Form, Col, Row } from "antd";
import api from "../../../../../common/api/api";
import img1 from "../../../../../Assests/Img/Logo.png";
import { Modall } from "../../../../../components/Modal/Modal";
export default function ServiciosAdquiridos() {

  const [tipoEvento, setTipoEvento] = useState(null);



  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("event/types");
      setTipoEvento(resultado.data);
      console.log(resultado);
    };
    apidata();
  }, []);

  return (
    <Col lg={{ span: 18, offset: 3 }} className="mainEventosAdquiridos">

      <h1>Eventos Asignados</h1>
      <Col lg={{ span: 10 }}>
        <Form.Item name={["user", "tipoEvento"]} >
          <Select placeholder="Filtar eventos" style={{ textAlign: "center", width: "50%", }}>
            {tipoEvento !== null ? (
              <>
                {tipoEvento.map((type, index) => {
                  return (
                    <Select.Option value={type.id} key={index}>
                      {type.name}
                    </Select.Option>
                  );
                })}
              </>
            ) : (
                <></>
              )}
          </Select>
        </Form.Item>
      </Col>

      <Row>

        {/* {events !== null ? (
          events.map((event, index) => {
            return (
              <Col lg={{ span: 6, offset: 1 }} xs={{ span: 6, offset: 2 }}>
                <CardMisEventos data={event} />
              </Col>
            )
          })
        ) : (
            <></>
          )} */}

      </Row>
    </Col>
  );
}
