import React,{useEffect,useState} from "react";
import {Link,Redirect} from "react-router-dom";
import * as firebase from 'firebase';
import {Aplicacion} from '../config/firebaseconfig';
import { Button , Form, Input, Card} from 'antd';


export default function Login() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [tipo,setType] = useState('');
  const [nombre,setN] = useState('');


  const submit =()=>{
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       var errorMessage = error.message;
       console.log(errorMessage)
      
      
     });

     firebase.database().ref('usuario').push({
        tipo:"A",
        email:email,
        password:password
      })

    
  };
  return (
    <div style={{flexDirection:'column',display:'flex',justifyContent:'center', alignItems:'center', height: '-webkit-fill-available'}}>
            <label style={{textAlign:'center', fontSize:150 , color: 'white'} }>GRUPO EGO </label>
            <br/>
            <Form style={{textAlign:'center',flex:'auto'}} >
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

              <Link to={'/'}>
              <Button type="primary" onClick={submit} style={{backgroundColor:'grey'}} >
                REGISTER
              </Button>
              </Link>
              <br/>
              <Link  to="/Home">
             <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              HOME
             </Button>
              </Link>
              </Form>

    </div>

  );
};

