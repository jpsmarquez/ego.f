import React,{useState} from "react";
import { Form, Input,Col, Row, } from 'antd';
import TextArea from "antd/lib/input/TextArea";


export default function FormasDeCampo(props) {

    const [campo,setCampo] = useState('');
    const { TextArea } = Input;
    return (
       <Col span={6}>

        <TextArea rows={4} onChange={(e) => setCampo(e.target.value)} value={campo} 
        placeholder={"NOMBRE:CONTENT"} />

        </Col>
    )
}


