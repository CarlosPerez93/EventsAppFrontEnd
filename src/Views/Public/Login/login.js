import React from "react";
import { Form, Input, Button, Checkbox, message, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Login/login.css";

import { Link, useHistory } from "react-router-dom";
import api from "../../../common/api/api";
import token from "../../../localstorage/token";
export default function Login({ setAuth }) {
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = async ({ user }) => {
    const respu = await api.post("auth/login", user);
    console.log(respu);
    if (respu.status === 201) {
      token.setToken(respu.data.token);
      //    estaAuth  === token  si no token === null
      setAuth(true);
      history.push("/");
    } else {
      message.error("Usuario y/o contraseña incorrectos");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col lg={{ span: 24 }} className="mainLogin">
      <Row>

        <Col lg={{span:14}} className="ContainerLogin">


          <Form
            className="formLogin"
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <h1>Iniciar Sesion</h1>
           
            <Form.Item
              className="labelLogin"
              name={["user", "username"]}
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su nombre de usuario!",
                },
              ]}
            >
              <Input className="InputLogin" placeholder="Usuario" />
            </Form.Item>

            <Form.Item
              className="labelLogin"
              name={["user", "password"]}
              rules={[
                { required: true, message: "Porfavor ingrese su contraseña!" },
              ]}
            >
              <Input.Password className="InputLogin" placeholder="Contraseña" />
            </Form.Item>

            <Form.Item
              {...tailLayout}
              name="remember"
              valuePropName="checked"
              className="remember"
            >
              <Checkbox className="remember1">Recordarme</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout} className="butonCont">
              <Button type="primary" htmlType="submit" className="Buton">
                Iniciar Sesión
            </Button>
              <br />
            </Form.Item>
            <Col lg={{span:16}} className="link">
              <Link to="/register"> O registrate ahora!
            </Link>
              <Link to="/" className="login-form-forgot">
                Olvido su Contraseña?
            </Link>
            </Col>
          </Form>

        </Col>
        <Col lg={{span:10}}>
          <img className="imgLogin" src={"/login1.png"} alt="aa" />
        </Col>
      </Row>
    </Col>
  );
};
