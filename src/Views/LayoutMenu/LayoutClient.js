import React, { useEffect, useState } from "react";
import { Menu, Avatar, Input,Divider } from 'antd';
import api from "../../api/api";
import token from "../../localstorage/token";
import {
    AppstoreOutlined,
    StarFilled,
    PictureOutlined,
    AppleOutlined,
    SoundOutlined,
    CameraOutlined,
    SmileOutlined,
    UserAddOutlined,
    UserOutlined,
    ContactsOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import "../LayoutMenu/menu.css";
import { Link } from "react-router-dom";
import img1 from "../../Assests/Img/Logo.png";

const { SubMenu } = Menu;

export const LayoutClient = () => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };

    const [user, setUser] = useState(null);

    const dataApi = async () => {
        const result = await api.get("user/profile", { id: token.decodeJWT().id });
        setUser(result.data);
    };

    const useEffect = (() => {
        dataApi();
    });

    const { Search } = Input;
    if (user !== null) { }
    return (
        <div className="MainMenu" >

            <Link to="/home" className="imgLogo">
                <img className="imgLogo2" src={img1} />
            </Link>


            <Search
                placeholder="Buscar"
                onSearch={value => console.log(value)}
                className="Buscador"
            />
            <Menu
                theme="dark"
                className="keys"
                mode="horizontal"
                inlineCollapsed={collapsed} >

                <Menu.Item key="2" className="op"
                    icon={< HomeOutlined />} >
                    <Link to="/home">Inicio</Link>
                </Menu.Item>



                <SubMenu key="sub2" className="op"
                    icon={< AppstoreOutlined />}
                    title="Servicios" >

                    <Menu.Item key="sub3"
                        icon={< StarFilled />}
                        title="Decoración" >
                        <Link to="/" >Decoracion</Link>
                    </Menu.Item>
                    <Menu.Item key="sub4"
                        icon={< PictureOutlined />}
                        title="Lugares " >

                        <Link to="/">Lugares</Link>
                    </Menu.Item>
                    <Menu.Item key="sub5"
                        icon={< AppleOutlined />}
                        title="Bufet" >
                        <Link to="/">Bufet</Link>
                    </Menu.Item>
                    <Menu.Item key="sub6"
                        icon={< SoundOutlined />}
                        title="Sonido" >
                        <Link to="/">Sonido</Link>
                    </Menu.Item>
                    <Menu.Item key="sub7"
                        icon={< CameraOutlined />}
                        title="Fotografia" >
                        <Link to="/">Fotografia</Link>

                    </Menu.Item>
                    <Menu.Item key="sub8"
                        icon={< SmileOutlined />}
                        title="Animacón" >
                        <Link to="/">
                            Animación

                                </Link>
                    </Menu.Item>

                </SubMenu>





                <Menu.Item key="4" className="op"
                    icon={< ContactsOutlined />} >
                    <Link to="/">
                        Quienes Somos
                    </Link>
                </Menu.Item>

            

                    <SubMenu
                        title="@Usuario"
                    >
                        <Menu.Item key="sub9"
                            title="Servicios Adquiridos"  
                        >
                            <Link to="/services">
                                Compras
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="sub10"
                            title="Resumen de compras"     
                        >
                            <Link to="/services">
                                Resumen de Compras
                            </Link>
                        </Menu.Item>
                        <Divider  />
                        <Menu.Item key="sub11"
                            title="Mis datos"     
                        >
                            <Link to="/services">
                                Mis datos
                            </Link>
                        </Menu.Item>

                        <Divider  />



                        <Menu.Item key="sub20"
                            title="Cerrar Sesión"
                           
                        >
                            <Link to="/services">
                                Cerrar Sesón
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Avatar className="Avat" size={54} icon={<UserOutlined className="iconAvatar" />} />

                

            </Menu >
        </div >
    );
}
