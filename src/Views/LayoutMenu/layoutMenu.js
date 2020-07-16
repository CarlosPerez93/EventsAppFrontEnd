import React from "react"
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    StarFilled,
    HomeFilled,
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
import img1 from "../../Assests/Img/Logo.png";
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


                <Menu
                    className="keys"
                    mode="horizontal"
                    inlineCollapsed={this.state.collapsed} >

                    <Link to="/home">
                        <img className="imgLogo" src={img1} />
                    </Link>

                    

                    <Menu.Item key="1" className="op"

                        icon={< HomeFilled />} >
                        <Link to="/home">
                            Inicio
                            </Link>
                    </Menu.Item>


                    <SubMenu key="sub2"  className="op"
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

                    <Menu.Item key="2" className="op"
                        icon={< UserAddOutlined />} >
                        <Link to="/registre">
                            Registro
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="3" className="op"
                        icon={< LoginOutlined />} >
                        <Link to="/login">

                            Login
                            </Link>
                    </Menu.Item>

                    <Menu.Item key="4" className="op"
                        icon={< TeamOutlined />} >
                        Sobre nosotros
                            </Menu.Item>
                </Menu >
            </div >
        );
    }
}