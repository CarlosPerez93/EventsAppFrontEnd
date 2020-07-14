import React, { useState } from "react"

import { LayoutMenu } from "../LayoutMenu/layoutMenu";
import "../Registre/Registre.css"
import img1 from "../../Img/fiesta.png";
import {
  Form,
  Input,
  Tooltip,
  Select,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
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

  const onFinish = values => {
    console.log('Received values of form: ', values);
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

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));



  return (

    <div className="Main">

      <LayoutMenu />
      <div className="Container1">
      <img className="img" src={img1} />


        <Form className="Form"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="nickname"
            label={
              <span>
                Usuario&nbsp;
            <Tooltip title="Como quieres que te llamen tus amigos?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
            rules={[{ required: true, message: 'por favor ingrese nombre de usuario!', whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Tipo de correo iconrrecto!',
              },
              {
                required: true,
                message: 'Por favor ingrese un correo',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: 'Por favor ingrese contraseña!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirmar contraseña"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor confirme contraseña!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Las dos contraseñas que ingresaste no coinciden!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>




          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
            ]}
            {...tailFormItemLayout}
          >  
          </Form.Item>

          <Form.Item {...tailFormItemLayout}  className="Button" > 
            <Button type="primary" htmlType="submit">
              Registrarme
        </Button>
          </Form.Item>
          <div className="Container2">
            Tienes cuenta? 
          <a href=""> <samp> Ingresar </samp> </a>
          </div>
        </Form>





      </div>
    </div>

  )
}



    // ReactDOM.render(<RegistrationForm />, mountNode);
