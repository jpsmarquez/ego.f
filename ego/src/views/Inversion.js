import React, { useState, useEffect } from "react";
import { Link, Redirect} from "react-router-dom";
import { Button, Col, Card, Row, Popconfirm, message,Input } from 'antd';
import * as firebase from "firebase/app";
import Formasdecampo from '../containers/formasdecampo';

export default function Inversion(props) {
  console.log(props)
  var ref = firebase.database().ref(`/inversion/${props.match.params.id}`);
  console.log(ref)

  const [arrayofdb, setArrayofdb] = useState('')
  const [index, setIndex] = useState(0);
  const [campos, setC] = useState('');
  const [ndesc, setnD] = useState('');
  const [ntitulo, setnT] = useState('');
 

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

  const updateT =()=> {
    firebase.database().ref(`/inversion/${props.match.params.id}/titulo`).set(ntitulo)
    message.success('TITULO MODIFICADO');
  };

  function cancelT(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }


  const [formularios, setFormularios] = useState([]);


  const deletelastelement = () => {
    let f = [...formularios];
    f.pop();
    setFormularios(f)
  };


  const updateD = () => {
    firebase.database().ref(`/inversion/${props.match.params.id}/descrip`).set(ndesc)
    message.success('DESCRIPCION MODIFICADA');
  };

  function cancelD(e) {
    console.log(e);
    message.error('NO SE EFECTUO CAMBIOS');
  }

  const updateC = () => {
    firebase.database().ref(`/inversion/${props.match.params.id}/campos`).set(campos)
    message.success('CAMPO EDITADO');
  };


  function cancelc() {
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

          <br />
          <Input
                  placeholder={`${arrayofdb.titulo} `}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setnT(e.target.value)}
                  value={ntitulo}
                  size={"default"}
          />
          <br />

          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={updateT}
            onCancel={cancelT}
            okText="SI"
            cancelText="NO">
             <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >EDITAR TITULO</Button>
          </Popconfirm>
         
          <br />

          <br />
          <Input
                  placeholder={`${arrayofdb.descrip} `}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setnD(e.target.value)}
                  value={ndesc}
                  size={"default"}
          />
          <br />
          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={updateD}
            onCancel={cancelD}
            okText="SI"
            cancelText="NO">
             <Button type="primary" shape="rectangle" size={"small"} style={{ backgroundColor: 'grey' }} >EDITAR DESCRIPCION</Button>
          </Popconfirm>

          <br/>

          <br/>
          <Input.TextArea
                  style={{textAlign: 'center' }}
                  value={`${arrayofdb.campos}`}
                  onChange={(e) => setC(e.target.value)}
                  autoSize true

          />

          <Popconfirm
            title="¿ESTAS SEGURO?"
            onConfirm={updateC}
            onCancel={cancelc}
            okText="SI"
            cancelText="NO">
            <Button type="primary" size={"small"}  style={{ backgroundColor: 'grey' }}>EDITAR CAMPO </Button>
          </Popconfirm>
          <br/>
          <br/>
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
  const submit = (campo2e) => {
    firebase.database().ref(`/inversion/${props.match.params.id}/campos`).update({
     campos:campos
   })
  };


            {
              formularios.map((item) => {

                return item;

              })
          }
          <br/>
          <Button type="primary" size={"small"} onClick={submit} style={{ backgroundColor: 'grey' }}>
              GUARDAR CAMPO/CAMPOS
          </Button>
          <br/>


                    {
            arrayofdb.campos ? (
              arrayofdb.campos.map((item, index) => {
              
                return(
                  <Input
                  placeholder={`EDITAR CAMPO ${item}`}
                  style={{ textAlign: 'center' }}
                  onChange={(e) => setnD(e.target.value)}
                  value={campo2e}
                  size={"default"}
                  />
                )

              }))
              : null
          }


  const llenarcampos = (rstring) => {
    console.log(rstring)

    let c = [...campos]
    console.log([campos])
    let n = campos.length

    c[n] = rstring
    console.log(c)
    setC(c)

  }


    const addform = () => {
    let f = [...formularios];
    f.push(<Formasdecampo setC={setC} campos={campos} llenarcampos={llenarcampos} value={campos[index]} />);
    setFormularios(f)
  };


      firebase.database().ref(`/inversion/${props.match.params.id}/campos`).update({
     campos
   })



            

          {
            arrayofdb.campos ? (
              arrayofdb.campos.map((item, index) => {
              
                return(
                  <p>{
                    item
                  }</p>
                )

              }))
              : null
          }
*/