import React, { useState } from "react";
import { Col, Button, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./MisServicios.css";
import CardMisServicios from "./CardMisServicios/CardMisServicios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Api from "../../../../../common/api/api";
import Token from "../../../../../localstorage/token";

export default function MisServicios() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      const result = await Api.get("service/all/empresa", {
        id: Token.decodeJWT().id,
      });
      if (result.status === 200) {
        setServices(result.data);
      }
    };
    apiData();
  });

  return (
    <Col
      lg={{ span: 18, offset: 3 }}
      xs={{ span: 18, offset: 3 }}
      className="MisServicios"
    >
      <h1>Mis Servicios</h1>
      <Col lg={{ span: 4, offset: 18 }}>
        <Link to="/agregarServicios">
          <Button
            icon={<PlusOutlined />}
            type="primary"
            shape="round"
            size="large"
            style={{ backgroundColor: "#8063FF" }}
          >
            Nuevo Servicio
          </Button>
        </Link>
      </Col>

      <Row>

        {services !== null ? (
          services.map((service, index) => {
            return (
              <Col lg={{ span: 7, offset: 1 }} xs={{ span: 22, offset: 1 }} key={index}>
                <CardMisServicios data={service} />
              </Col>
            )
          })
        ) : (
            <></>
          )}

      </Row>
    </Col>
  );
}
