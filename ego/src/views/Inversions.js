import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Radio, Col, Card } from 'antd';
import * as firebase from "firebase/app";
import { black, blue } from "ansi-colors";


export default function Inversions(props) {
  
  const [arrayofdb, setArrayofdb] = useState({})
  var ref = firebase.database().ref("/inversion");
  const [variable, setVariable] = useState(false)

  useEffect(() => {
    if (!variable) {
      ref.once("value",  (snapshot) => { 

        snapshot.forEach((childSnapshot)=> {
  
          const childData = childSnapshot.val();
          const titulo = childData.titulo;
          const tipo = childData.tipo;
          const desc = childData.descrip;
          const campos = childData.campos;
          const no_of_vals = [campos.length];
          console.log(no_of_vals);
  
  
          if (campos) {
            setArrayofdb({ titulo: titulo, tipo: tipo, desc: desc, campos: campos })
  
            //setArrayofdb([titulo,tipo, desc, campos ])
  
          } else {
            console.log('test');
  
          }
        });
    setVariable(true)
      });
    }   
})


  //option shift f (para identar)

  const cardsejemplo = [
    {
      titulo:'titulo',
      ejemplo2:'eje2'
    },{
      titulo:'titulo',
      ejemplo2:'eje2'
    },{
      titulo:'titulo',
      ejemplo2:'eje2'
    }
  ];


  return (

    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>

      <br />
    
      <Link to="/Home">
        <Button type="primary" shape="rectangle" style={{ backgroundColor: 'grey' }} >
          HOMEH
        </Button>
      </Link>


     

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
