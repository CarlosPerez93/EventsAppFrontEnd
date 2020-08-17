import React from 'react'
import { Card, Col, Row, Button, Tabs } from 'antd'
import { PlusOutlined, FacebookFilled, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons'
import "./PerfilInfo.css"
import CardProducto from "./CardProducto/CardProducto"
export default function PerfilInfo() {
    const { TabPane } = Tabs;
    return (
        <Col lg={{ span: 18, offset: 3 }} className="perfilInfo" >

            <Card lg={{ span: 20, offset: 2 }} style={{ display: "grid", justifyContent: "center", marginTop: "2%", textAlign: "center" }}>

                <img src="./perfil1.png" alt="" />

                <h1>Carlos Alberto Pérez Cuellar</h1>
                <Button icon={<PlusOutlined />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF" }} >
                    Mensaje
                </Button>
                <Row justify="center" style={{ marginTop: "2%" }}>
                    <Button
                        shape="circle"
                        icon={<FacebookFilled />}
                        type="primary"
                        size="large"
                    />
                    <Button
                        shape="circle"
                        icon={<InstagramOutlined />}
                        type="primary"
                        size="large"
                        style={{
                            marginLeft: "2vh",
                            backgroundColor: "#F170D8",
                            border: "none",
                        }}
                    />
                    <Button
                        shape="circle"
                        icon={<WhatsAppOutlined />}
                        type="primary"
                        size="large"
                        style={{
                            marginLeft: "2vh",
                            border: "none",
                            backgroundColor: "#62DE49",
                        }}
                    />
                </Row>

                <Tabs>
                    <TabPane tab="Productos" key="1" style={{ display: "flex", justifyContent: "center", }}>
                        <CardProducto />
                    </TabPane>
                    <TabPane tab="Calificación" key="2" style={{ display: "flex", justifyContent: "center", }}>
                        <CardProducto />
                    </TabPane>
                    <TabPane tab="Informacion" key="3" style={{ display: "flex", justifyContent: "center", }}>
                        <CardProducto />
                    </TabPane>
                </Tabs>
            </Card>
        </Col>
    )
}
