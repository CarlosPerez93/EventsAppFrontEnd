import React from 'react'
import { Col, Row, Card } from 'antd'
import { Link } from 'react-router-dom'

export default function HomeAdmin() {
   
    return (
       <Col lg={{span:18, offset:5}} xs={{span:18,offset:3}}>
           <Row >
               <Col lg={{span:8, offset:1}} style={{marginTop:"15%"}} >
               <Card hoverable style={{ backgroundColor: "#F2EFFF",   display:"grid", padding:"2%",textAlign:"center"}}>
                   <Link to="/gestionServicios">

                   <img src="./avat1.png" alt="img"  />
                   <h2>Empresarios</h2>
                   </Link>
               </Card>
               </Col>
               <Col lg={{span:8, offset:1}} style={{marginTop:"15%"}} >
               <Card hoverable style={{ backgroundColor: "#F2EFFF",   display:"grid", padding:"2%",textAlign:"center"}}>
                  <Link to="/gestionRolCliente" >
                   <img src="./avat2.png" alt="img"/>
                   <h2>Clientes</h2>
                  </Link>
               </Card>
               </Col>
           </Row>
       </Col>
    )
}
