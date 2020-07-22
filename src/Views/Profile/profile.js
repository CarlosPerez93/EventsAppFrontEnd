import React from "react"
import { Link, useHistory } from "react-router-dom"
import { Nav } from "../LayoutMenu/LayoutLogueado/nav"
import "./profile.css";
import img1 from "../../Assests/Img/imgPerfil.jpg";
import { Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const Profile = () => {

    return (
        <div className="MainProfile">
            <Nav />

            <img className="imgProfile" src={img1} />

            <h1>Rocio Quigua</h1>

            <h3>DECORACIÓN</h3>

            <div className="msm"><PlusOutlined />Message</div>

            <div className="balls">


                <div className="ball1"></div>

                <div className="ball2"></div>

                <div className="ball3"></div>

            </div>


            <Menu className="cont1" mode="horizontal">
                <Menu.Item key="1" >
                    <Link to="/" className="text" >
                        Paquetes
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/" className="text">
                        Calificación
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" >
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
                    <p className="it4">lorom ipsun dolor sit amet,
                    consectetur adipicing elit
                </p>

                    <h2 className="it5">$15'000</h2>
                </div>
                <div className="card1">
                    <h3 className="it1">Nombre:</h3>
                    <h2 className="it2">Paquete 2</h2>

                    <h4 className="it3">DESCRIPCIÓN</h4>
                    <p className="it4">lorom ipsun dolor sit amet,
                    consectetur adipicing elit
                </p>

                    <h2 className="it5">$15'000</h2>
                </div>
                <div className="card1">
                    <h3 className="it1">Nombre:</h3>
                    <h2 className="it2">Paquete 3</h2>

                    <h4 className="it3">DESCRIPCIÓN</h4>
                    <p className="it4">lorom ipsun dolor sit amet,
                    consectetur adipicing elit
                </p>

                    <h2 className="it5">$15'000</h2>
                </div>
            </div>


        </div>
    )




}

