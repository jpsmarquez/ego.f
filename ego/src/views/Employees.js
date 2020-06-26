import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button , Form, Input,Card,Row,Col}from 'antd';
import * as firebase from "firebase/app";


export default function Employees(props) {


  var ref = firebase.database().ref("/usuario");
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [tipo,setType] = useState('');
  const [nombre,setN] = useState('');
  const [error, setError]=useState('');
  const [UsuarioCreado,setUsuarioCreado]=useState('');



  const submit =()=>{
    

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      // Update successful.
      console.log('success')

      setUsuarioCreado("USUARIO CREADO")
      
      
       }, (error) => {
        var errorMessage = error.message;
        setError(errorMessage);
      // An error happened.
      console.log(error)
      }).catch(function(error) {
 
      
     })  
  };

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center' 
    }}>
      
      <Row>
        <Col span={24}>
          <label style={{ textAlign: 'center', fontSize: 100, color: 'white',textAlign: 'center'  }}>EMPLEADO</label>
        </Col>
        <Form style={{textAlign:'center',flex:'auto',justifyContent: 'center'}} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>

                <Input type={'email'}
                placeholder={"correo"}
                style={{textAlign:'center'}}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  size={"default"}
                />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>
                <Input 
                placeholder={"contraseña"}
                style={{textAlign:'center'}}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  size={"default"} />
              </Form.Item>


              <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}} >
                REGISTRAR
              </Button>
              
              {
              UsuarioCreado ? <h1>{UsuarioCreado} </h1> : <h1>{error} </h1>
              }
              
              
              <Link  to="/Home">
             <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              INICIO
             </Button>
              </Link>
         </Form>

      </Row>
    </div>
      );
    };
