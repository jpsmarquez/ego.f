import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card } from 'antd';
import * as firebase from "firebase/app";


export default function Employees(props) {


  var ref = firebase.database().ref("/usuario");
  const [variable, setVariable] = useState(false)
  const [arrayofdb, setArrayofdb] = useState([])


  useEffect(() => {
    if (!variable) {

      ref.once("value", (snapshot) => {
        console.log(snapshot)
        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot)
          const childData = childSnapshot.val();
          console.log(childData)
          const tipo = childData.tipo;
          const email = childData.email;
          const name = childData.name;




          if (tipo) {
            const arraydbaux = arrayofdb;
            arraydbaux.push({ tipo: tipo,email:email,name:name })
            setArrayofdb(arraydbaux)


          } else {
            console.log('test');

          }
        });
        setVariable(true)

      });
    }
  }, [])

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>




      {

        arrayofdb.map((item, index) => {
          console.log(index)
          return (

            <Card style={{ width: 300 }} key={index}>
              {item.name}
              <br />
              {item.email}
              <br />
              <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CORREO</Button>
              <br />
              <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >CAMBIAR CONTRASEÑA</Button>
              <br />



            </Card>
          )
        })
      }


      <Link to="/Home">
        <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >INICIO</Button>
      </Link>



    </div>
  );
};
