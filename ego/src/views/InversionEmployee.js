import React from "react";
import {Link} from "react-router-dom";
import { Button} from 'antd';

export default function HomeAdmin(props) {
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
