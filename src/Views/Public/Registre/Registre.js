import React, { useState, useEffect } from "react";
import "../Registre/Registre.css";
import { Form, Input, Select, Button, message, Col, Row } from "antd";
import { Link } from "react-router-dom";
import api from "../../../common/api/api";
import { useHistory } from 'react-router-dom';





const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const RegistrationForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("role/all");
      setRoles(resultado.data);
    }
    apidata();
  }, [])

  const onFinish = async ({ user }) => {
    const respu = await api.post("auth/register", user);
    console.log(respu);
    if (respu.status === 201) {
      message.success("Se ha registrado correctamente");
      history.push("/login");
    } else {
      message.error("No se logro registrar correctamente");
    }
  };

  return (
    <Row className="container">

      <Col lg={{ span: 10 }} className="ladoI">
        <h1 className="T1">Bienvenidos</h1>
        <p className="T2">Si ya tiene cuenta, porfavor <br /> inicie sesion</p>
        <img src="./Register.png" className="cont2Img" />
        <Link to="/login">

          <Button type="primary" className="btn1" >
            iniciar sesion
         </Button>
        </Link>

      </Col>

      <Col lg={{ span: 14 }} className="ladoD">

        <Form

          className="formReg"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError

        >


          <Link to="/">
            <img src="./Logo.png" className="img1" />
          </Link>

          <Form.Item name={["user", "firstName"]} >
            <Input placeholder="Primer Nombre" />
          </Form.Item>
          <Form.Item name={["user", "secondName"]} >
            <Input placeholder="Segundo Nombre" />
          </Form.Item>



          <Form.Item name={["user", "firstSurname"]} >
            <Input placeholder="Primer Apellido" />
          </Form.Item>
          <Form.Item name={["user", "secondSurname"]} >
            <Input placeholder="Segundo Apellido" />
          </Form.Item>



          <Form.Item name={["user", "email"]}>
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name={["user", "username"]}
            rules={[
              {
                required: true,
                message: "por favor ingrese nombre de usuario!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Usuario" />
          </Form.Item>

          <Form.Item
            name={["user", "password"]}
            hasFeedback
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item name="confirm"

            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Por favor confirme contraseña!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.reject(
                      "Las dos contraseñas que ingresaste no coinciden!"
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirmar contraseña" />

          </Form.Item>



          <Form.Item name={["user", "role"]} >
            <Select placeholder="tipo usuario" >
              {
                roles !== null ? (
                  <>
                    {
                      roles.map((role, index) => {
                        if (role.id !== 5 && role.id !== 7 && role.id !== 6) {

                          return (

                            <Select.Option value={role.id} key={index}>
                              {role.name}
                            </Select.Option>
                          )
                        } else {
                          return (

                            <></>
                          )
                        }
                      })
                    }
                  </>
                )
                  : <></>
              }
            </Select>
          </Form.Item>


          <Form.Item {...tailFormItemLayout} className="btnCont">
            <Button type="primary" htmlType="submit" className="btn2">
              Registrarme
         </Button>
          </Form.Item>

        </Form>
      </Col>
    </Row>



  );
};

// ReactDOM.render(<RegistrationForm />, mountNode);
