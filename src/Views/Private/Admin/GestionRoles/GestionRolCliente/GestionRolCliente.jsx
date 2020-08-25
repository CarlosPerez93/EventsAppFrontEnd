import React from 'react'
import CardRolCliente from "./CardRolCliente/CardRolCliente"
import { Card, Col } from 'antd'

export default function GestionRolCliente() {
    return (
        <Col lg={{span:14,offset:5}} style={{marginTop:"5%"}}>
            <Card >
                <h2>Clientes</h2>
                <CardRolCliente/>
            </Card>
        </Col>

    )
}
