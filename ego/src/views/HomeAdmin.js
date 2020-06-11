import React from "react";
import {Link} from "react-router-dom";
import { tsPropertySignature } from "@babel/types";
import { Button} from 'antd';

export default function HomeAdmin(props) {
    return (
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}>

        <Button onClick={props.logout} type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
              LOG OUT
        </Button>

        <Link  to="/NewInversion">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
              NEW INVERSIONS
        </Button>
        </Link>
        
        <Link  to="/Inversions">
        <Button type="primary" shape="rectangle"style={{backgroundColor:'grey'}} >
              INVERSIONS
        </Button>
        </Link>

        <Link  to="/Employees">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              EMPLEADOS
        </Button>
        </Link>

        <Link  to="/Profile">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              PERFIL
        </Button>
        </Link>

        </div>   
    );
};