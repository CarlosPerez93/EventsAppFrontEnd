import React from 'react'
import { Col, Button, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import "./MisEventos.css"
import CardMisEventos from './CardMisEventos/CardMisEventos'
import { Link } from 'react-router-dom'
export default function MisEventos() {
    return (
        <Col lg={{ span: 18, offset: 3 }} xs={{ span: 18, offset: 3 }} className="MisEventos" >
            <h1>Mis Eventos</h1>
            <Col lg={{ span: 4, offset: 18 }} >
                <Link to="/gestionarEvento">
                    <Button icon={<PlusOutlined />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF" }} >
                        Nuevo Evento
                    </Button>
                </Link>
            </Col>


            <Col lg={{ span: 6, offset: 2 }} xs={{ span: 6, offset: 2 }}>
                <CardMisEventos />
            </Col>

        </Col>
    )
}
