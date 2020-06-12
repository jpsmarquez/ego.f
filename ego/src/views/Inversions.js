import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import { Button,Carousel, Radio,Col} from 'antd';
import * as firebase from "firebase/app";


export default function Inversions(props) {

/*
  const [inversions,setInversions] = useState([])
  const [ready,setReady] = useState(false)
  
  useEffect(()=>{
    if (!ready) {
    firebase.database().ref("/inversion/").on("child_added",snap=> {

      console.log(snap.val().titulo)

      setReady(true)

      let a = [...inversions];

      a.push(snap.val());

      setInversions(a)
      })
    }
  }, [inversions, ready])
*/
  var ref = firebase.database().ref("/inversion");

  ref.on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();
  var titulo = childData.titulo;
  var tipo = childData.tipo;
  var desc = childData.descrip;
  var campos = childData.campos;
  
    //array, value
  
  console.log(titulo);
  console.log(campos);
  
  
   });
  });


 
  return (
    
    <div style={{display:'flex', 
    justifyContent: 'space-around'}}>

    
    
      <Link  to="/Home">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              HOME
        </Button>
      </Link>

      </div>   
  );
};


/*
class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'left',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="left">Left</Radio.Button>

        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
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

ReactDOM.render(<PositionCarouselDemo />, mountNode);



      let arrayofinversions = []
      for (const item in snap.val()) {
        console.log(snap.val()[item])
        arrayofinversions.push(snap.val()[item])

      }

      setInversions(arrayofinversions)

      ´


      ......
      const [inversions,setInversions] = useState([])
  const [ready,setReady] = useState(false)
  
  useEffect(()=>{
    if (!ready) {
    firebase.database().ref("/inversion/").on("child_added",snap=> {
      console.log(snap.val())
      setReady(true)
      let a = [...inversions];
      a.push(snap.val());
      setInversions(a)
      })
    }
  }, [inversions, ready])



*/