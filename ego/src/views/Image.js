import React from "react";
import {Link} from "react-router-dom";
import { Button} from 'antd';

export default function Image(props) {


    return (
      <div style={{display:'flex', 
      justifyContent: 'space-around'}}>

    <Col span={24}>
          <label style={{ textAlign: 'center', fontSize: 100, color: 'white' }}>IMAGEN</label>
    </Col>

    
      <Link  to="/Home">
        <Button type="primary" shape="rectangle" style={{backgroundColor:'grey'}}  >
              HOME
        </Button>
      </Link>



        </div>   
    );
};
