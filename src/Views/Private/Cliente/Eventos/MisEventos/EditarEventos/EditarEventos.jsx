import React from "react";
import {
    Col,
    Form,
    Input,
    Row,
    Button,
    DatePicker,

    Select,
    message,
    Card,
} from "antd";
import  moment  from "moment"
import { useEffect } from "react";
import Api from "../../../../../../common/api/api" ;
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";



export default function EditarEventos() {
    const [types, setTypes] = useState(null);
    const [eventos, setEventos] = useState(null);
    const [date, setDate] = useState(null);
    const history = useHistory();
    const { id } = useParams();
    const onFinish = async ({ evento }) => {
        if(!date){
            evento.startDate = eventos.startDate;
        }else{
            evento.startDate = date;
        }
        evento.id = eventos.id;     
        const result = await Api.post("event/upload", evento);    
        if (result.status === 201) {
            // la operacion se realizado 201 = OK
            message.success("Se ha actualizado correctamente");
            history.push("/misEventos");
        } else {
            message.error("No se ha actualizado ");
        }
        console.log(evento);
    };

    useEffect(() => {
        const dataTypes = async () => {
            const result = await Api.get("event/types"); // llamado a la API
            if (result.status === 200) {
                /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
                setTypes(result.data); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
            }
        };
        dataTypes(); // trae los tipos que se muestran en el select

        const dataEvent = async () => {
            const result = await Api.get("event", { id }); // llamado a la API
            console.log("-",result)
            if (result.status === 200) {
                /// 200 cuando es GET, cuando es POST es -> 201 / 200 = OK
                setEventos(result.data); /// guardo el data en el estado / comprobar si esta en data o en otro objeto
            }
        };
        dataEvent(); // trae los tipos que se muestran en el select
    }, [id]);

    if (eventos ) {

        return (

            <Col
                lg={{ span: 12, offset: 6 }}
                xs={{ span: 20, offset: 2 }}
                style={{ paddingTop: 30 }}
                className="eventos-create"
            >
                <Card>
                    <Col lg={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                        <h4 style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>Registro de evento</h4>
                        <hr />
                        <Form onFinish={onFinish}>
                            <Row>
                                <Col lg={12} xs={{ span: 24 }}> 
                                    <label>Nombre</label>
                                    <Form.Item initialValue={eventos.name} name={["evento", "name"]}>
                                        <Input style={{ width: "90%" }} />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} xs={{ span: 24 }}>
                                    <label>Tipo</label>
                                    <Form.Item initialValue={eventos.typeEvent.id} name={["evento", "type"]}>
                                        <Select
                                            placeholder="Selecciona un tipo"
                                            style={{ width: "100%" }}
                                            
                                            >
                                            {types !== null ? (
                                                types.map((type, index) => {
                                                    return (
                                                        <Select.Option value={type.id} key={index}>
                                                            {type.name}
                                                        </Select.Option>
                                                    );
                                                })
                                            ) : (
                                                    <></>
                                                )}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <label>Descripción</label>
                            <Form.Item initialValue={eventos.description} name={["evento", "description"]}>
                                <Input type="text"  rows={5} />
                            </Form.Item>
                            <Row>
                                <Col lg={8} xs={{ span: 24 }}>
                                    <label>Fecha de inicio</label>
                                    <Form.Item initialValue={moment(eventos.startDate)} name={["evento", "startDate"]}>
                                        <DatePicker
                                            onChange={(date , dateString) => setDate(dateString)}
                                            renderExtraFooter={() => "extra footer"}
                                            placeholder="Seleccione una fecha"
                                            style={{ width: "90%" }}
                                       
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} xs={{ span: 24 }}>
                                    <label>Duración (Horas)</label>
                                    <Form.Item initialValue={eventos.duration} name={["evento", "duration"]}>
                                        <Input type="number"  min={1} style={{ width: "90%" }} />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} xs={{ span: 24 }}>
                                    <label>Participantes</label>
                                    <Form.Item initialValue={eventos.participants} name={["evento", "participants"]}>
                                        <Input type="number"  min={1} style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="end">
                                <Button htmlType="submit" type="primary">
                                    Actualizar
                </Button>
                            </Row>
                        </Form>
                    </Col>
                </Card>
            </Col>
        );
    }else{
        return <h1>no se cargaron datos</h1>
    }
}
