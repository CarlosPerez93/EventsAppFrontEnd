import React, { useState } from 'react'
import { Card, Row, Col, Button, Modal, Select } from 'antd'
import "./CardServicio.css"
import { PlusOutlined } from "@ant-design/icons"
import {Link} from "react-router-dom"
export default function CardServicio() {

    const [visible, setvisible] = useState(false)
    const [evento, setEvento] = useState(null)
    const showModal = () => {
        setvisible({
            visible: true
        });
    };

    const handleRegistro = e => {
        setvisible(false);
        console.log(evento, "aa")
    }

  
    return (
        <Card className="cardServicio" hoverable style={{ backgroundColor: "#F2EFFF" }}>
            <Row>
                <Col lg={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
                    <Link to="/infoEmpresario">
                    <img src="./perfil1.png" alt="as" className="imgPerfilSe" />
                    <h5>Camilo</h5>
                    </Link>
                </Col>
                <Col lg={{ span: 16, offset: 3 }} xs={{ span: 4, offset: 1 }}>
                    <h2>Boot Fotografico</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sequi qui officia eos itaque ab eius iste esse quam aspernatur corrupti,
                       earum assumenda amet beatae facere debitis deleniti! Ullam, modi!</p>


                </Col>
            </Row>
            <Row justify="end">
                <h3>$50.000</h3>
                <Col >

                    <Button onClick={()=>setvisible(true)} icon={<PlusOutlined />} type="primary" shape="round" size="large" style={{ backgroundColor: "#8063FF" }} />
                    <Modal
                        title="Elije el Evento"
                        visible={visible}
                        onCancel={()=> setvisible(false)}
                        footer={[
                            <Button key="back" onClick={handleRegistro} style={{backgroundColor:"#8063FF", color:"white"}} >
                                Agregar Servicio
                            </Button>
                        ]}
                    >
                        <Row justify="start" style={{ marginBottom: "1%"  }}>
                            <Col lg={24} >
                                <Select onChange={(value)=>setEvento(value)} placeholder="Seleccionar Evento" showSearch style={{ width: "100%", display:"flex", justifyContent:"center", marginBottom:"2%" }  } >
                                    <Select.Option value="1">Categprias</Select.Option>
                                    <Select.Option>Categprias</Select.Option>
                                    <Select.Option>Categprias</Select.Option>
                                    <Select.Option>Categprias</Select.Option>
                                </Select>
                            </Col>
                        </Row>

                        <p><strong>Nombre: </strong>Evento de 15 años mi hija</p>
                        <p><strong>Participantes: </strong>10</p>
                        <p><strong>Nombre: </strong>10/20/2020</p>

                    </Modal>
                </Col>
            </Row>
        </Card>
    )
}


