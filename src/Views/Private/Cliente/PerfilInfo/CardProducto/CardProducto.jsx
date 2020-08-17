import React, { useState } from 'react'
import { Card, Row, Col, Button, Modal, Select } from 'antd'
import "./CardProducto.css"
import { PlusOutlined } from "@ant-design/icons"
import {Link} from "react-router-dom"
export default function CardProducto() {

 
    return (
        <Card className="cardProducto" hoverable style={{ width:"40%", borderRadius:"5px", backgroundColor:"#F2EFFF"}}>
   
                
                <Col lg={{ span: 20, offset: 2 }} xs={{ span: 4, offset: 1 }} style={{textAlign:"left"}}>
                    <label >Nombre:</label>
                    <h3>Boot Fotografico</h3>
                    <label >Descripción:</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sequi </p>
                </Col>
         
            <Row  style={{display:"flex", marginTop:"10%", justifyContent:"space-evenly"  }} >
                <h3>$50.000</h3>
                <Col lg={{ span: 3, offset: 0 }}  >
                    <Button  icon={<PlusOutlined />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF", border:"transparent" }} />
                   
                </Col>
            </Row>
        </Card>
    )
}


