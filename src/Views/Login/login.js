import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import "../Login/login.css";
import img1 from "../../Img/imgLogin.jpg";
import { LayoutMenu } from "../LayoutMenu/layoutMenu";

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
        <div className="main">

            <LayoutMenu />

            <img className="imgLogin" src={img1} />







            <Form className="form"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item className="label"
                    label="Usuario"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >


                </Form.Item>
                <Input className="Input" />

                <Form.Item className="label"
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >

                </Form.Item>
                <Input.Password className="Input" />

                <Form.Item {...tailLayout} className="remember" name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                        </Button> <br />
                </Form.Item>
                <div className="link">
                    <a href="">Or register now!</a>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </div>
            </Form>



        </div>
    );




}

