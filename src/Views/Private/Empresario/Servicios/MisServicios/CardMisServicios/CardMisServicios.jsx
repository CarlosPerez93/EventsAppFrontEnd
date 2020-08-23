import React from 'react'
import { Card, Col, Button, Row } from 'antd'
import { EditFilled } from '@ant-design/icons'
import "./CardMisServicios.css"
import { Link } from 'react-router-dom'
export default function CardMisServicios({ data }) {
    return (
        <Card className="cardServicio" hoverable style={{ backgroundColor: "#F2EFFF", marginTop: "5%" }}>
            <Col lg={{ span: 24, offset: 0 }} style= {{ marginBottom:"35%",height:250, textAlign: "left", justifyContent: "flex-start" }}>
                <Row justify="center">
                    <img alt="" src="./calendario.png" style={{ width: "60%", marginBottom: "10px" }} />
                </Row>
       
                <p><strong>Servicio : </strong>{data.title}</p>
                <br/>
                <p><strong>Descripción :  </strong> {data.description} </p>
                <br/>
                <p><strong>Presio :  </strong> $ {data.prise} </p>
   
            </Col>
            <Col lg={{ span: 6, offset: 18 }}>
                <Link to="/eventosAsignados">

                    <Button icon={<EditFilled />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF", border: "none" }} />
                </Link>
            </Col>
        </Card>
    )
}
