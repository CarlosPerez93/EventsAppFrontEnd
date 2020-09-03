import React from 'react'
import { Card, Button, Col} from 'antd'
import { EditFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'




export default function CardGestionServicios({ data }) {



    return (
        
        <Card hoverable style={{ backgroundColor: "#F2EFFF", paddingTop: "0%", textAlign: "center" }}>
            <Col lg={{span:24, offset:0}}>
            <Link to="/editarTipoServicio" >
                <Button
                    icon={<EditFilled />}
                    type="primary"
                    shape="round"
                    size="small"
                    style={
                        {
                            backgroundColor: "#63FF95",
                            border: "none",
                            position: "absolute",
                            marginLeft: "325px"
                        }} />
            </Link>

                <img src={`./${data.name}.jpg`} alt="img" width="100%" />
                <h6 style={{fontSize:"20px"}}>{data.name}</h6>
            </Col>



        </Card>

    )
}
