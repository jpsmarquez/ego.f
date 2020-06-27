import React from "react";
import {Link} from "react-router-dom";
import { tsPropertySignature } from "@babel/types";
import { Button, Card} from 'antd';

export default function HomeAdmin(props) {
    return (
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}
>

      <Card   style={{ width:360, textAlign: 'center'  }}  >
        <Button onClick={props.logout} type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
              SALIR
        </Button>

        <Link  to="/NewInversion">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}>
              NUEVA INVERSION
        </Button>
        </Link>
        
        <Link  to="/Inversions">
        <Button type="primary" shape="rectangle"style={{backgroundColor:'grey'}} >
              INVERSIONES
        </Button>
        </Link>

        <Link  to="/Employees">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              CREAR EMPLEADO
        </Button>
        </Link>

        <Link  to="/Profile">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}} >
              PERFIL
        </Button>
        </Link>
      </Card>
        </div>   
    );
};
