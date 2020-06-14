import React, {useEffect,useState} from "react";
import { Button, Radio,Col} from 'antd';
import {Link} from "react-router-dom";
import * as firebase from "firebase/app";

export default function Employees(props) {
  
    return (
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}>
        <Link  to="/Home">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}  >
              INICIO
        </Button>
        </Link>
        </div>   
    );
};
