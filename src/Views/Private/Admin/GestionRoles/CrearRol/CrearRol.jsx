import React from 'react'
import { Col, Form,Input, message } from 'antd'
import { useHistory } from "react-router-dom";
import Api from "../../../../../common/api/api"

export default function CrearRol() {

    const history = useHistory();


    const onFinish = async ({ rol }) => {


        const result = await Api.post("role/create", rol);
        if (result.status === 201) {
            // la operacion se realizado 201 = OK
            message.success("Se ha realizado correctamente el registro");
            history.push("/gestionRoles");
        } else {
            message.success("No se ha realizado registro");

        }

        console.log(rol);
    };

    return (
        <Col lg={{ span: 18, offset: 3 }} style={{ margin: "auto", marginTop: "5%" }}>

            <h1 style={{ color: "#9E63FF" }}>Nuevo Rol</h1>
            <Form
                onFinish={onFinish}
                style={{ width: "50%", display: "flex", padding: "8%" }}
            >
                <label>Nombre</label>
                <Form.Item name={["rol", "name"]}>
                    <Input />
                </Form.Item>
            </Form>
        </Col>
    )
}
