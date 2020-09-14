import React, { useEffect, useState } from 'react'
import CardGestionRolesMain from "./CardGestionRoles/CardGestionRolesMain";
import { Col, Divider, Row } from 'antd';
import Api from "../../../../common/api/api";
import {Modall} from "../../../../components/Modal/Modal"

export default function GestionRolesMain() {

    const [rol, setRol] = useState(false);

    useEffect(() => {
        const apiData = async () => {
            const result = await Api.get("role/all")
            console.log("x>", result)
            if (result.status === 200) {
                setRol(result.data);
            }
        };
        apiData();
    }, []);

    return (

        <Col lg={{ span: 18, offset: 3 }} style={{ margin: "auto", marginTop: "5%" }}>
            <h1 style={{ color: "#9E63FF" }}>Roles</h1>
            <Col lg={{ span: 4, offset: 20 }} >
             

                <Modall/>
            </Col>
            <Divider />

            <Row style={{ margin: "auto", marginTop: "2%" }}>
                {
                    rol !== false ? (
                        rol.map((rol, index) => {
                            return (

                                <CardGestionRolesMain data={rol} key={index} />
                            )
                        })
                    ) : (<></>)
                }
            </Row>
            <Divider />
        </Col>
    )
}
