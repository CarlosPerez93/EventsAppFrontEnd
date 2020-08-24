import React from 'react'
import { Card, Col, Button, Row } from 'antd'
import { EditFilled } from '@ant-design/icons'
import {Link} from "react-router-dom"
import "./CardMisEventos.css"

import { useHistory } from "react-router-dom";

export default function CardMisEventos({ data }) {
    const history = useHistory();
    return (
        <Card  className="cardEvento" hoverable style={{ backgroundColor: "#F2EFFF", marginTop: "5%" }}>
            <Col lg={{ span: 24, offset: 2 }} style={{ textAlign: "left", justifyContent: "flex-start" }}>
                <Row justify="center">
                    <img
                    onClick={() => history.push(`/informacionEventos/${data.id}`)}
                    alt="" src="./calendario.png" style={{ width: "60%", marginBottom: "10px" }} />
                </Row>
            
                <p><strong>Id : </strong>{data.id}</p>
                <p><strong>Fecha inicio : </strong>{data.startDate}</p>
                <p><strong>Asistentes :  </strong> {data.participants} personas</p>
                <p><strong>Duración :  </strong> {data.duration} Horas</p>
            </Col>
            <Col lg={{ span: 4, offset: 18 }}>
               
                    <Link to={`/EditarEvento/${data.id}`}>
                    <Button  icon={<EditFilled />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF", border: "none" }} />
                    </Link>
         
            </Col>
        </Card>
    )
}
