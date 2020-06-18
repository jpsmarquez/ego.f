import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card, Row, Input, Form } from 'antd';
import * as firebase from "firebase/app";


export default function Employees(props) {

  let user = firebase.auth().currentUser
  let [newemail, setEmail]=useState('');
  let [newpassword, setPassword]=useState('');
  let credential = firebase.auth.EmailAuthProvider.credential(
    user.email, 
    '123456'
);


// Prompt the user to re-provide their sign-in credentials



  const submitpassword = () => {

    
    
    user.updatePassword(newpassword).then(() => {
      // Update successful.
      console.log('success')
      console.log(newpassword)
    }, (error) => {
      // An error happened.
      console.log(error)
    });
   


  };

  const submitemail = () => {

    
    console.log(newemail)
    console.log(user.email)
    console.log(user.password)

    user.reauthenticateWithCredential(credential).then(function() {
      // User re-authenticated.
      user.updateEmail(newemail).then(() => {
        // Update successful.
        console.log('success')
         }, (error) => {
        // An error happened.
        console.log(error)
        });
    }).catch(function(error) {
      // An error happened.
    });

  

  };



  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
    }}>
      <Row>
        <Col span={24}>
          <label style={{ textAlign: 'center', fontSize: 100, color: 'white' }}>PERFIL</label>
        </Col>
        <br />
        <Link to="/Home">
          <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >INICIO</Button>
        </Link>
        <br />
        <Card style={{ width: 300 }} >
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>

            <Input
              type="email"
              placeholder={"correo"}
              style={{ textAlign: 'center' }}
              onChange={(e) => setEmail(e.target.value)}
              value={newemail}
              size={"default"}
            />

          </Form.Item>

          <Button onClick={submitemail }type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CORREO</Button>
          <br />
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>

            <Input
              placeholder={"contraseña"}
              style={{ textAlign: 'center' }}
              onChange={(e) => setPassword(e.target.value)}
              value={newpassword}
              size={"default"}
            />

          </Form.Item>
          <Button onClick={submitpassword}type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CONTRASEÑA</Button>
          <br />
        </Card>




      </Row>



    </div>
  );
};


