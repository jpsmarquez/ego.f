import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';
import { black } from "ansi-colors";

export default function ResetPassword() {
  const [email, setEmail]=useState('');
  //const [password, setPassword]=useState('');
  const submit = ()=>{

    console.log(email);
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(email).then(()=> {
    // Email sent.
    }).catch((error) => {
     // An error happened.
});
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center',}}>
            <label className="titles" style={{textAlign:'center', fontSize:60 , color: 'white'} }>RECUPERA TU CONTRASEÑA </label>
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
                  size={"large"}
                  type={'email'}
                />
              </Form.Item>
              <Link to={'/Home'}>
              <Button shape={"round"} type="primary" onClick={submit} style={{backgroundColor:'grey'}}>
                ENVIAR
              </Button>
              </Link>

              <Link to={'/Home'}>
              <Button shape={"round"} type="primary"  style={{backgroundColor:'grey'}}>
                LOG-IN
              </Button>
              </Link>

            </Form>
    </div>

  );
};



