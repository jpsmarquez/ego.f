import React from "react";
import {Link} from "react-router-dom";
import { Button} from 'antd';

export default function HomeAdmin(props) {
    return (
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}>
      <Link  to="/Home">
        <Button type="primary" shape="circle" style={{backgroundColor:'grey'}}>
              HOME
        </Button>
      </Link>


        </div>   
    );
};


