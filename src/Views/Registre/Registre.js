import React, { useState } from "react";

import { LayoutMenu } from "../LayoutMenu/layoutSingle";
import "../Registre/Registre.css";
import img1 from "../../Assests/Img/fiesta.png";
import { Form, Input, Tooltip, Select, Button, AutoComplete, Row, Col, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
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

      <Row>
        <Col lg={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }}>
          <img className="img" src={img1} />
        </Col>
        <Col lg={{ span: 10, offset: 1 }} xs={{ span: 22, offset: 1 }}>
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
            <div className="intems">
            
              <Form.Item name={["user", "firstName"]} label="Pri. Nombre">
                <Input className="Input" />
              </Form.Item>
              <Form.Item name={["user", "secondName"]} label="Seg. Nombre">
                <Input className="Input" />
              </Form.Item>

            </div>
            <div className="intems">

              <Form.Item name={["user", "firstSurname"]} label="Pri. Apellido">
                <Input className="Input" />
              </Form.Item>
              <Form.Item name={["user", "secondSurname"]} label="Seg. Apellido">
                <Input className="Input" />
              </Form.Item>
            </div>

            <div className="intems">
              <Form.Item name={["user", "email"]} label="E-mail">
                <Input className="Input" />
              </Form.Item>
              <Form.Item
                name={["user", "username"]}

                label={
                  <span>
                    Usuario&nbsp;
                  <Tooltip title="Como quieres que te llamen tus amigos?">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "por favor ingrese nombre de usuario!",
                    whitespace: true,
                  },
                ]}
              >
                <Input className="Input" />
              </Form.Item>
            </div>

            <div className="intems">

              <Form.Item
                name={["user", "password"]}
                label="Contraseña"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese contraseña!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password className="Input" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirmar contraseña"
                dependencies={["password"]}
                hasFeedback
              /* rules={[
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
                ]}*/
              >
                <Input.Password className="Input" />
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
        </Col>
      </Row>
    </div>
  );
};

// ReactDOM.render(<RegistrationForm />, mountNode);
