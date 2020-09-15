import React from 'react'
import { Col, Card, Row } from 'antd'



export default function CardReporteClientes({ data }) {


    return (
        <Card hoverable lg={{ span: 18, offset: 3 }} >
            <h3>Clientes</h3>
            <Col lg={{ span: 18, offset: 0 }} style={{ fontSize: "20px" }}>

                <p>Usuario: {data.username}</p>
                <p>Correo: {data.email}</p>
                <p>Estado: {data.state}</p>

            </Col>
            <h4>Mis eventos</h4>
            <Row>

                <Col lg={{ span: 8, offset: 0 }} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>

                    <h4>Nombre</h4>

                </Col>

                <Col lg={{ span: 8, offset: 0 }} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <h4>Fecha inicio</h4>
                </Col>
                <Col lg={{ span: 6, offset: 0 }} style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                    <h4>Duración</h4>
                </Col>
            </Row>

            {
                data !== null ? (
                    data.events.map((reportE, index1) => {
                        return (
                            <Row key={index1}>

                                <Col lg={{ span: 8, offset: 0 }} style={{ textAlign: "justifity", justifyContent: "center", alignItems: "center" }}>

                                    <p>{reportE.name}</p>
                                </Col>

                                <Col lg={{ span: 8, offset: 2 }} style={{ textAlign: "justifity", justifyContent: "center", alignItems: "center" }}>

                                    <p>{reportE.startDate} </p>
                                </Col>
                                <Col lg={{ span: 5, offset: 1 }} style={{ textAlign: "justifity", justifyContent: "center", alignItems: "center" }}>
                                    <p>{reportE.duration}</p>
                                </Col>
                                <br />
                            </Row>
                        )
                    })
                ) : (<></>)
            }

          
        </Card>

    )
  
}
