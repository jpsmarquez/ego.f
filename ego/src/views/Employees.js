import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card } from 'antd';
import * as firebase from "firebase/app";


export default function Inversions(props) {
  
  
  var ref = firebase.database().ref("/usuario");
  const [variable, setVariable] = useState(false)
  const [usuarios, setUsuarios] = useState([])
 

  useEffect(() => {
    if (!variable) {

      ref.once("value",  (snapshot) => { 

        snapshot.forEach((childSnapshot)=> {
  
          const childData = childSnapshot.val();
          console.log(childData.email)
          /*
          const titulo = childData.titulo;
          const tipo = childData.tipo;
          const desc = childData.descrip;
          
  
  
          if (campos) {
            setUsuarios([...usuarios,{ titulo: titulo, tipo: tipo, desc: desc}])

  
          } else {
            console.log('test');
  
          }

            {item.titulo}
            <br/>
            {item.tipo}
            <br/>
            {item.desc}
 
            <br/>
          */
        });
     setVariable(true)
      });
   }   
})

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <br />

      <Link to="/Home">
        <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
          INICIO
        </Button>
      </Link>

      {
      
      usuarios.map((item,index) =>{
    
        return (

          <Card style={{ width: 300 }} key={index}>

          </Card>
        )
      })
    }

     

    </div>
  );
};