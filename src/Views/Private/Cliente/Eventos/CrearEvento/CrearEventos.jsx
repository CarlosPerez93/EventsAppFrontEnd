import React, { useState, useEffect } from "react";
import "./mainGEvento.css";
import {
  Input,
  Upload,
  Select,
  Divider,
  Form,
  DatePicker,
  TimePicker,
  InputNumber,
  Space,
  Button,
  message,
} from "antd";
import ImgCrop from "antd-img-crop";
import img1 from "../../../../../Assests/Img/Logo.png";
import api from "../../../../../common/api/api";
import { useHistory } from "react-router-dom";

export default function CrearEventos() {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const { Option } = Select;
  const history = useHistory();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const [dates, setDates] = useState([]);
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };

  function onChange1(value) {
    console.log("changed", value);
  }

  const [tipoEvento, setTipoEvento] = useState(null);
  useEffect(() => {
    const apidata = async () => {
      const resultado = await api.get("event/types");
      setTipoEvento(resultado.data);
      console.log(resultado);
    };
    apidata();
  }, []);

  function PickerWithType({ onChange2 }) {
    return <TimePicker onChange2={onChange2} />;
  }

  const onFinish = async ({ user }) => {
    const resultado = await api.post("event/event-create", user);
    console.log(resultado);
    if (resultado === 201) {
      message.success("se ha creado el evento!");
      history.pushState("/");
    } else {
      message.error("No se registro el evento ");
    }
  };
  const residences = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

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

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const [type, setType] = useState("time");

  return (
    <div>
      <div className="mainGEvento">
        <img className="logoGEvento" src={img1} />
        <Form
          className="subMainEvento"
          {...formItemLayout}
          form={form}
          name="event-create"
          onFinish={onFinish}
          initialValues={{
            residences: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <div className="contEvento">
            <Form.Item name={["user", "user"]}>
              <label>Director del Evento</label>
              <Input
                placeholder="Ingrese Nombre del Director"
                className="AreaText"
              />
            </Form.Item>

            <Form.Item name={["user", "description"]}>
              <label>Descripción</label>
              <TextArea
                rows={4}
                placeholder="Describe tu evento aquí"
                className="AreaText"
              />
            </Form.Item>

            <Form.Item name={["user"]}>
              {/* //importante*} */}
              <label>Imagenes/Videos</label>
              <ImgCrop rotate>
                <Upload
                 className="ImgVideo"
                  action=""
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>
            </Form.Item>
          </div>
          <div className="contEvento">
            <div className="contEventoItem">
              <Form.Item className="contEventoItemSolo">
                <label>N° Participantes</label>
                <div>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    onChange={onChange1}
                    className="contTime"
                  />
                </div>
              </Form.Item>
              <div>
                <div>
                  <label>Tipo de Evento</label>
                </div>
                <Form.Item name={["user", "tipoEvento"]}>
                  <Select
                    placeholder="Seleccione Tipo de evento"
                    className="tEvent"
                  >
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
              </div>
            </div>
            <Divider />

            <Form.Item name={["user", "startDate"]} className="contEventoItem">
              <div>
                <label>Fechas </label>
                <RangePicker
                  disabledDate={disabledDate}
                  onCalendarChange={(value) => {
                    setDates(value);
                  }}
                />
              </div>
            </Form.Item>
            <div className="contEventoItem">
              <Form.Item className="contTime" name={["user", ""]}>
                <label> Hora inicial </label>
                <Space>
                  <PickerWithType
                    type={type}
                    onChange2={(value) => console.log(value)}
                    placeholder="Seleccionar Hora"
                  />
                </Space>
              </Form.Item>
              <Form.Item className="contTime" name={["user", ""]}>
                <label> Hora Final </label>
                <Space placeholder="Seleccionar Hora">
                  <PickerWithType
                    type={type}
                    onChange2={(value) => console.log(value)}
                  />
                </Space>
              </Form.Item>
            </div>
            <Divider />
            <Form.Item {...tailFormItemLayout} >
              <Button type="primary" htmlType="submit" className="But">
                Confirmar Evento
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
