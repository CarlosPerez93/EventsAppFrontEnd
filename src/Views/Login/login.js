import React from "react";
import { Form, Input, Button, Checkbox, message } from 'antd';
import "../Login/login.css";
import img1 from "../../Assests/Img/imgLogin.jpg";
import { Link, useHistory } from "react-router-dom"
import { LayoutMenu } from "../LayoutMenu/layoutSingle"
import api from "../../api/api";

export const Login = () => {
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
           localStorage.setItem("token", respu.data.token);
           // estaAuth  === token  si no token === null
           history.push("/profile");
        } else {
          message.error("Usuario y/o contraseña incorrectos");
        }
      };    

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="mainLogin">
            <LayoutMenu  />

            <div className="ContainerLogin">
                <div className="cont1">
                    <img className="imgLogin" src={img1} />

                </div>
                <div className="cont2">
                    <Form className="formLogin"
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item className="labelLogin"
                            label="Usuario"
                            name={["user", "username"]}
                            rules={[{ required: false, message: 'Please input your username!' }]}

                        >
                        <Input className="InputLogin" />
                        </Form.Item>

                        <Form.Item className="labelLogin"
                            label="Contraseña"
                            name={["user", "password"]}

                            rules={[{ required: false, message: 'Please input your password!' }]}
                        >
                        <Input.Password className="InputLogin" />
                        </Form.Item>

                        <Form.Item {...tailLayout}  name="remember" valuePropName="checked" >
                            <Checkbox className="remember1">Recordarme</Checkbox>
                        </Form.Item>


                        <Form.Item {...tailLayout} className="fromItem">
                            <Button type="primary" htmlType="submit" className="Buton">
                                Iniciar Sesión
                        </Button> <br />
                        </Form.Item>
                        <div className="link">
                            <Link to="/registre"> <a href="">O registrate ahora!</a></Link>
                            <Link to="/"><a className="login-form-forgot" href="">Olvido su Contraseña?</a></Link>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    );




}

