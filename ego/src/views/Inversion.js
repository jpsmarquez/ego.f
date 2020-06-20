import React, { useState, useEffect } from "react";
import { Link,Redirect} from "react-router-dom";
import { Button, Col, Card, Row, Popconfirm, message } from 'antd';
import * as firebase from "firebase/app";

export default function Inversion(props) {
  console.log(props)
  var ref = firebase.database().ref(`/inversion/${props.match.params.id}`);
  console.log(ref)

  const [arrayofdb, setArrayofdb] = useState('')

  useEffect(() => {
    ref.once("value", (snapshot) => {
      console.log(snapshot.val())
      const childData = snapshot.val();
      setArrayofdb(childData)
    });
  }, []);

  const deleteI =()=> {
    ref.remove();
    message.success('INVERSION ELIMINADA');
   

  };

  function cancelD(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <Row>
        <Col span={24}>
          <label style={{ textAlign: 'center', fontSize: 100, color: 'white' }}>INVERSION</label>
        </Col>
        <br />
        <Link to="/Home">
          <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
            INICIO
        </Button>
        </Link>
        <br />
        <Link to="/Inversions">
          <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
            INVERSIONES
        </Button>
        </Link>

        <br />


        <Card style={{ width: 500, height: 500 }} >

          {arrayofdb.titulo}
          <br />
          {arrayofdb.descrip}

          {
            arrayofdb.campos ? (
              arrayofdb.campos.map((item, index) => {
                return (
                  <p>{item}</p>
                )
              }))
              : null
          }

          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={deleteI}
            onCancel={cancelD}
            okText="SI"
            cancelText="NO">
            <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >BORRAR INVERSION</Button>
          </Popconfirm>


        </Card>

      </Row>
    </div>
  );
};


/*


*/