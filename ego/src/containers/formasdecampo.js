import React,{useState} from "react";
import { Form, Input,Col, Row, } from 'antd';



export default function FormasDeCampo({llenarcampos}) {

    const { TextArea } = Input;
    
    return (
       <Col span={6} style={{marginVertical:10}}>

        <TextArea style={{height:'fit-content'}} 
        rows={4}
        onChange={(e) => 
        llenarcampos(e.target.value)} 
        placeholder={"CONTENIDO DE CAMPO"} />

        </Col>
    )
}


