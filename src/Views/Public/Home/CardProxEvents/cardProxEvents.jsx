import { Card, Col, Row } from 'antd';
import React from 'react'
import "./cardProxEvents.css"

export default function CardProxEvents({ data, state, id }) {

    return (
        <Col lg={{ span: 11, offset:1 }} >
            <Card
                className="card-main"
                hoverable

            >

                    <Col>
                        <img src="" alt="img" style={{width:100}} />
                    </Col>
                    <Col lg={{ span: 24, offset:0 }} >
                        <h2>
                            {"Evento:"} {" "} {data.typeEvent.name}
                        </h2>

                        <h6>
                            {'Nombre  : '} {data.name}{""}
                        </h6>
                        <h6>
                            {'descripcion  : '} {data.description}{" "}
                        </h6>
                    </Col>

   
            </Card>
        </Col>
    )
}
