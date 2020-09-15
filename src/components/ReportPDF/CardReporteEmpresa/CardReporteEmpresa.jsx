import React from 'react'
import { Col, Card, Row } from 'antd'

export default function CardReporteEmpresa({data}) {
    return (
        <Card hoverable lg={{ span: 18, offset: 3 }} >
        <h3>Empresario</h3>
        <Col lg={{ span: 18, offset: 0 }} style={{ fontSize: "20px" }}>
    
            <p>Usuario: {data.username}</p>
            <p>Correo: {data.email}</p>
            <p>Estado: {data.state}</p>

        </Col>
        <h4>Servicios ofrecidos</h4>
        <Row>
           
            <Col lg={{ span: 7, offset: 0 }} style={{ textAlign: "center", justifyContent:"center", alignItems:"center" }}>

               <h4>Nombre</h4>
               
            </Col>
           
            <Col lg={{ span: 12, offset: 0 }} style={{ textAlign: "center", justifyContent:"center", alignItems:"center" }}>
               <h4>Precio</h4>
            </Col>
    
        </Row>

        {
            data !== null ? (
                data.services.map((reportE, index1) => {
                    return (
                        <Row key={index1}>
                            
                            <Col lg={{ span:12, offset: 0 }} style={{ textAlign: "center", justifyContent:"center", alignItems:"center" }}>

                                <p>{reportE.title}</p>
                            </Col>
                            
                            <Col lg={{ span: 12, offset: 0 }} style={{ textAlign: "center", justifyContent:"center", alignItems:"center" }}>

                                <p>$ {reportE.prise}</p>
                            </Col>
                           
                        </Row>
                    )
                })
            ) : (<></>)
        }


    </Card>
    )
}
