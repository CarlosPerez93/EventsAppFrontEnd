import React, { useState, useEffect } from "react";
import "./ListaEventos.css";
import { Select, Form } from "antd";
import api from "../../../../../common/api/api";
import { useHistory} from "react-router-dom";
import img1 from "./../../../../../Assests/Img/Logo.png";
import {Modall} from "../../../../../components/Modal/Modal";
export default function ServiciosAdquiridos() {
  const { Option } = Select;
  const history = useHistory();
  const [form] = Form.useForm();
  const [tipoEvento, setTipoEvento] = useState(null);

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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("event/types");
      setTipoEvento(resultado.data);
      console.log(resultado);
    };
    apidata();
  }, []);

  return (
    <div className="mainEventosAdquiridos">
      <img className="logoModal" src={img1} />
      <h1>Eventos Adquiridos</h1>
      <div className="mainContenedores">
        <div className="contenedorEventosAdquiridos">
        
            <h2>Sociales</h2>

            <div className="Car">
              <div to="/" className="cardEventos">
                <img src="https://media.istockphoto.com/photos/baby-girl-christening-shoes-picture-id587780012" />
                <h3>Bautizo</h3>
                <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://media.istockphoto.com/photos/hands-with-candles-of-little-girls-on-first-holy-communion-picture-id649622342" />
                <h3>Comunión</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>15 años</h3>
                 <Modall/>
              </div>
            </div>
            <div className="Car">
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Cumpleaños</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://media.istockphoto.com/photos/priest-celebrate-mass-at-the-church-picture-id886182946" />
                <h3>Confirmación</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <h3>Bodas</h3>
                 <Modall/>
              </div>
            </div>

        </div>

        <div className="contenedorEventosAdquiridos">
        
            <h2>Empresariales</h2>

            <div className="Car">
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Ferias</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Reuniones</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Capacitaciones</h3>
                 <Modall/>
              </div>
            </div>
            <div className="Car">
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/3036525/pexels-photo-3036525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Aniversarios</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>Fiestas</h3>
                 <Modall/>
              </div>
              <div to="/" className="cardEventos">
                <img src="https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <h3>fin de año</h3>
                 <Modall/>
              </div>
            </div>
      
        </div>
      </div>
    </div>
  );
}
