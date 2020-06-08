import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';
import { black } from "ansi-colors";


const A = {type:"A"};
const E = {type:"E"};


export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const submit = ()=>{
    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       var errorMessage = error.message;
       console.log(errorMessage)
       });
    
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
            <label style={{textAlign:'center', fontSize:150 , color: 'white'} }>GRUPO EGO </label>
            <br/>
            <Form style={{textAlign:'center'}} >
              <Form.Item
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}>
                
                <Input
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
                <Input type="password"
                placeholder={"contraseña"}
                style={{textAlign:'center'}}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  size={"default"}
                  
                />
              </Form.Item>
              <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}}>
                Iniciar Sesion 
              </Button>
              <br/>
              <Link  to="/FPass">
             <Button type="primary" shape="circle" >
              FORGOT PASSWORD?
             </Button>
             </Link>
              </Form>

              


    </div>

  );
};
