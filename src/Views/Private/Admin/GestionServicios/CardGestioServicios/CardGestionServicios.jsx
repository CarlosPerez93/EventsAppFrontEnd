import React from 'react'
import { Card, Button, Col, Row } from 'antd'
import { EditFilled, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function CardGestionServicios() {
    return (
        <Col lg={{ span: 18, offset: 3 }} >
            <h1>Servicios</h1>
            <Col lg={{ span: 5, offset: 20 }}>
                <Link to="/crearTipoServicio">

                    <Button htmlType="submit" type="primary">
                        Nuevo servicio
            </Button>
                </Link>
            </Col>
            <hr />
            <Row>
                <Col lg={{ span: 10 }} style={{ padding: "2%" }}>
                    <Card hoverable style={{ backgroundColor: "#F2EFFF", paddingTop: "0%", textAlign: "center" }}>
                        <Link to="/editarTipoServicio" >
                            <Button
                                icon={<EditFilled />}
                                type="primary"
                                shape="round"
                                size="small"
                                style={
                                    {
                                        backgroundColor: "#63FF95",
                                        border: "none",
                                        position: "absolute",
                                        marginLeft: "195px"
                                    }} />
                        </Link>
                        <img src="./lugares.jpg" alt="img" width="100%" />
                        <h3>Decoracion</h3>
                    </Card>
                </Col>
            </Row>


        </Col>
    )
}
