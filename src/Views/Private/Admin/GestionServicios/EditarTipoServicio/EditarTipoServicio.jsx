import React, { useState, useEffect } from 'react'
import { Col, Form, Input, Upload, message, Button } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import "./EditarTipoServicio.css"
import  moment  from "moment"
import Api from "../../../../../common/api/api"
import { useHistory, useParams } from "react-router-dom";

export default function EditarTipoServicio() {
    const { TextArea } = Input;
    const [loading, setLoading] = useState(false);
    const  [servicio, setServicio] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                setLoading({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const { imageUrl } = loading;


    useEffect(()=>{
        const dataTipeService = async () => {
            const result = await Api.get("service/type", {id});
            console.log("--X", result)
            if (result.status=== 200){
                setServicio(result.data);
            }
        }   
        dataTipeService();

    }, []);
    
    const onFinish = async ({ service }) => {
      
        service.id = servicio.id;
        
        const result = await Api.post("service/types/upload", service);
        
        if (result.status === 201) {
            // la operacion se realizado 201 = OK
            message.success("Se ha actualizado correctamente");
            history.push("/gestionServicios");
        } else {
            message.error("No se ha actualizado ");

        }
        console.log(service);
    };
    if(servicio){

        return (
            <Col lg={{ span: 18, offset: 3 }} xs={{ span: 18, offset: 3 }} style={{ marginTop: "3%" }}>
            <h1>Editar tipo de servicio</h1>
            <hr />
            <Form onFinish={onFinish} style={{ width: "50%", display: "flex", padding: "8%" }}>

                <Col lg={{ span: 24, offset: 2 }} xs={{ span: 10, offset: 2 }}  >
                    <label>Nombre</label>
                    <Form.Item initialValue={servicio.name}  name={["service", "name"]}>
                        <Input />
                    </Form.Item>

                    <label >Descripción</label>
                    <Form.Item initialValue={servicio.description} name={["servicio", "description"]}>
                        <TextArea rows={5} />
                    </Form.Item>
                </Col>
                <Col lg={{ span: 24, offset: 8 }} xs={{ span: 24, offset: 8 }}  >
                    <label >Subir foto</label>
                    <Form.Item initialValue={servicio.imagen} name={["service", "imagen"]}>

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>

                    </Form.Item>


                <Button htmlType="submit" type="primary" style={{marginLeft:"74%"}} >
                    Aplicar
                 </Button>
                </Col>
            </Form>

        </Col>
    )
}else{
    return <h1>no se cargaron datos</h1>
}
}
