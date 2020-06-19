import React from "react";
import {Link} from "react-router-dom";
import { Button,Card} from 'antd';
import Inversions from './views/Inversions';


export default function HomeAdmin(props) {
 
    return (
      
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}>
        <Link  to="/Home">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              INICIO
        </Button>
        </Link>
        
        <Card style={{ width: 150 }} >
        
        </Card>
        </div>   
    );
};
