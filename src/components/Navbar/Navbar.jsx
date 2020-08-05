import React from "react";
import { Menu, Input, Divider } from "antd";
import { Link, useHistory } from "react-router-dom";
import token from "../../localstorage/token";
import img1 from "../../Assests/Img/Logo.png";
import "./Navbar.css";
import {
  AppstoreOutlined,
  StarFilled,
  PictureOutlined,
  AppleOutlined,
  SoundOutlined,
  CameraOutlined,
  SmileOutlined,
  LoginOutlined,
  UserAddOutlined,
  ContactsOutlined,
  HomeOutlined,
  AudioOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Search } = Input;

export default function Navbar({ role, setAuth }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/home");
  };

  const options = () => {
    switch (role) {
      case 1:
        return (
          <div>
            <Menu mode="horizontal" className="menu">
              <Link to="/" className="imgLogo">
                <img className="imgLogo2" src={img1} />
              </Link> 

               <Search
                placeholder="Buscar"
                onSearch={(value) => console.log(value)}
                className="Buscador"
              />

              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Inicio</Link>
              </Menu.Item>

              <SubMenu icon={<AppstoreOutlined />} title="Servicios">
                <Menu.Item icon={<StarFilled />} title="Decoración">
                  <Link to="/">Decoracion</Link>
                </Menu.Item>

                <Menu.Item icon={<PictureOutlined />} title="Lugares ">
                  <Link to="/">Lugares</Link>
                </Menu.Item>

                <Menu.Item icon={<AppleOutlined />} title="Bufet">
                  <Link to="/">Bufet</Link>
                </Menu.Item>

                <Menu.Item icon={<SoundOutlined />} title="Sonido">
                  <Link to="/">Sonido</Link>
                </Menu.Item>

                <Menu.Item icon={<CameraOutlined />} title="Fotografia">
                  <Link to="/">Fotografia</Link>
                </Menu.Item>

                <Menu.Item icon={<SmileOutlined />} title="Animacón">
                  <Link to="/">Animación</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item icon={<ContactsOutlined />}>
                <Link to="/">Quienes Somos</Link>
              </Menu.Item>

              <SubMenu title={"@" + token.decodeJWT().username}>
                <Menu.Item>
                  <Link to="/gestionarEvento">Gestionar mi Evento</Link>
                </Menu.Item>
                
                <Menu.Item>
                  <Link to="/ListadoEventos"> Listado de mis Eventos</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to="/gestionarServicio">Gestionar mi Servicio</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to="/ListadoServicio"> Listado de mis Servicios</Link>
                </Menu.Item>

                <Menu.Item onClick={logout}>
                  <Link to="/">Cerrar Sesion</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        );
      case 2:
        return (
          <div>
            <Menu mode="horizontal" className="menu">
              <Link to="/home" className="imgLogo">
                <img className="imgLogo2" src={img1} />
              </Link>

              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Inicio</Link>
              </Menu.Item>

              <SubMenu title={"@" + token.decodeJWT().username}>
                
                <Menu.Item>
                  <Link to="/profile">Mi perfil</Link>
                </Menu.Item>

                <Divider/>
                <Menu.Item>
                  <Link to="/profile">Mis Servicios</Link>
                </Menu.Item>
             
                <Divider/>
                <Menu.Item>
                  <Link to="/" onClick={logout}>Cerrar sesion</Link>
                </Menu.Item>
              
              </SubMenu>
            </Menu>
          </div>
        );
      default:
        return (
          <div>
            <Menu mode="horizontal" className="menu">
              <Link to="/home" className="imgLogo">
                <img className="imgLogo2" src={img1} />
              </Link>

              <Search
                placeholder="Buscar"
                onSearch={(value) => console.log(value)}
                className="Buscador"
              />

              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/home">Inicio</Link>
              </Menu.Item>
              <SubMenu icon={<AppstoreOutlined />} title="Servicios">
                <Menu.Item icon={<StarFilled />} title="Decoración">
                  <Link to="/">Decoracion</Link>
                </Menu.Item>

                <Menu.Item icon={<PictureOutlined />} title="Lugares ">
                  <Link to="/">Lugares</Link>
                </Menu.Item>

                <Menu.Item icon={<AppleOutlined />} title="Bufet">
                  <Link to="/">Bufet</Link>
                </Menu.Item>

                <Menu.Item icon={<SoundOutlined />} title="Sonido">
                  <Link to="/">Sonido</Link>
                </Menu.Item>

                <Menu.Item icon={<CameraOutlined />} title="Fotografia">
                  <Link to="/">Fotografia</Link>
                </Menu.Item>

                <Menu.Item icon={<SmileOutlined />} title="Animacón">
                  <Link to="/">Animación</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<ContactsOutlined />}>
                <Link to="/">Quienes Somos</Link>
              </Menu.Item>
              <Menu.Item icon={<UserAddOutlined />}>
                <Link to="/register">Registro</Link>
              </Menu.Item>
              <Menu.Item icon={<LoginOutlined />}>
                <Link to="/login">Ingresar</Link>
              </Menu.Item>
            </Menu>
          </div>
        );
    }
  };

  return options();
}