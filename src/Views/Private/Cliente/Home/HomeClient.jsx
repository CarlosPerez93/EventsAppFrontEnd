import React from "react";
import { Input, Col, Row, Select, Carousel, Card } from "antd";
import "./HomeCliente.css";
import CardServicio from "./CardServicio/CardServicio";
import Footer from "../../../../components/Footer/Footer"
import { useEffect } from "react";
import api from "../../../../common/api/api";
import { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Home() {
  const { Search } = Input;
  const [services, setServices] = useState(null);
  const [types, setTypes] = useState(null);
  const [typeSelect, setTypeSelect] = useState(null);

  useEffect(() => {
    const apiData = async () => {
      const result = await api.get("service/all");
      if (result.status === 200) {
        setServices(result.data);
      }
      const types = await api.get("service/types");
      if (result.status === 200) {
        setTypes(types.data);
      }
    };
    apiData();
  }, []);

  return (
    <Col className="home-Cliente" lg={{ span: 24, offset: 2 }}>

      {/* <Search
        size="large"
        enterButton="Buscar"
        placeholder="Buscar Servicios..."
        dat
        onSearch={(value) => console.log(value)}
        className="serchC"
      /> */}
      <Carousel>
        <div className="cont">
          <img className="imgs" src="./6.png" alt=" " />
        </div>
      </Carousel>


      <Row style={{ marginBottom: "2%", marginTop: "1%" }}>
        <Col lg={{ span: 6, offset: 15 }}>
          <Select
            showSearch
            style={{ width: "100%", color: "black" }}
            suffixIcon={<ArrowLeftOutlined />}
            onChange={(value) => setTypeSelect(value)}
            placeholder="Filtro de categorias"
          >
            {types !== null ? (
              types.map((type, index) => {
                return (
                  <Select.Option key={index} value={type.id}>
                    {type.name}
                  </Select.Option>
                );
              })
            ) : (
                <></>
              )}
          </Select>
        </Col>
      </Row>



      <Row>

        <Col lg={{ span: 19, offset: 1 }} >

          {services !== null ? (
            services.map((service, index) => {
              return typeSelect !== null &&
                service.typeService.id === typeSelect ? (

                  <CardServicio data={service} />
                ) : typeSelect === null ? (
                  <CardServicio data={service} />
                ) : (
                    <></>
                  );
            })
          ) : (
              <></>
            )}
        </Col>

      </Row>

      <Footer />
    </Col>
  );
}
