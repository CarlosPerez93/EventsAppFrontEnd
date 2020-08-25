import React from 'react'
import { Card, Col, Row, Button } from 'antd'
import { CheckOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons'

export default function CardRolServicioEmpresario(data) {
    return (
      
            <Card hoverable>
                <Row>
                    <Col lg={{ span: 5, offset: 0 }} style={{ margin: "auto" }} >
                        <img src="./perfil1.png" alt="img" width="100%" />
                    </Col>
                    <Col lg={{ span: 10, offset: 2 }} style={{ margin: "auto" }}>
                        <p> {data.name} </p>
                        <p>Buffet </p>
                    </Col>
                    <Col lg={{ span: 5, offset: 0 }} style={{ margin: "auto" }}>
                        <Row>
                            <Col lg={{ span: 4, offset: 0 }}>
                                <Button
                                    icon={< CheckOutlined />}
                                    type="primary"
                                    shape="circle"
                                    size="small"
                                    style={{ backgroundColor: "green", border: "none" }}

                                />
                            </Col>

                            <Col lg={{ span: 4, offset: 5 }}>

                                <Button
                                    icon={<CloseOutlined />}
                                    type="primary"
                                    shape="circle"
                                    size="small"
                                    style={{ backgroundColor: "red", border: "none" }}
                                />
                            </Col>
                            <Col lg={{ span: 2, offset: 5 }}>

                                <Button
                                    icon={<EditOutlined />}
                                    type="primary"
                                    shape="circle"
                                    size="small"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
     
    )
}
