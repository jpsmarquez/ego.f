import React,{useState} from "react";
import { Form, Input,Col, Row, } from 'antd';
import TextArea from "antd/lib/input/TextArea";


export default function FormasDeCampo({llenarcampos, value}) {

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


