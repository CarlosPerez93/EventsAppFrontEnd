import React from 'react'
import { Input, Col, Row, Select } from "antd";
import "./HomeCliente.css"
import CardServicio from "./CardServicio/CardServicio"

export default function Home() {
    const { Search } = Input;
    return (

        <Col className="home-Cliente" lg={{ span: 16, offset: 4 }} >
            <Search
                size="large"
                enterButton="Buscar"
                placeholder="Buscar Servicios..."
                onSearch={(value) => console.log(value)}

            />
            <br />
            <br />
     
            <Row justify="end" style={{marginBottom:"2%"}}>
                <Col lg={4}>
                    <Select showSearch style={{width:"100%"}} placeholder="Filtrar" >
                        <Select.Option>Categprias</Select.Option>
                        <Select.Option>Categprias</Select.Option>
                        <Select.Option>Categprias</Select.Option>
                        <Select.Option>Categprias</Select.Option>
                    </Select>
                </Col>
            </Row>

            <Col >
                <CardServicio />
            </Col>
        </Col>
    )
}
