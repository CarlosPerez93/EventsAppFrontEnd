import React from 'react'
import { Col } from 'antd'
import CardMisEventos from "../MisEventos/CardMisEventos/CardMisEventos";
import CardServicios from "../../Home/CardServicio/CardServicio.jsx";
import "./InfEvento.css"
export default function InfEvento() {
    return (
        <Col lg={{ span: 18, offset: 3 }} className="infEvento">
            <h1>Informacion de Eeventos</h1>
            <CardMisEventos />
            <br />
            <h3>Servicios Agregados</h3>
            <CardServicios />
        </Col>
    )
}
