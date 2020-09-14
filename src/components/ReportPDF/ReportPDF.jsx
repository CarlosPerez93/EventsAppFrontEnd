import React, { useState, useEffect } from 'react'
import CardReporteClientes from "./CardReporteClientes/CardReporteClientes"
import CardReporteEmpresas from "./CardReporteEmpresa/CardReporteEmpresa"

import { Col } from 'antd'
import Api from "../../common/api/api"

export default function ReportPDF() {
    const [reporteClientes, setReporteClientes] = useState(null)
    const [reporteEmpresa, setReporteEmpresa] = useState(null)

    useEffect(() => {
        const apiData = async () =>{
            const result = await Api.get("report/get-clientes")
            console.log("-->", result)
            if(result.status === 200){
                setReporteClientes(result.data)
            }
        }

        
        const apiData1 = async () =>{
            const result = await Api.get("report/get-empresas")
            console.log("-->", result)
            if(result.status === 200){
                setReporteEmpresa(result.data)
            }
        }


        apiData();
        apiData1();
    }, [setReporteClientes , setReporteEmpresa])



    return (
        <Col lg={{span:18}}>
             <h1 style={{color:"#9E63FF", marginTop:"5%"}} >Reportes </h1>
                <Col>
                 {
                     reporteClientes !== null ? (
                         reporteClientes.map((reportC, index)=>{
                             return(
                                 <Col >
                                    <CardReporteClientes data={reportC} key={index} />
                                   <br/>
                                 </Col>
                             )
                         })
                     ) : (<></>)
                 },
                <br/>
                 {
                     reporteEmpresa!== null ? (
                         reporteEmpresa.map((reportE, index1)=>{
                             return(
                                 <Col>
                                    <CardReporteEmpresas data={reportE} key={index1} />
                                    <br/>
                                 </Col>
                             )
                         })
                     ) : (<></>)
                 }  


                </Col>
        </Col>
    )
}
