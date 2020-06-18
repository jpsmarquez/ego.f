import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card ,Row} from 'antd';
import * as firebase from "firebase/app";
import { black, blue } from "ansi-colors";

export default function Inversions(props) {


  var ref = firebase.database().ref("/inversion");
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
          const titulo = childData.titulo;
          const tipo = childData.tipo;
          const desc = childData.descrip;
          const campos = childData.campos;




          if (campos) {
            const arraydbaux = arrayofdb;
            arraydbaux.push({ titulo: titulo, tipo: tipo, desc: desc, campos: campos })
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
    const inversion=(id) => {
      firebase.database().ref('inversion'+inversion.id)

    };
    onClick={inversion}
*/


  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
       <Row>
      <Col span={24}>
        <label style={{ textAlign: 'center', fontSize: 100, color: 'white' }}>INVERSIONES</label>
      </Col>
      

   
      <Col span={24}>
      <Link to="/Home">
        <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
          INICIO
        </Button>
      </Link>
      </Col>
      {

        arrayofdb.map((item, index) => {

          return (
            
            <Card style={{ width: 150 }} key={index} >
              {item.titulo}
              <br />
              {item.tipo}
              <br />
              {item.desc}

              {
                item.campos.map((item, index) => {
                  return (
                    <p>{item}</p>
                  )
                })
              }

            </Card>
          )
        })
      }


  </Row>
    </div>
  );
};


/*
class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'left',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="left">Left</Radio.Button>

        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<PositionCarouselDemo />, mountNode);



      let arrayofinversions = []
      for (const item in snap.val()) {
        console.log(snap.val()[item])
        arrayofinversions.push(snap.val()[item])

      }

      setInversions(arrayofinversions)

      ´


      ......
      const [inversions,setInversions] = useState([])
  const [ready,setReady] = useState(false)

  useEffect(()=>{
    if (!ready) {
    firebase.database().ref("/inversion/").on("child_added",snap=> {
      console.log(snap.val())
      setReady(true)
      let a = [...inversions];
      a.push(snap.val());
      setInversions(a)
      })
    }
  }, [inversions, ready])

  ---
        if (campos) {
        console.log(campos[0]);
        setArrayofdb({titulo:titulo,tipo:tipo,desc:desc,campos:campos})
        console.log(arrayofdb);
      } else {
        console.log('test');
      }
---__--_
renderChoices() {
    var data_list = []
    firebase.database().ref("orgs").once("value").then((snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val().name;
            data_list.push(childData);
        });
        console.log(data_list, data_list.length);
    });
}

-----
 {
      cardsejemplo.map((item,index) =>{

        return (

          <Card style={{ width: 300 }} key={index}>
            {item.titulo}
            <br/>
            {item.ejemplo2}
          </Card>
        )
      })
    }
*/
