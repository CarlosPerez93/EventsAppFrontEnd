import React from 'react'
import { Col } from 'antd'
import "./SinEvento.css"
export default function SinEventos() {
    return (
        <Col lg={{span:18, offset:3}} className="SinEvento" style={{padding:"3%", display:"grid", justifyContent:"center",}}>
            <h1>Mis Eventos</h1>

            <img src="./notFound.png" alt=""/>

            <h2>No tienes eventos.. =(</h2>
        </Col>
    )
}
