import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Col, Card, Row, Input, message, Form } from 'antd';
import * as firebase from "firebase/app";

export default function Inversions(props) {

  let ref = firebase.database().ref("/inversion");
  const [variable, setVariable] = useState(false)
  const [arrayofdb, setArrayofdb] = useState([])
  let [searched, setSearched] = useState('');
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
          }
        });
        setVariable(true)

      });
    }
  }, [])

  const ssearched = () => {
    arrayofdb.map((item, index) => {
      if (searched === item.titulo.toLowerCase() && searched !== -1) {
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


  function refreshPage() {
    window.location.reload(false);
  }

  console.log(arrayofdb)

  return (
    <div style={{
    
      textAlign: 'center' ,
      justifyContent: 'center'
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
        <Col span={24}>
          <br />
          <Input
            id="Buscar"
            size={"large"}
            style={{ textAlign: 'center', width:300 }}
            placeholder="BUSCA POR TITULO"
            onChange={(e) => setSearched(e.target.value.toLowerCase())}
            value={searched}
            autoComplete={"off"}
          />
          <h5 style={{ color: 'grey' }}>SI NO EXISTE REGISTRO DE SU BUSQUEDA, </h5>
          <h5 style={{ color: 'grey' }}>ESTA MAL ESCRITA O </h5>
          <h5 style={{ color: 'grey' }}>HAY INVERSIONES CON EL MISMO TITULO  </h5>
      
          <Button onClick={ssearched} type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
            BUSCAR
          </Button>
          <br />
          <br />
          <Col span={24}>
            <Button onClick={refreshPage} type="primary" shape="round" style={{ backgroundColor: 'grey' }} >
              NUEVA BUSQUEDA
            </Button>
          </Col>
          <br />

        </Col>
        
        {
          arrayofdb.map((item, index) => {
            return (
              <Row   >
              <Col   >
              <Card  shape="round" className="invscampos" autoSize true style={{ width: 360, alignItems:'center', }} key={index} >
                {item.titulo}
                <br />
                {item.desc}
                <br />
                <Link to={{ pathname: `/Inversion/${item.id}` }}>
                <br />
                <Button type="primary" size='small' shape="round" style={{ backgroundColor: 'gray', textAlign: 'center' }} >
                    INSPECCIONAR
                </Button>
                </Link>
              </Card>
              </Col>
              </Row>
            )
          })
        }

      </Row>
    </div>
  );
};

