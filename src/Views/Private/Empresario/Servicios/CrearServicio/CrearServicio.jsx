import React from "react";
import {
  Col,
  Form,
  Input,
  Row,
  Button,
  InputNumber,
  Select,
  message,
  Card,
} from "antd";

import { useEffect } from "react";
import Api from "./../../../../../common/api/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import token from "../../../../../localstorage/token";

const { TextArea } = Input;
export default function CrearServicio() {
  const [types, setTypes] = useState(null);
  const history = useHistory();

  const onFinish = async ({ servicio }) => {
    servicio.imagen = "";
    servicio.empresa = await token.decodeJWT().id; // saco el id del token, lo decofico con el metodo que ya existe
    const result = await Api.post("service/create", servicio);
    if (result.status === 201) {
      // la operacion se realizado 201 = OK
      message.success("Se ha realizado correctamente el registro");
      history.push("/misServicios");
      console.log(result);
    } else {
      message.error("No se ha realizado registro");
    }
    console.log(servicio);
  };
  useEffect(() => {
    const dataTypes = async () => {
      const result = await Api.get("service/types"); // llamado a la API
      if (result.status === 200) {
        /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
        setTypes(result.data); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
      }
    };
    dataTypes(); // trae los tipos que se muestran en el select
  }, []);

  function onChange(value) {
    console.log("changed", value);
  }
  return (
    <Col
      lg={{ span: 12, offset: 6 }}
      xs={{ span: 20, offset: 2 }}
      style={{ paddingTop: 30 }}
    >
      <Card>
        <Col lg={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
          <h4 style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
            Registro de Servicios
          </h4>
          <hr />
          <Form onFinish={onFinish}>
            <Row>
              <Col lg={12} xs={{ span: 24 }}>
                <label>Nombre</label>
                <Form.Item name={["servicio", "title"]}>
                  <Input style={{ width: "90%" }} />
                </Form.Item>
              </Col>
              <Col lg={12} xs={{ span: 24 }}>
                <label>Tipo</label>
                <Form.Item name={["servicio", "type"]}>
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
            <Form.Item name={["servicio", "description"]}>
              <TextArea rows={5} />
            </Form.Item>
            
            <Form.Item name={["servicio", "imagen"]}>
                

            </Form.Item>

            <label>Precio</label>
            <Form.Item name={["servicio", "prise"]}>
              <InputNumber
                initialValues={1000}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={onChange}
              />
            </Form.Item>
              


            <Row justify="end">
              <Button htmlType="submit" type="primary">
                Registrar servicio
              </Button>
            </Row>
          </Form>
        </Col>
      </Card>
    </Col>
  );
}
