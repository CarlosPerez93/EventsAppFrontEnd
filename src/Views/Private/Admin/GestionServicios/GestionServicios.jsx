import React from 'react'
import CardGestionServicios from "./CardGestioServicios/CardGestionServicios"
import { Row, Col } from 'antd'

export default function GestionServicios() {
    return (
        <Col lg={{span:20,offset:2}} style={{padding:"5%"}}>
            <Row>
                <CardGestionServicios/>
            </Row>
        </Col>
    )
}
