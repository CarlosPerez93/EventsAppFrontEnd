import React from "react"
import "../LayoutMenu/menuSingle.css";
import { Link } from "react-router-dom";
import img1 from "../../Assests/Img/Logo.png";

export class LayoutMenu extends React.Component {
  

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="MainMenuSingle" >
                     <Link to="/home">
                        <img className="imgLogo1" src={img1} />
                    </Link>

            </div >
        );
    }
}