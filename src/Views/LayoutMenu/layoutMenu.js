import React from "react"
import { Menu } from 'antd';
import {
    AppstoreOutlined,

    ContactsOutlined,
    StarFilled,
    FacebookOutlined,
    HomeFilled,
    TwitterOutlined,
    WhatsAppOutlined,
    MailOutlined,
    PictureOutlined,
    AppleOutlined,
    SoundOutlined,
    CameraOutlined,
    SmileOutlined,
    LoginOutlined,
    UserAddOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import "../LayoutMenu/menu.css";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export class LayoutMenu extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="MainMenu" >


                <Menu defaultSelectedKeys={
                    ['1']}

                    mode="horizontal"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed} >
                    <Menu.Item key="1"

                        icon={< HomeFilled />} >
                        <Link to="/home">
                            Inicio
                            </Link>
                    </Menu.Item>

                  
                    <SubMenu key="sub2"
                        icon={< AppstoreOutlined />}
                        title="Servicios" >
                        <SubMenu key="sub3"
                            icon={< StarFilled />}
                            title="Decoración" >
                            <Menu.Item key="9" > * </Menu.Item> <Menu.Item key="10" > * </Menu.Item> <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item> <Menu.Item key="13" > * </Menu.Item> </SubMenu>
                        <SubMenu key="sub4"
                            icon={< PictureOutlined />}
                            title="Lugares " >
                            <Menu.Item key="9" > * </Menu.Item>
                            <Menu.Item key="10" > * </Menu.Item>
                            <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5"
                            icon={< AppleOutlined />}
                            title="Bufet" >
                            <Menu.Item key="9" > * </Menu.Item>
                            <Menu.Item key="10" > * </Menu.Item>
                            <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6"
                            icon={< SoundOutlined />}
                            title="Sonido" >
                            <Menu.Item key="9" > * </Menu.Item>
                            <Menu.Item key="10" > * </Menu.Item>
                            <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7"
                            icon={< CameraOutlined />}
                            title="Fotografia" >
                            <Menu.Item key="9" > * </Menu.Item>
                            <Menu.Item key="10" > * </Menu.Item>
                            <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8"
                            icon={< SmileOutlined />}
                            title="Animacón" >
                            <Menu.Item key="9" > * </Menu.Item>
                            <Menu.Item key="10" > * </Menu.Item>
                            <Menu.Item key="11" > * </Menu.Item>
                            <Menu.Item key="12" > * </Menu.Item>
                        </SubMenu>

                    </SubMenu>

                    <Menu.Item key="2"
                        icon={< UserAddOutlined />} >
                        <Link to="/registre">
                            Registro
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="3"
                        icon={< LoginOutlined />} >
                            <Link to="/login">

                        Login
                            </Link>
                        </Menu.Item>

                    <Menu.Item key="4"
                        icon={< TeamOutlined />} >
                        Sobre nosotros
                            </Menu.Item>
                </Menu >
            </div >
        );
    }
}