import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Modal, Select } from "antd";
import "./CardServicio.css";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import CardMisEventos from "../../Eventos/MisEventos/CardMisEventos/CardMisEventos"
import Api from "../../../../../common/api/api"
import Token from "../../../../../localstorage/token"

export default function CardServicio({ data }) {
  const [visible, setvisible] = useState(false);
  const [evento, setEvento] = useState(null);
  const [iSelect, setIselect] = useState(null);
  const [events, setEvents] = useState(null);
  const history = useHistory();

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
  });

  const handleRegistro = (e) => {
    setvisible(false);
    console.log(evento, "aa");
  };

  return (
    <Card
      onClick={() => history.push(`/infoEmpresario/${data.empresa.id}`)}
      className="cardServicio"
      hoverable
      style={{
        backgroundColor: "#F5F3F3",
        borderRadius: 10,
        borderColor: "#DADADA",
        marginBottom: "4vh",
      }}
    >
      <Row>
        <Col
          lg={{ span: 6, offset: 1 }}
          xs={{ span: 4, offset: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/infoEmpresario">
            <img src="./perfil1.png" alt="as" className="imgPerfilSe" />
            <h6>
              {data.empresa.profile.firstName}{" "}
              {data.empresa.profile.firstSurname}
            </h6>
          </Link>
        </Col>
        <Col
          lg={{ span: 16, offset: 1 }}
          xs={{ span: 4, offset: 1 }}
          style={{ textAlign: "left" }}
        >
          <h6 style={{ textAlign: "left" }}>{data.title}</h6>
          <p style={{ textJustify: "justify" }}>{data.description}</p>
        </Col>
      </Row>
      <Row justify="end">
        <h3>$ {data.prise}</h3>
        <Col>
          <Button
            onClick={() => setvisible(true)}
            icon={<PlusOutlined />}
            type="primary"
            shape="round"
            size="large"
            style={{
              backgroundColor: "#22D27B",
              border: "none",
              width: "50px",
              height: "50px",
              textAlign: "center",
              padding: 0,
            }}
          />
          <Modal
            title="Elije el Evento"
            visible={visible}
            onCancel={() => setvisible(false)}
            footer={[
              <Button
                key="back"
                onClick={handleRegistro}
                style={{ backgroundColor: "#8063FF", color: "white" }}
              >
                Agregar Servicio
              </Button>,
            ]}
          >
            <Row>
              <p>{iSelect}</p>
              <Select onChange={(value) => setIselect(value)} style={{ width: "100%" }}>

                {events !== null ? (
                  events.map((event, index) => {

                    return (
                      <Select.Option value={event.id} key={index}>
                        {
                          event.name
                        }
                      </Select.Option>
                    )
                  })
                ) : (
                    <></>
                  )}
              </Select>

            </Row>
            {
              iSelect !== null && events !== null ? (
                <div>
                  <p>
                    <strong>Nombre: </strong>{events.find((value) => value.id === iSelect).name}</p>
                  <p>
                    <strong>Participantes: </strong>{events.find((value) => value.id === iSelect).participants}
            </p>
                  <p>
                    <strong>Nombre: </strong>{events.find((value) => value.id === iSelect).startDate}
            </p>
                </div>
              ) : <></>
            }

          </Modal>
        </Col>
      </Row>
    </Card>
  );
}
