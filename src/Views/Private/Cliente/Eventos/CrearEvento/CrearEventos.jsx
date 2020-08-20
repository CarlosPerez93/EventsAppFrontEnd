import React from "react";
import {
  Col,
  Form,
  Input,
  Row,
  Button,
  DatePicker,
  InputNumber,
  Select,
  message,
  Card,
} from "antd";
import "./CrearEventos.css";
import { useEffect } from "react";
import Api from "./../../../../../common/api/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import token from "../../../../../localstorage/token";

const { TextArea } = Input;
export default function CrearEventos() {
  const [types, setTypes] = useState(null);
  const [date, setDate] = useState(null);
  const history = useHistory();

  const onFinish = async ({ evento }) => {
    evento.startDate = date;
    evento.user = await token.decodeJWT().id; // saco el id del token, lo decofico con el metodo que ya existe

    const result = await Api.post("event/create", evento);
    if (result.status === 201) {
      // la operacion se realizado 201 = OK
      message.success("Se ha realizado correctamente el registro");
      history.push("/misEventos");
    }else{
      message.success("No se ha realizado registro");

    }

    console.log(evento);
  };

  useEffect(() => {
    const dataTypes = async () => {
      const result = await Api.get("event/types"); // llamado a la API
      if (result.status === 200) {
        /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
        setTypes(result.data); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
      }
    };
    dataTypes(); // trae los tipos que se muestran en el select
  }, []);

  return (
    <Col
      lg={{ span: 12, offset: 6 }}
      xs={{ span: 20, offset: 2 }}
      style={{ paddingTop: 30 }}
      className="eventos-create"
    >
     <Card>
     <Col lg={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
       <h4 style={{textAlign:"center", fontWeight:"bold", fontSize: 20}}>Registro de evento</h4>
        <hr/>
        <Form onFinish={onFinish}>
          <Row>
            <Col lg={12} xs={{ span: 24 }}>
              <label>Nombre</label>
              <Form.Item name={["evento", "name"]}>
                <Input style={{ width: "90%" }} />
              </Form.Item>
            </Col>
            <Col lg={12} xs={{ span: 24 }}>
              <label>Tipo</label>
              <Form.Item name={["evento", "type"]}>
                <Select
                  placeholder="Selecciona un tipo"
                  style={{ width: "100%" }}
                >
                  {types !== null ? (
                    types.map((type, index) => {
                      return (
                        <Select.Option value={type.id} key={index}>
                          {type.name}
                        </Select.Option>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <label>Descripción</label>
          <Form.Item name={["evento", "description"]}>
            <TextArea rows={5} />
          </Form.Item>
          <Row>
            <Col lg={8} xs={{ span: 24 }}>
              <label>Fecha de inicio</label>
              <Form.Item name={["evento", "startDate"]}>
                <DatePicker
                  onChange={(date, dateString) => setDate(dateString)}
                  renderExtraFooter={() => "extra footer"}
                  placeholder="Seleccione una fecha"
                  style={{ width: "90%" }}
                />
              </Form.Item>
            </Col>
            <Col lg={8} xs={{ span: 24 }}>
              <label>Duración (Horas)</label>
              <Form.Item name={["evento", "duration"]}>
                <InputNumber min={1} style={{ width: "90%" }} />
              </Form.Item>
            </Col>
            <Col lg={8} xs={{ span: 24 }}>
              <label>Participantes</label>
              <Form.Item name={["evento", "participants"]}>
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Button htmlType="submit" type="primary">
              Registrar evento
            </Button>
          </Row>
        </Form>
      </Col>
     </Card>
    </Col>
  );
}
