import React, {useState, useEffect} from 'react'
import { Col } from 'antd'
import CardMisEventos from "../MisEventos/CardMisEventos/CardMisEventos";
import CardServicios from "../../Home/CardServicio/CardServicio.jsx";
import Api from "./../../../../../common/api/api";
import "./InfEvento.css"
import { useParams } from 'react-router-dom';

export default function InfEvento() {
    const [evento, setEvent] = useState(null);
    const [servicio, setServicio] = useState(null);
    const {id} = useParams();


    useEffect(() => {
        console.log("-->"+id)
        const dataEvent = async () => {
          const result = await Api.get("event", {id} ); // llamado a la API
          if (result.status === 200) {
              console.log(result)
            /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
            setEvent(result.data); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
          }
        };
        dataEvent(); // trae los tipos que se muestran en el select

        console.log("-->"+id)
        const dataServicio = async () => {
          const result = await Api.get("eventService/all", {idEvent:id} ); // llamado a la API
          console.log(result.data.result)
          if (result.status === 200) {
            /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
            setServicio(result.data.result); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
            
          }
        };
        dataServicio(); // trae los tipos que se muestran en el select
        console.log("X>", servicio)
      }, []);


   

    return (
        <Col lg={{ span: 18, offset: 3 }} className="infEvento">
            <h1>Informacion de Eeventos</h1>
            {
                evento !== null ? (<CardMisEventos data={evento}/>) : <></>
            }
             
            <br />
            <h3>Servicios Agregados</h3>
            {
              servicio && (
                servicio.map((value)=>{
                   return <CardServicios id={value.id} state={true} data={value.service}/>
                }))
            }

        </Col>
    )
}
