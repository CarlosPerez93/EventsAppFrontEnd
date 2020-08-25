import React from 'react'
import { Card, Col, Row, Button } from 'antd'
import { NumberOutlined } from '@ant-design/icons'

export default function CardRolServicioEmpresario() {
    return (
        <Col lg={{ span: 12, offset: 0 }} xs={{ span: 8, offset: 3 }} >
            <Card hoverable style={{ textAlign: "center", marginTop:"15%" }}>
                <img src="./lugares.jpg" alt="img" width="100%" />
                <br /><br />
                <Row>
                    <Col lg={{ span: 15, offset: 0 }}>
                        <h3>Decoración</h3>
                    </Col>
                    <Col>
                        <Button
                            icon={<NumberOutlined />}
                            type="primary"
                            shape="circle"
                            size="small" 
                            />
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
