import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Input, Divider, InputNumber, Select, DatePicker, TimePicker, Form, message } from 'antd'
import "./mainGEvento.css"
import { useHistory } from 'react-router-dom';
import api from "../../../../../common/api/api";

export default function CrearEventos() {
  const { TextArea } = Input;
  const format = 'HH:mm';
  const [form] = Form.useForm();
  const history = useHistory();
  const [event, setEvent] = useState(null);
  function onChange(value) {
    console.log('changed', value);
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("event/types");
      setEvent(resultado.data);
    }
    apidata();
  }, [])

  const onFinish = async ({ user }) => {
    const respu = await api.post("event/create-event", user);
    console.log(respu);
    if (respu.status === 201) {
      message.success("Se ha registrado correctamente el evento");
      history.push("gestionarEvento");
    } else {
      message.error("No se logro registrar correctamente");
    }
  };

  return (
    <Col lg={{ span: 16, offset: 4 }} style={{ marginTop: "3%" }} className="CrearEventoCliente">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError>
        <h1>Nuevo Evento</h1>
        <Row style={{marginTop:"5%"}}>
          <Col lg={{ span: 12, offset: 0 }} xs={{ span: 10, offset: 1 }}>
            <label ><strong>Nombre</strong></label>
            <Form.Item name={["event", "name"]}>
              <Input lg={{ span: 15, offset: 2 }} />
            </Form.Item>
            <Divider />
            <label ><strong>Descripción</strong></label>
            <Form.Item name={["event", "description"]}>
              <TextArea rows={8} />
            </Form.Item>
          </Col>
          <Col lg={{ span: 12, offset: 0 }} xs={{ span: 10, offset: 1 }}>
            <Row>
              <Col lg={{ span: 12, offset: 0 }} xs={{ span: 10, offset: 1 }}>
                <label ><strong>N° Participantes</strong> </label>
                <Form.Item name={["event", "participants"]}>
                  <InputNumber min={0} max={50} defaultValue={2} onChange={onChange} style={{ width: "85%" }} />
                </Form.Item>
              </Col>
              <Col lg={{ span: 12, offset: 0 }} xs={{ span: 10, offset: 1 }}>
                <label ><strong>Tipo de Evento</strong> </label>
                <Form.Item name={["event", "typeEvent"]}>
                  <Select style={{ width: "100%" }} >
                    {
                      event !== null ? (
                        <>
                          {
                            event.map((event, index) => {
                                return (
                                  <Select.Option value={event.id} key={index}>
                                    {event.name}
                                  </Select.Option>
                                )
                
                            })
                          }
                        </>
                      )
                        : <></>
                    }
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Col lg={{ span: 24, offset: 0 }} style={{ marginTop: "5%" }}>
              <label><strong>Duración del Evento</strong></label>
              <Divider />
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <label ><strong>Fecha de Inicio</strong></label>
                  <Form.Item name={["event", "startDate"]}>
                    <DatePicker  onChange={onChangeDate} />
                  </Form.Item>
                </Col>
                <Col lg={{ span: 12, offset: 0 }}>
                  <label ><strong>Fecha Final</strong></label>
                  <Form.Item name={["event", "endtDate"]}>
                    <DatePicker onChange={onChangeDate} />
                  </Form.Item>

                </Col>
              </Row>
              <Row style={{ marginTop: "5%" }}>
                <Col lg={{ span: 12, offset: 0 }}>
                  <label ><strong>Hora de Inicio</strong></label>
                  <Form.Item name={["event", "startHour"]}>
                    <TimePicker format={format} style={{width:"100%"}} />
                  </Form.Item>
                </Col>
                <Col lg={{ span: 12, offset: 0 }}>
                  <label ><strong>Hora Final</strong></label>
                  <Form.Item name={["event", "endDate"]}>
                    <TimePicker format={format} style={{width:"100%"}}/>
                  </Form.Item>

                </Col>
              </Row>

            </Col>

          </Col>

        </Row>
        <Col lg={{ span: 20, offset: 1 }} >

          <Form.Item {...tailFormItemLayout} style={{ display: "flex", marginLeft: "50%" }}>
            <Button type="default" htmlType="submit" style={{ width: "90%", backgroundColor: "#5433e9", marginTop: "5%", marginRight: "20%",color:"white" }}>
              Confirmar Eveneto
         </Button>
          </Form.Item>
        </Col>
      </Form>
    </Col>
  )
}
