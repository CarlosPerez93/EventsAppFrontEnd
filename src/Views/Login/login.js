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


            <div className="Img1">
                <img className="imgLogin" src={img1} />
            </div>




            <Form className="form"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} className="remember" name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="default" htmlType="submit">
                        Login
                        </Button> <br />
                    <a href="">Or register now!</a>
                </Form.Item>
            </Form>



        </div>
    );




}

