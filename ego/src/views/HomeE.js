import React from "react";
import {Link} from "react-router-dom";
import { Button} from 'antd';

export default function HomeAdmin(props) {
    return (
      <div>
        <button onClick={props.logout}>log out</button>

        
        <Link  to="/Inversions">
        <Button type="primary" shape="circle" >
              INVERSIONS
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
