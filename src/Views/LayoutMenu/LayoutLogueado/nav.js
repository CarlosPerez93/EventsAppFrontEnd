import React from "react"
import { Link } from "react-router-dom";
import { Input, Menu } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import img1 from "../../../Assests/Img/Logo.png";
import "./nav.css";

export const Nav = () => {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const { SubMenu } = Menu;
    return (
        <div className="MainNav" >

            <Link to="/home">
                <img className="Logo1" src={img1} />
            </Link>

            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                className="Buscador"
            />

            <Menu className="Menu" mode="horizontal">
            <Menu.Item key="1" >
                        <Link to="/home" className="op">
                            Inicio
                    </Link>
                    </Menu.Item>
            <Menu.Item key="2">
                        <Link to="/"  className="op">
                            Mis eventos
                    </Link>
                    </Menu.Item>
            <Menu.Item key="3" >
                        <Link to="/" className="op">
                            @Usuario
                    </Link>
                    </Menu.Item>
            </Menu>

        </div >
    );
}
