import React from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import token from "../../localstorage/token";

const { SubMenu } = Menu;

export default function Navbar({ role, setAuth }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/login");
  };

  const options = () => {
    switch (role) {
      case 1:
        return (
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/">Gestionar eventos</Link>
            </Menu.Item>
            <SubMenu title={token.decodeJWT().username}>
              <Menu.Item>
              <Link to="/profile">Mi perfil</Link>
              </Menu.Item>
            <Menu.Item onClick={logout}>Cerrar Sessión</Menu.Item>
            </SubMenu>
           </Menu>
        );
      case 2:
        return (
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/services">Gestionar servicio</Link>
            </Menu.Item>
            <SubMenu title={"@"+token.decodeJWT().username}>
            <Menu.Item>
              <Link to="/profile">Mi perfil</Link>
              </Menu.Item>
            <Menu.Item onClick={logout}>Cerrar Sessión</Menu.Item>
            </SubMenu>
          </Menu>
        );
      default:
        return (
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Inicio</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Ingresar</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register">Registro</Link>
            </Menu.Item>
          </Menu>
        );
    }
  };

  return options();
}
