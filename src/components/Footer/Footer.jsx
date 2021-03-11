import { Col, Row } from 'antd'
import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <Col lg={{ span: 23}} className="footer">
        <h2>Re-Best</h2>
        <Row >
          <Col lg={{ span: 10, offset: 2 }} className="card-footer">
            <h3>Productos</h3>
            <h4>Servicios</h4>
            <h4>Eventos</h4>
            <h4>Empresarios</h4>
          </Col>
          <Col lg={{ span: 10, offset: 1 }} className="card-footer">
            <h3>Contactenos</h3>
            <h4>Facebook</h4>
            <h4>Twiter</h4>
            <h4>Istagram</h4>
          </Col>

        </Row>
          <h2>© 2020 Re-best. Todos los derechos reservados</h2>
      </Col>
    )
}
