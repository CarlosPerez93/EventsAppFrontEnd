import React from 'react'
import { Row, Col, Card } from 'antd'
import CardRolEmpresario from "../GestionRolEmpresario/CardRolEmpresario/CardEmpresarios"
import CardRolServicioEmpresario from "../GestionRolEmpresario/CardRolServiciosEmpresario/CardRolServicioEmpresario"
export default function GestionRoles() {
    return (
        <Col lg={{ span: 18, offset: 3 }} xs={{ span: 18, offset: 3 }} style={{ marginTop: "5%" }}>
            <Row>
                <Col lg={{ span: 11, offset:1 }} style={{ textAlign: "center" }}>
                    <Card style={{marginTop:"3%"}}>
                        <h2>Servicios</h2>
                        <CardRolServicioEmpresario />
                    </Card>
                </Col>
                <Col lg={{ span: 11, offset:1 }} style={{ textAlign: "center" }}>
                <Card style={{marginTop:"3%"}}>
                        <h2>Empresarios</h2>
                        <CardRolEmpresario />
                    </Card>
                </Col>
            </Row>
        </Col>
    )
}
