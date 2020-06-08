import React from "react";
import { Button} from 'antd';
import {Link} from "react-router-dom";

export default function Employee(props) {
    return (
      <div>
       <Link  to="/Home">
        <Button type="primary" shape="circle" >
              HOME
        </Button>
        </Link>
        

        </div>   
    );
};
