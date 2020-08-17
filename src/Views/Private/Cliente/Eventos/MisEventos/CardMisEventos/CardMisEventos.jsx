import React from 'react'
import { Card, Col, Button } from 'antd'
import { PlusOutlined, EditFilled } from '@ant-design/icons'
import "./CardMisEventos.css"
import { Link } from 'react-router-dom'
export default function CardMisEventos() {
    return (
        <Card className="cardEvento" hoverable style={{ backgroundColor: "#F2EFFF", marginTop: "5%" }}>
            <Col lg={{ span: 6, offset: 2 }} >
                <p><strong>Id: </strong> n</p>
                <p><strong>Fecha: </strong> n</p>
                <p><strong>Lugar: </strong> n</p>
                <p><strong>Hora: </strong> n</p>
                <p><strong>Id: </strong> n</p>
            </Col>
            <Col lg={{ span: 4, offset: 18 }}>
                <Link to="/informacionEventos">

                    <Button icon={<EditFilled />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF" }} />
                </Link>
            </Col>
        </Card>
    )
}
