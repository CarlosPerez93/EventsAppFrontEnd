import React, { useState } from "react";

import { LayoutMenu } from "../LayoutMenu/layoutSingle";
import "../Registre/Registre.css";
import img1 from "../../Assests/Img/fiesta.png";
import { Form, Input, Tooltip, Select, Button, AutoComplete, Row, Col, message, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import api from "../../api/api";
import { useHistory } from 'react-router-dom';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

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


  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className="mainRegistre">
      <LayoutMenu />

      <div className="container">

        <img className="img" src={img1} />


        <Form
          className="Form"
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
          
          <Avatar size={84} icon={<UserOutlined  />} className="avatar" />
          <div className="intems">

            <Form.Item name={["user", "firstName"]}>
              <Input className="Input"  placeholder="Primer Nombre"/>
            </Form.Item>
            <Form.Item name={["user", "secondName"]}>
              <Input className="Input" placeholder="Segundo Nombre"/>
            </Form.Item>

          </div>
          <div className="intems">

            <Form.Item name={["user", "firstSurname"]} >
              <Input className="Input" placeholder="Primer Apellido"/>
            </Form.Item>
            <Form.Item name={["user", "secondSurname"]}>
              <Input className="Input" placeholder="Segundo Apellido"/>
            </Form.Item>
          </div>

          <div className="intems">
            <Form.Item name={["user", "email"]}>
              <Input className="Input" placeholder="E-mail"/>
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
              <Input className="Input" placeholder="Usuario"/>
            </Form.Item>
          </div>

          <div className="intems">

            <Form.Item
              name={["user", "password"]}
              hasFeedback
            >
              <Input.Password className="Input" placeholder="Contraseña"/>
            </Form.Item>

            <Form.Item
              name="confirm"

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
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Las dos contraseñas que ingresaste no coinciden!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password className="Input" placeholder="Confirmar contraseña"/>
            </Form.Item>
          </div>

          <Form.Item {...tailFormItemLayout} className="butonCont">
            <Button type="primary" htmlType="submit" className="Button">
              Registrarme
     </Button>
          </Form.Item>
          <div className="Label">
            Tienes cuenta?
     <Link to="/login">
              {" "}
              <a href="">
                {" "}
                <samp className="a"> Ingresar </samp>{" "}
              </a>
            </Link>
          </div>
        </Form>

    </div>
      </div>
  );
};

// ReactDOM.render(<RegistrationForm />, mountNode);
