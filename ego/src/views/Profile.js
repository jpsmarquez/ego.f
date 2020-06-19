import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card, Row, Input, Form, Popconfirm, message } from 'antd';
import * as firebase from "firebase/app";


export default function Employees(props) {

  let user = firebase.auth().currentUser
  let [newemail, setEmail] = useState('');
  let [newpassword, setPassword] = useState('');
  console.log(user.password)
  let credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    '123456'
  );


  // Prompt the user to re-provide their sign-in credentials

const submitemail = () => {


      console.log(newemail)
      console.log(user.email)
      console.log(user.password)

      user.reauthenticateWithCredential(credential).then(function () {
        // User re-authenticated.
        user.updateEmail(newemail).then(() => {
          // Update successful.
          console.log('success')
          message.success('CORREO CAMBIADO');
        }, (error) => {
          // An error happened.
          console.log(error)
        });
      }).catch(function (error) {
        // An error happened.
      });
    };
  



  function cancelE(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  const submitpassword = () => {

      user.reauthenticateWithCredential(credential).then(function () {
        // User re-authenticated.
        user.updatePassword(newpassword).then(() => {
          // Update successful.
          console.log('success')
          message.success('CONTRASEÑA CAMBIADA');
        }, (error) => {
          // An error happened.
          console.log(error)
        });
      }).catch(function (error) {
        // An error happened.
      });


  };

  const deleteacc = () => {
    user.reauthenticateWithCredential(credential).then(function () {
      // User re-authenticated.
      user.delete().then(function() {
        // User deleted.
      }).catch(function(error) {
        // An error happened.
      });
    }).catch(function (error) {
      // An error happened.
    });

    
  };
   


  function cancelP(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  function cancelA(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }


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

         
          <Popconfirm
            title="Are you sure update this task?"
            onConfirm={submitemail}
            onCancel={cancelE}
            okText="Yes"
            cancelText="No"
          >
           <Button  type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CORREO</Button>
          </Popconfirm>
          </Form.Item>

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

          
          <Popconfirm
            title="¿QUIERES CAMBIARLO?"
            onConfirm={submitpassword}
            onCancel={cancelP}
            okText="SI"
            cancelText="NO"
          >
            <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CONTRASEÑA</Button>
          </Popconfirm>
          </Form.Item>

          <br />
          
          <Popconfirm
            title="¿SEGURO QUE QUIERES BORRAR?"
            onConfirm={deleteacc}
            onCancel={cancelA}
            okText="SI"
            cancelText="NO"
          >
            <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >BORRAR CUENTA</Button>
          </Popconfirm>

          <br />
          <br />
          <Link  to="/Profile">
          <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              PERFIL
           </Button>
          </Link>


        </Card>




      </Row>



    </div>
  );
};


