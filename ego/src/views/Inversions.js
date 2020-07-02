import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Col, Card, Row, Input, message, Form } from 'antd';
import * as firebase from "firebase/app";

export default function Inversions(props) {

  let ref = firebase.database().ref("/inversion");
  const [variable, setVariable] = useState(false)
  const [arrayofdb, setArrayofdb] = useState([])
  let [searched,setSearched] = useState('');
  const [st, setSt] = useState('');

  console.log(searched)

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
            arraydbaux.push({
              titulo: titulo,
              tipo: tipo,
              desc: desc,
              campos: campos,
              id: id
            })
            setArrayofdb(arraydbaux)
          } else {
            console.log('test');
          }
        });
        setVariable(true)

      });
    }
  }, [])

  const ssearched = () => { 
    
      arrayofdb.map((item, index) => {
        if (searched === item.titulo && searched !== -1) {
          console.log(item.titulo)
          console.log(item.desc)
          console.log(item.campos)
          console.log(item)
  
          const arraydbaux = arrayofdb;
          arraydbaux.splice({})
  
          arraydbaux.push({
            titulo: item.titulo,
            desc: item.desc,
            campos: item.campos,
          })
          setArrayofdb(arraydbaux)
        }
      })
      setSearched('')
  };
  console.log(arrayofdb)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <Row>
        <Col span={24}>
          <label className="titles" style={{ textAlign: 'center', fontSize: 100, color: 'grey' }}>INVERSIONES</label>
        </Col>
        <Col span={24}>
          <Link to="/Home">
            <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              INICIO
              </Button>
          </Link>
        </Col>
        <br />
        <br />
        <Col span={24}>
          <Link to="/NewInversion">
            <Button type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              NUEVA INVERSION</Button>
          </Link>
        </Col>
        <br />
        <Col span={24}>
          <br />
          <Button onClick={ssearched}  type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
            BUSCAR
          </Button>
          <br />
          <br />
          <Input
            id="Buscar"
            style={{ textAlign: 'center' }}
            placeholder="busca inversión por título"
            onChange={(e) => setSearched(e.target.value)}
            value={searched}   
          />
          <br />
          <br />
        </Col>
        {
          arrayofdb.map((item, index) => {
            return (
              <Card shape="round" className="invscampos" autoSize true justifyContent={'center'} style={{ width: 360, textAlign: 'center' }} key={index} >
                {item.titulo}
                <br />
                {item.desc}
                <br />
                {item.campos}
                <br />
                <Link to={{ pathname: `/Inversion/${item.id}` }}>
                  <br />
                  <Button type="primary" size='small' shape="round" style={{ backgroundColor: 'gray', textAlign: 'center' }} >
                    EDITAR
                  </Button>
                </Link>
              </Card>
            )
          })
        }

      </Row>
    </div>
  );
};

