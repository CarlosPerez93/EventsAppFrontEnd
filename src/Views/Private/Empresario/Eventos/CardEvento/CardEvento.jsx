import React from "react";
import { Card, Row, Col, Button, message } from "antd";
import {  CloseOutlined, CheckOutlined } from "@ant-design/icons";
import Api from "../../../../../common/api/api";



export default function CardEvento({ data }) {

   

 


  const handleShange = async () => {
     const result =  await Api.post("eventService/changeState", {
      id: data.id,
    });
     if (result.status === 201) {
      message.success("Se ha confirmado correctamente");
      window.location.reload();
    } else {
      message.error("Ups! Hubo un error");
    }
  };

  const handleDelete = async () => {
    const result =  await Api.post("eventService/delete", {
     id: data.id,
   });
    if (result.status === 201) {
     message.success("Se ha eliminado correctamente");
     window.location.reload();
   } else {
     message.error("Ups! Hubo un error");
   }
 };

 

  return (
    <Card style={{ width: "100%" }} hoverable>
      <Row justify="center">
        <img src="/calendario.png" alt="img" style={{ width: 140, height: 140 }} />
      </Row>
      <p style={{ fontSize: "1em" }}>
        <strong>Id :</strong> {data.id}
      </p>
      <p style={{ fontSize: "1em" }}>
        <strong>Fecha inicio:</strong> {data.event.startDate}
      </p>
      <p style={{ fontSize: "1em" }}>
        {" "}
        <strong>Participantes :</strong>
        {data.event.participants}
      </p>
      <p style={{ fontSize: "1em" }}>
        {" "}
        <strong>Duracion:</strong> 12/12/2020{" "}
      </p>
      <br />
      {data.state === "PENDING" ? (
        <Row justify="center">
          <Col lg={6} xs={12}>
            <Button
              type="primary"
              onClick={handleShange}
              shape="circle"
              icon={<CheckOutlined />}
              size="large"
              style={{ backgroundColor: "green", border: "none" }}
            />
          </Col>
          <Col lg={6} xs={12}>
            <Button
            onClick={handleDelete}
              type="primary"
              shape="circle"
              icon={<CloseOutlined />}
              size="large"
              style={{ backgroundColor: "red", border: "none" }}
            />
          </Col>
        </Row>
      ) : (
        <h4 style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>
          ASIGNADO
        </h4>
      )}
    </Card>
  );
}
