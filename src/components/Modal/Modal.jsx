import React, { useState } from "react";
import { Modal, Button, Input, message, Col, Form } from "antd";
import Api from "../../common/api/api"
import { useHistory } from "react-router-dom";
import "./Modal.css"



export const Modall = () => {
  const [visible, setvisible] = useState(false);
  const history = useHistory();
  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };


  const onFinish = async ({ rol }) => {


    const result = await Api.post("role/create", rol);
    if (result.status === 201) {
      console.log("x>", result)
      // la operacion se realizado 201 = OK
      message.success("Se ha realizado correctamente el registro");
      history.push("/gestionRol");
    } else {
      message.error("No se ha realizado registro");

    }

    console.log(rol);
  };

  return (
    <div>
      <Button htmlType="submit" type="primary" onClick={() => showModal()} >
        Nuevo Rol
      </Button>
      <Modal
        title="Nuevo rol"
        visible={visible}
        footer={[
          <Button
            key="back"
            onClick={handleOk}
            style={{ backgroundColor: "#8063FF", color: "white" }}
          >Ok</Button>
        ]}
      >
        <Form
          onFinish={onFinish}
        >
          <Col lg={{ span: 16, offset: 4 }}>
            <label>Nombre</label>
            <Form.Item name={["rol", "name"]}>
              <Input />
            </Form.Item>

            <Button htmlType="submit" type="primary"  style={{ backgroundColor: "#8063FF", color: "white" }}>
              Registrar
                 </Button>
          </Col>
        </Form>
      </Modal>
    </div>
  );
};
