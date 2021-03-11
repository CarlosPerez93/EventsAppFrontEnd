import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Modal, Select, message } from "antd";
import "./CardServicio.css";
import { PlusOutlined, CloseOutlined} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import Api from "../../../../../common/api/api"
import Token from "../../../../../localstorage/token"

export default function CardServicio({ data, state, id }) {
  const [visible, setvisible] = useState(false);

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

  }, [setEvents]);

  const handleRegistro = async (e) => {
    const result = await Api.post("eventService/create", {
      event: iSelect,
      service: data.id
    });

    console.log(result);
    if (result.status === 201) {
      history.push("/misEventos");
      setvisible(false);
      message.success("registro exitoso")
    } else {
      message.error("Ya existe registro")
    }
  };

  const handleEdit = async () =>{
    const result = await Api.post("eventService/delete", {id});
      if (result.status === 201){
        message.success("Registro cancelado exitosamente")
        history.push("/misEventos")
      }else{
        message.error("Servicio asignado, no se puede cancelar")
      }
  }

  return (
    <Card

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

          <img onClick={() => history.push(`/infoEmpresario/${data.empresa.id}`)}
            src="./yo.jpg" alt="as" className="imgPerfilSe" />
          <h6>
            {data.empresa.profile.firstName}{" "}
            {data.empresa.profile.firstSurname}
          </h6>

        </Col>
        <Col
          lg={{ span: 16, offset: 1 }}
          xs={{ span: 4, offset: 1 }}
          style={{ textAlign: "left" }}
        >
          <h6 style={{ textAlign: "left" }}>{data.title}</h6>
          <p style={{  }}>{data.description}</p>
        </Col>
      </Row>
      <Row justify="end">
        <h3>$ {data.prise}</h3>
        <Col>
          {
            state ? (
              <Button
                onClick={handleEdit}
                icon={<CloseOutlined />}

                type="primary"
                shape="round"
                size="large"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                  padding: 0,
                }}
              />
            ): (
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
            )
        }

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
