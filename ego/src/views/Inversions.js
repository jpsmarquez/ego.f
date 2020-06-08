import React from "react";
import {Link} from "react-router-dom";
import { Button,Carousel, Radio} from 'antd';

export default function Inversions(props) {
  return (
    <div >
      <Link  to="/Home">
        <Button type="primary" shape="circle" >
              HOME
        </Button>
      </Link>

      
      </div>   
  );
};


/*
class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'left',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  render() {
    const { dotPosition } = this.state;
    return (
      <div>
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="left">Left</Radio.Button>

        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<PositionCarouselDemo />, mountNode);
*/