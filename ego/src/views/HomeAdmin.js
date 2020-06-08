import React from "react";
import {Link} from "react-router-dom";
import { tsPropertySignature } from "@babel/types";
import { Button} from 'antd';

export default function HomeAdmin(props) {
    return (
      <div>
        <button onClick={props.logout}>log out</button>
        <Link  to="/NewInversion">
        <Button type="primary" shape="circle" >
              NEW INVERSIONS
        </Button>
        </Link>
        
        <Link  to="/Inversions">
        <Button type="primary" shape="circle" >
              INVERSIONS
        </Button>
        </Link>

        <Link  to="/Employees">
        <Button type="primary" shape="circle" >
              EMPLEADOS
        </Button>
        </Link>

        <Link  to="/Profile">
        <Button type="primary" shape="circle" >
              PERFIL
        </Button>
        </Link>

        </div>   
    );
};
