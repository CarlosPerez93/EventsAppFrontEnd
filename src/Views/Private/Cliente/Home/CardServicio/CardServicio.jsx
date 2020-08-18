import React, { useState } from "react";
import { Card, Row, Col, Button, Modal, Select } from "antd";
import "./CardServicio.css";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export default function CardServicio({ data }) {
  const [visible, setvisible] = useState(false);
  const [evento, setEvento] = useState(null);



  const handleRegistro = (e) => {
    setvisible(false);
    console.log(evento, "aa");
  };

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
          <Link to="/infoEmpresario">
            <img src="perfil1.png" alt="as" className="imgPerfilSe" />
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
            <Row justify="start" style={{ marginBottom: "1%" }}>
              <Col lg={24}>
                <Select
                  onChange={(value) => setEvento(value)}
                  placeholder="Seleccionar Evento"
                  showSearch
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "2%",
                  }}
                >
                  <Select.Option value="1">Categprias</Select.Option>
                  <Select.Option>Categprias</Select.Option>
                  <Select.Option>Categprias</Select.Option>
                  <Select.Option>Categprias</Select.Option>
                </Select>
              </Col>
            </Row>

            <p>
              <strong>Nombre: </strong>Evento de 15 años mi hija
            </p>
            <p>
              <strong>Participantes: </strong>10
            </p>
            <p>
              <strong>Nombre: </strong>10/20/2020
            </p>
          </Modal>
        </Col>
      </Row>
    </Card>
  );
}
