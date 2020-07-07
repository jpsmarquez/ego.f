import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Divider, Card , message, Popconfirm} from 'antd';
import Formasdecampo from '../containers/formasdecampo';
import { Link } from "react-router-dom";
import Column from "antd/lib/table/Column";
import * as firebase from 'firebase';
import { Aplicacion } from '../config/firebaseconfig';

export default function NewNte(props) {


    const [nota, setN] = useState('');
    const [index, setIndex] = useState(0);
    const [arrayofdb, setArrayofdb] = useState([])



    const submit = () => {
        firebase.database().ref('notas').push({
            nota: nota
        })
    };


    const updateC = () => {
        firebase.database().ref(`/inversion/${props.match.params.id}/notas`).set(arrayofdb.notas)
        message.success('CAMPO EDITADO');
      };
    
      function cancelc() {
        message.error('NO SE EFECTUO CAMBIOS');
      }


      function updateinput(e){
 
      }
    

    return (
        <Row>
            <Col span={24}>
                <Form style={{ textAlign: 'center' }} >
                    <Row>


                        <Col span={6} style={{ marginVertical: 10 }}>

                            <Input style={{width:350, height: 'fit-content' }}
                                rows={4}
                                onChange={(e) =>
                                    setN(e.target.value)}
                                placeholder={"NUEVA NOTA"}
                                autoSize true
                            />

                        </Col>

                    </Row>
                </Form>
            </Col>
            <br />
            <br />
            <Col span={24}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>

                    
                        <Button type="primary" shape="round" onClick={submit} style={{ backgroundColor: 'grey' }}>
                            GUARDAR
                         </Button>
                  
                    <br />
                    <Link to="/Home">
                        <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
                            INICIO
            </Button>
                    </Link>


                    <br />
                    <Input.TextArea
                        style={{ textAlign: 'center' }}
                        value={`${arrayofdb.campos}`}
                        onChange={(e) => updateinput(e)}
                        autoSize true
                    />
                    <br />
                    <br />
                    <Popconfirm
                        title="¿ESTAS SEGURO?"
                        onConfirm={updateC}
                        onCancel={cancelc}
                        okText="SI"
                        cancelText="NO">
                        <Button type="primary" shape="round" size={"small"} style={{ backgroundColor: 'grey' }}>EDITAR CAMPO </Button>
                    </Popconfirm>

                    <br />


                </div>



            </Col>
        </Row>

    )
}