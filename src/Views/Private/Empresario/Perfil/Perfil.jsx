import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Button, Tabs } from 'antd'
import { PlusOutlined, FacebookFilled, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons'
import "./Perfil.css"
import CardProducto from "../../Cliente/Home/CardServicio/CardServicio"
import token from "../../../../localstorage/token"
import Api from "../../../../common/api/api"
import { useParams } from "react-router-dom"

export default function Perfil() {
    const { TabPane } = Tabs;
    const [Service, setService] = useState(null);
    const [user, setUser] = useState(null);
    const { id } = useParams();

    const dataApi = async () => {
        const result = await Api.get("user/profile", { id: token.decodeJWT().id });
        setUser(result.data);
    };

    useEffect(() => {
        dataApi();
    })

    useEffect(() => {
        const dataService = async () => {
            const result = await Api.get("service/all/empresa", { id });
            if (result.status === 200) {
                setService(result.data);
            }
        };
        dataService();
    }, []);

    if (user !== null) {

        return (
            <Col lg={{ span: 18, offset: 3 }} className="perfilInfo" >

                <Card lg={{ span: 20, offset: 2 }} style={{ display: "grid", justifyContent: "center", marginTop: "2%", textAlign: "center" }}>

                    <img src="./perfil1.jpg" alt="" />

                    <h1>{user.firstName} {user.secondName} {user.firstSurname} {" "} {user.secondSurname} </h1>
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

                        <TabPane tab="Servicios" key="1" style={{ display: "flex", justifyContent: "center", }}>
                            <Row>

                                {
                                    Service !== null ? (
                                        Service.map((service, index) => {

                                            return (
                                                <Col key={index} lg={{ span: 10, offset: 1 }}>
                                                    <CardProducto data={service} />
                                                </Col>
                                            )
                                        })
                                    ) : <></>
                                }
                            </Row>
                        </TabPane>
                        <TabPane tab="Calificación" key="2" style={{ display: "flex", justifyContent: "center", }}>

                        </TabPane>
                        <TabPane tab="Informacion" key="3" style={{ display: "flex", justifyContent: "center", }}>

                        </TabPane>
                    </Tabs>
                </Card>
            </Col>
        )
    } else {
        return <p>No se cargaron los datos</p>;
    }

}
