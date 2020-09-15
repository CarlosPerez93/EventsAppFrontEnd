import React, { useEffect, useState } from 'react'
import CardGestionServicios from "./CardGestioServicios/CardGestionServicios"
import { Row, Col, Button } from 'antd'
import Api from "../../../../common/api/api"
import { Link } from 'react-router-dom'
export default function GestionServicios() {

    const [services, setServices] = useState(null);

    useEffect(() => {
        const apiData = async () => {
            const result = await Api.get("service/types")
            console.log("x>", result)
            if (result.status === 200) {
                setServices(result.data);
            }
        };
        apiData();
    }, [setServices]);
    return (
        <Col lg={{ span: 20, offset: 2 }} style={{ padding: "5%" }}>
            <h1 style={{color:"#9E63FF"}}>Tipo de servicios</h1>
            <Col lg={{ span: 5, offset: 20 }}>
                <Link to="/crearTipoServicio">

                    <Button htmlType="submit" type="primary">
                        Nuevo tipo
                     </Button>
                </Link>
            </Col>
            <hr />

            <Row>
               
                    {
                        services !== null ? (
                            services.map((service, index) => {
                                return (
                                    <Col lg={{span:10,offset:1}} key={index}>
                                    <CardGestionServicios data={service}  />
                                    </Col>

                                )
                            })
                        ) : (<></>
                            )}

              
            </Row>
        </Col>
    )
}
