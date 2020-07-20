import React from 'react';
import { LayoutMenu } from "../LayoutMenu/layoutMenu";
import { Carousel, Card, Col, Row } from 'antd';
import "../Home/Home.css"
import img1 from "../../Assests/Img/sitios.jpg"
import img2 from "../../Assests/Img/sonido1.jpg"
import img3 from "../../Assests/Img/buffet.jpg"
import img4 from "../../Assests/Img/fotografia.jpg"
import img5 from "../../Assests/Img/animacion.jpg"


const Home = () => {
   
    return (

        <div className="mainHome">
            <LayoutMenu  />

            <Carousel autoplaySpeed >
                <div className="cont">
                    <img className="imgs" src={img1} />
                </div>

                <div className="cont">
                    <img className="imgs" src={img2} />

                </div>
                <div className="cont">
                    <img className="imgs" src={img4} />

                </div >
                <div className="cont">
                    <img className="imgs" src={img3} />

                </div>
                <div className="cont">
                    <img className="imgs" src={img5} />

                </div>
            </Carousel>,

            <div className="site-card-wrapper">
                <h2>modo de pago</h2>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card className="Card" bordered={false}>
                            <div className="contImgcard"></div>
                            <h2>efecty</h2>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="Card" title="Card title" bordered={false}>
                            Card content
                            </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="Card" title="Card title" bordered={false}>
                            Card content
                            </Card>
                    </Col>
                </Row>
            </div>,


        </div>
    )
}
export default Home;