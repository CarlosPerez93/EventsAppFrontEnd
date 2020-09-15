import React, { useState, useEffect } from "react";
import "../Registre/Registre.css";
import img1 from "../../../Assests/Img/fiesta.png";
import Avatar1 from "../../../Assests/Img/avatar2.jpeg";
import { Form, Input,  Select, Button,   message, Avatar } from "antd";
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
      const apidata = async()=>{
        const resultado =  await api.get("role/all");
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
    <div className="mainRegistre">
        <div  className="container">
          <Form
            className="FormR"
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

            <Avatar src={Avatar1} size={86} className="avatar" />
            <div className="intems">

              <Form.Item className="contItem" name={["user", "firstName"]}>
                <Input className="Input" placeholder="Primer Nombre" />
              </Form.Item>
              <Form.Item className="contItem" name={["user", "secondName"]}>
                <Input className="Input" placeholder="Segundo Nombre" />
              </Form.Item>

            </div>
            <div className="intems">

              <Form.Item className="contItem" name={["user", "firstSurname"]} >
                <Input className="Input" placeholder="Primer Apellido" />
              </Form.Item>
              <Form.Item className="contItem" name={["user", "secondSurname"]}>
                <Input className="Input" placeholder="Segundo Apellido" />
              </Form.Item>
            </div>

            <div className="intems">
              <Form.Item className="contItem" name={["user", "email"]}>
                <Input className="Input" placeholder="E-mail" />
              </Form.Item>
              <Form.Item className="contItem"
                name={["user", "username"]}
                rules={[
                  { 
                    required: true,
                    message: "por favor ingrese nombre de usuario!",
                    whitespace: true,
                  },
                ]}
              >
                <Input className="Input" placeholder="Usuario" />
              </Form.Item>
            </div>

            <div className="intems">

              <Form.Item className="contItem"
                name={["user", "password"]}
                hasFeedback
              >
                <Input.Password className="Input" placeholder="Contraseña" />
              </Form.Item>

              <Form.Item className="contItem"
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
                        return Promise.reject(
                          "Las dos contraseñas que ingresaste no coinciden!"
                        );
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input.Password className="Input" placeholder="Confirmar contraseña" />

              </Form.Item>
              
            </div>
            <div className="intemsCheck">
              
            <Form.Item name={["user", "role"]} className="check">
                  <Select placeholder="tipo usuario" className="select" >
                      {
                        roles!==null ? (
                         <>
                            {
                               roles.map((role, index)=>{
                                 if(role.id!==3 && role.id!==4 && role.id!==5 && role.id!==7 && role.id!==6){

                                   return(
   
                                     <Select.Option value={role.id}  key={index}>
                                       {role.name}
                                     </Select.Option>
                                   )
                                 }else{
                                   return(

                                     <></>
                                   )
                                 }
                            })
                            }
                         </>
                        )
                        :<></>
                      }
                  </Select>
              </Form.Item>
              </div>    
           
            
            <Form.Item {...tailFormItemLayout} className="btnCont">
              <Button type="primary" htmlType="submit" className="ButtonC">
                Registrarme
         </Button>
            </Form.Item>
            <div className="Label">
              Tienes cuenta?
          <Link to="/login">
                {" "}
           
                  {" "}
                  <samp className="a"> Ingresar </samp>{" "}
          
              </Link>
            </div>
          </Form>
          <div className="contCarousel">
            <img className="img" src={img1} alt="img" />
        
            <h3>Confia en nosotros para todos tus eventos!</h3>
          </div>
        </div>
        


    </div>
  );
};

// ReactDOM.render(<RegistrationForm />, mountNode);
