import React, { useEffect, useState } from "react";
import { Link, Redirect} from "react-router-dom";
import { Button, Col, Card, Row, Input } from 'antd';
import * as firebase from "firebase/app";
import { AudioOutlined } from '@ant-design/icons';


export default function Inversions(props) {

  var ref = firebase.database().ref("/inversion");
  const [variable, setVariable] = useState(false)
  const [arrayofdb, setArrayofdb] = useState([])

  
  useEffect(() => {
    if (!variable) {

      ref.once("value", (snapshot) => {
        console.log(snapshot)

        snapshot.forEach((childSnapshot) => {
          console.log(childSnapshot.key)

          const childData = childSnapshot.val();
          console.log(childData)
          const titulo = childData.titulo;
          const tipo = childData.tipo;
          const desc = childData.descrip;
          const campos = childData.campos;
          const id = childSnapshot.key

          if (campos) {
            const arraydbaux = arrayofdb;
            arraydbaux.push({ titulo: titulo, tipo: tipo, desc: desc, campos: campos, id: id })
            setArrayofdb(arraydbaux)
          } else {
            console.log('test');

          }
        });
        setVariable(true)

      });
    }
    
  }, [])

  /*option shift f (para identar)
  */
 
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center' 
    }}>
      <Row>
        <Col span={24}>
          <label className="titles" style={{ textAlign: 'center', fontSize: 100,color: 'grey'  }}>INVERSIONES</label>
        </Col>
        <Col span={24}>
          <Link to="/Home">
            <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
              INICIO</Button>
          </Link>
        </Col>


        <br />

       

        <br />
        {

          arrayofdb.map((item, index) => {


            return (
             
              <Card   className="invscampos" autoSize true justifyContent={'center'} style={{ width:360, textAlign: 'center'  }} key={index} >
                
                {item.titulo}
                <br />
                {item.tipo}
                <br />
                {item.desc}
                <br />
                {item.campos}
                <br />

            
                <Link to={{
                  pathname: `/Inversion/${item.id}`,

                }}>
                <br />
                  <Button  type="primary" size='small' shape="rectangle" style={{ backgroundColor: 'grey',textAlign: 'center'  }} >
                    EDITAR</Button>
                </Link>

              </Card>
              
            )
          })
        }

      </Row>
    </div>
  );
};