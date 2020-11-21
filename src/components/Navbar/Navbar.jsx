import React from "react";
import { Menu, Divider, Col } from "antd";
import { Link, useHistory } from "react-router-dom";
import token from "../../localstorage/token";
import img1 from "../../Assests/Img/Logo.png";
import "./Navbar.css";
import {

 

 
} from "@ant-design/icons";
const { SubMenu } = Menu;


export default function Navbar({ role, setAuth }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  const options = () => {
    switch (role) {
      case 1:
        return (
          <Col lg={{span:24, offset:0}} xs={{span:24, offset:0}} className="mainMenu">
            <Link to="/" className="imgLogo">
              <img className="imgLogo2" src={img1} alt="a" />
            </Link>
            <Menu mode="horizontal" className="menu">



              <Menu.Item >
                <Link className="items"   to="/home">Inicio</Link>
              </Menu.Item>
              <Menu.Item >
                <Link className="items"  to="/servicios">Servicios</Link>
              </Menu.Item>

                          <SubMenu className="items" title={"@" + token.decodeJWT().username}>
                <Menu.Item>
                  <Link className="items" to="/misEventos">Mis eventos</Link>
                </Menu.Item>
                <Divider />
                <Menu.Item onClick={logout}>
                  <Link className="items" to="/">Cerrar sesion</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        );
      case 2:
        return (
          <Col  lg={{span:24, offset:0}} xs={{span:24, offset:0}} className="mainMenu">
            <Link to="/" className="imgLogo">
              <img className="imgLogo2" src={img1} alt="a" />
            </Link>
            <Menu mode="horizontal" className="menu">

              <Menu.Item >
                <Link className="items" to="/">Inicio</Link>
              </Menu.Item>



              <SubMenu
                title={"@" + token.decodeJWT().username}
                className="items"
              >

                <Menu.Item>
                  <Link className="items" to="/agregarServicios">Agregar servicios</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link className="items" to="/misServicios">Mis servicios</Link>
                </Menu.Item>

                <Menu.Item>
                  <Link className="items" to="/eventosAsignados">Asignación de eventos</Link>
                </Menu.Item>

                <Divider />
                <Menu.Item>
                  <Link className="items" to="/perfil">Mi perfil</Link>
                </Menu.Item>

                <Divider />
                <Menu.Item>
                  <Link className="items" to="/" onClick={logout}>
                    Cerrar sesion
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        );
      case 3:
        return (
          <Col  lg={{span:24, offset:0}} xs={{span:24, offset:0}} className="mainMenu">
            <Link to="/" className="imgLogo">
              <img className="imgLogo2" src={img1} alt="a" />
            </Link>
            <Menu mode="horizontal" className="menu">

              <Menu.Item >
                <Link className="items"  to="/">Inicio administrador</Link>
              </Menu.Item>

              <SubMenu
                title={"@" + token.decodeJWT().username}
                className="items" 
              >

                <Menu.Item>
                  <Link className="items" to="/gestionRoles">Gestionar roles</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="items" to="/gestionRolEmpresario">Gestionar rol empresario</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="items" to="/gestionRolCliente">Gestionar rol cliente</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="items" to="/gestionServicios">Gestionar servicio</Link>
                </Menu.Item>

                <Divider />
                <Menu.Item>
                  <Link className="items" to="/" onClick={logout}>
                    Cerrar sesion
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        );
      default:
        return (
          <Col lg={{span:24, offset:0}} xs={{span:24, offset:0}} className="mainMenu">
            <Link to="/" className="imgLogo">
              <img className="imgLogo2" src={img1} alt="a" />
            </Link>
            <Menu mode="horizontal" className="menu">

              <Menu.Item >
                <Link className="items" to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item >
                <Link className="items" to="/register">Sing Up</Link>
              </Menu.Item>
            </Menu>
          </Col>
        );
    }
  };

  return options();
}
