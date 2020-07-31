import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LayoutClient} from "../LayoutMenu/LayoutClient"
import "./profile.css";
import img1 from "../../Assests/Img/imgPerfil.jpg";
import { Menu, Row, Button } from "antd";
import {
  MessageOutlined,
  FacebookFilled,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import api from "../../api/api";
import token from "../../localstorage/token";

export const Profile = () => {
  const [user, setUser] = useState(null);

  const dataApi = async () => {
    const result = await api.get("user/profile", { id: token.decodeJWT().id });
    setUser(result.data);
  };

  useEffect(() => {
    dataApi();
  });

  if (user !== null) {

    return (
      <div className="MainProfile">
      <LayoutClient/>
        <img className="imgProfile" src="user.png" alt="img-user" />
        <h1 style={{ fontSize: "2em", fontWeight: "bold" }}>
          {user.firstName} {user.secondName} {user.firstSurname}{" "}
          {user.secondSurname}{" "}
        </h1>
    <h2 style={{textAlign: "center", padding:"0px", margin:"0px" ,fontWeight: "bold", color:"#A7B6BF" }}>{
            token.decodeJWT().role.id === 1 ?
             "Cliente"  : "Empleado" 
        }</h2>
        <Row justify="center">
          <Button
            icon={<MessageOutlined />}
            shape="round"
            size="large"
            type="primary"
          >
            Mensaje
          </Button>
        </Row>
        <br />
        <Row justify="center">
          <Button
            shape="circle"
            icon={<FacebookFilled />}
            type="primary"
            size="large"
          /> 
          <Button
            shape="circle"
            icon={<InstagramOutlined />}
            type="primary"
            size="large"
            style={{
              marginLeft: "2vh",
              backgroundColor: "#F170D8",
              border: "none",
            }}
          />
          <Button
            shape="circle"
            icon={<WhatsAppOutlined />}
            type="primary"
            size="large"
            style={{
              marginLeft: "2vh",
              border: "none",
              backgroundColor: "#62DE49",
            }}
          />
        </Row>

        <Menu mode="horizontal" className="menu-tap">
          <Menu.Item key="1">
            <Link to="/" className="text">
              Paquetes
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/" className="text">
              Calificación
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/" className="text">
              Información
            </Link>
          </Menu.Item>
        </Menu>
        <div className="containerCards">
          <div className="card1">
            <h3 className="it1">Nombre:</h3>
            <h2 className="it2">Paquete 1</h2>

            <h4 className="it3">DESCRIPCIÓN</h4>
            <p className="it4">
              lorom ipsun dolor sit amet, consectetur adipicing elit
            </p>

            <h2 className="it5">$15'000</h2>
          </div>
          <div className="card1">
            <h3 className="it1">Nombre:</h3>
            <h2 className="it2">Paquete 2</h2>

            <h4 className="it3">DESCRIPCIÓN</h4>
            <p className="it4">
              lorom ipsun dolor sit amet, consectetur adipicing elit
            </p>

            <h2 className="it5">$15'000</h2>
          </div>
          <div className="card1">
            <h3 className="it1">Nombre:</h3>
            <h2 className="it2">Paquete 3</h2>

            <h4 className="it3">DESCRIPCIÓN</h4>
            <p className="it4">
              lorom ipsun dolor sit amet, consectetur adipicing elit
            </p>

            <h2 className="it5">$15'000</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>No se cargaron los datos</p>;
  }
};
