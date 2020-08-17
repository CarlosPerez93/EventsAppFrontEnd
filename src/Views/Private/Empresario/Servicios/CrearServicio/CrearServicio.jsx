import React, { useState } from "react";
import "./CrearServicio.css";
import { Form, Input, Select, message, Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import api from "../../../../../common/api/api";
import { useHistory } from "react-router-dom";
import img1 from "../../../../../Assests/Img/Logo.png";
export default function CrearServicio() {
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
  const onFinish = async ({ user }) => {
    const resultado = await api.post("service/createService", user);
    console.log(resultado);
    if (resultado === 201) {
      message.success("se ha agregado el servicio");
      history.pushState("/");
    } else {
      message.error("No se ha registro el servicio ");
    }
  };
  

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

 
  return (
    <div className="contMainCrearServicio">
      <img className="logoModal" src={img1} />
      <h2>Agregar Servicio</h2>
      <div className="contCrearServicio">
        <Form
          className="mainFormCrearservicio"
          {...formItemLayout}
          form={form}
          name="service-create"
          onFinish={onFinish}
          initialValues={{
            residences: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <Form.Item name={["user", "title"]} className="NombreCrearServicio">
            <Input placeholder="Nombre del servicio " />
          </Form.Item>

          <Form.Item name={["user", "description"]} className="DescrptionCrearServicio">
            <TextArea

              placeholder="Describa aqui su nuevo servicio"
            />
          </Form.Item>
          <Form.Item name={["user", "imagen"]} className="imagenCrearServicio">
            <ImgCrop rotate >
              <Upload

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

          <Form.Item {...tailFormItemLayout} className="contBtnCrearServicio">
            <Button type="default" htmlType="submit" className="btnCrearServicio" >
              Agregar Servicio
          </Button>
          </Form.Item>
        </Form>
        <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=" s" className="imgCrearServicio" />
      </div>
    </div>
  );
}
