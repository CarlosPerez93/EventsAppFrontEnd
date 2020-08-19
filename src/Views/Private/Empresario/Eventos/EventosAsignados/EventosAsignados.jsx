import React, { useState, useEffect } from "react";
import "./EventosAsignados.css";
import { Select, Form } from "antd";
import api from "../../../../../common/api/api";
import img1 from "../../../../../Assests/Img/Logo.png";
import { Modall } from "../../../../../components/Modal/Modal";
export default function ServiciosAdquiridos() {

  const [tipoEvento, setTipoEvento] = useState(null);



  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("event/types");
      setTipoEvento(resultado.data);
      console.log(resultado);
    };
    apidata();
  }, []);

  return (
    <div className="mainEventosAdquiridos">
      <img className="logoModal" src={img1} alt ="" />
      <h1>Eventos Asignado</h1>

      <Form.Item name={["user", "tipoEvento"]} className="SelectEventosAsignados">
        <Select placeholder="Seleccione eventos a visualizar" className="tEvent">
          {tipoEvento !== null ? (
            <>
              {tipoEvento.map((type, index) => {
                return (
                  <Select.Option value={type.id} key={index}>
                    {type.name}
                  </Select.Option>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </Select>
      </Form.Item>
      <div className="mainContenedores">
        <div className="contenedorEventosAdquiridos">
          <h2>Sociales</h2>

          <div className="Car">
            <div to="/" className="cardEventos">
              <h3>Bautizo</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Comunión</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>15 años</h3>
              <Modall />
            </div>
          </div>
          <div className="Car">
            <div to="/" className="cardEventos">
              <h3>Cumpleaños</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Confirmación</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Bodas</h3>
              <Modall />
            </div>
          </div>
        </div>

        <div className="contenedorEventosAdquiridos">
          <h2>Empresariales</h2>

          <div className="Car">
            <div to="/" className="cardEventos">
              <h3>Ferias</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Reuniones</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Capacitaciones</h3>
              <Modall />
            </div>
          </div>
          <div className="Car">
            <div to="/" className="cardEventos">
              <h3>Aniversarios</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>Fiestas</h3>
              <Modall />
            </div>
            <div to="/" className="cardEventos">
              <h3>fin de año</h3>
              <Modall />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
