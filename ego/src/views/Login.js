import React,{useEffect,useState} from "react";
import {Link,Redirect} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';
import { black } from "ansi-colors";


export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error, setError]=useState(false);

    const submit =()=>{
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       var errorMessage = error.message;
       setError(errorMessage)
       console.log(errorMessage)
       console.log(email)
    });
   
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
           
            <label style={{textAlign:'center', fontSize:150 , color: 'white'} }> APP</label>
            <br/>
            <Form style={{textAlign:'center',flex:'auto'}} >
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
              <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}} >
                ENTRAR
              </Button>
              <br/>
              <Link  to="/FPass">
              <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
               ¿OLVIDASTE LA CONTRASEÑA?
              </Button>
              </Link>
              <br/>
              <Link  to="/Register">
              <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
               REGISTRO
              </Button>
              </Link>

              {
             error !== false ? <h1>{error}</h1> : null
              }

              </Form>

    </div>

  );
};
