import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import "../Login/login.css";
import img1 from "../../Img/imgLogin.jpg";
import {Link} from "react-router-dom"

export const Login = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="mainLogin">
            <div className="ContainerLogin">
            <img className="imgLogin" src={img1} />

            <Form className="formLogin"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item className="labelLogin"
                    label="Usuario"
                    name="username"
                    rules={[{ required: false, message: 'Please input your username!' }]}

                >


                </Form.Item>
                <Input className="InputLogin" />

                <Form.Item className="labelLogin"
                    label="Contraseña"
                    name="password"
                    rules={[{ required: false, message: 'Please input your password!' }]}
                >

                </Form.Item>
                <Input.Password className="InputLogin" />

                <Form.Item {...tailLayout} className="remember" name="remember" valuePropName="checked">
                    <Checkbox>Recordarme</Checkbox>
                </Form.Item>


                <Form.Item {...tailLayout} className="Buton">
                    <Button  type="primary" htmlType="submit">
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
    );




}

