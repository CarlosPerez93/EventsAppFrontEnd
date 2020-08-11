import React, { useState } from "react";
import { Modal, Button, Rate } from "antd";
import "./Modal.css"


export const Modall = () => {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  return (
    <div>
      <Button type="default " onClick={() => showModal()} className="botonModal">
        Ver detalles
      </Button>
      <Modal
        title="name event"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="contenedorModal">
        
        <p className="pModal">Estado evento F || P</p>
        <p className="pModal">Fecha</p>
        <p className="pModal">Hora</p>
        <p className="pModal">Lugar</p>

        <Rate className="pModal" allowClear defaultValue={2.5}/>
        </div>
      </Modal>
    </div>
  );
};
