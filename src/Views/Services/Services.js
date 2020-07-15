import React from "react"
import "../Services/Services.css"
import { Card } from 'antd';
import { LayoutMenu } from "../LayoutMenu/layoutMenu";
import img1 from "../../Img/arregloFloral.jpg";
import img2 from "../../Img/Camara.png";
import img4 from "../../Img/bufet.png";
import img3 from "../../Img/lugares.jpg";
import img5 from "../../Img/sonido.jpg";
import img6 from "../../Img/animacion.png";

export class Services extends React.Component {

    render() {
        const { Meta } = Card;
        return (
            <div className="mainServices">
                <div className="layaout">

                <LayoutMenu />
                </div>
                <div className="ContainerServices">

                    <h1>Servicios</h1>
                    <h2>Tenemos todos los servicios para acompañarte en tus fecha especial</h2>
                    <div >
                        <div className="Cards">

                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img1} />}
                            >
                                <Meta title="Decoración" description="www.instagram.com" />
                            </Card>
                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img3} />}
                            >
                                <Meta title="Lugares" description="www.instagram.com" />
                            </Card>
                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img4} />}
                            >
                                <Meta title="Bufet" description="www.instagram.com" />
                            </Card>

                        </div>
                        <div className="Cards">

                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img5} />}
                            >
                                <Meta title="Sonido" description="www.instagram.com" />
                            </Card>
                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img2} />}
                            >
                                <Meta title="Fotografia" description="www.instagram.com" />
                            </Card>
                            <Card className="Card"
                                hoverable

                                cover={<img alt="example" src={img6} />}
                            >
                                <Meta title="Animación" description="www.instagram.com" />
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}