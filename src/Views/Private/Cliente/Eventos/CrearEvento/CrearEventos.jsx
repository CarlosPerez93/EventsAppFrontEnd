import React, { useState }from "react";
import "./mainGEvento.css";
import { Input,Upload  } from "antd";
import ImgCrop from 'antd-img-crop';

export default function CrearEventos() {

    const { TextArea } = Input;
    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]);

      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    
      const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
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
    
  return (
    <div>
      <div className="mainGEvento">
        <div className="contEvento">
          <Input placeholder="Ingrese Nombre del evento" />
          <TextArea rows={4} />

          <ImgCrop rotate>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
        </div>
        <div className="contEvento"></div>

      </div>
    </div> 
  );
}
