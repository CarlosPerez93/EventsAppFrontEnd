import React from 'react'
import { Card, Col } from 'antd'

export default function CardGestionRolesMain({ data }) {
    return (
        <Col lg={{ span: 8, offset: 3 }} style={{ marginTop:"2%"}}>
            <Card hoverable >
                <Col lg={{ span: 10, offset: 0 }} style={{ margin: "auto" }} >
                    <img src="./perfil1.png" alt="img" width="100%" />
                </Col>
                <h1 >{data.name}</h1>
            </Card>
        </Col>
    )
}
