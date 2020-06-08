import React,{useState} from "react";
import { Button , Form, Input, Row, Col, Divider} from 'antd';
import Formasdecampo from '../containers/formasdecampo';
import {Link} from "react-router-dom";
import Column from "antd/lib/table/Column";

export default function HomeE(props) {
    const [formularios,setFormularios] = useState([<Formasdecampo/>]);
    const [desc,setD] = useState('');
    const [tipo,setType] = useState('');
    const [titulo,setT] = useState('');
    const submit= ()=>{return false;};
    const addform= ()=>{
        let f = [...formularios];
        f.push(<Formasdecampo/>);
        setFormularios(f)
        };

    return (
        <Row >
        <Col span={24}>
        <label style={{textAlign:'center', fontSize:100 , color: 'white'} }>NEW INVERSION</label>
        </Col>

        <Col span={24}>
        <Form style={{textAlign:'center'}} >
        <Row>
          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            
            <Input
            placeholder={"titulo"}
            style={{textAlign:'center'}}
              onChange={(e) => setT(e.target.value)}
              value={titulo}
              size={"default"}
            />
          </Form.Item>
          </Col>

          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            <Input
            placeholder={"tipo"}
            style={{textAlign:'center'}}
              onChange={(e) => setType(e.target.value)}
              value={tipo}
              size={"default"}
            />
          </Form.Item> 
          </Col>

          <Col span={6} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            <Input
            placeholder={"descripcion"}
            style={{textAlign:'center'}}
              onChange={(e) => setD(e.target.value)}
              value={desc}
              size={"default"}
            />
          </Form.Item>            
          </Col>
          {
            formularios.map((item,index)=>{
                return item;
            })
          }

        </Row>
        </Form>
        </Col>
        
        <Col span={24}>
        <button onClick={addform}>+</button>

        <Link  to="/Inversions">
        <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}}>
            SUBMIT
          </Button>
        </Link>

        <Link  to="/Home">
        <Button type="primary" shape="circle" >
              HOME
        </Button>
        </Link>

        </Col>
        </Row>

    )
}
//arreglar nav bar