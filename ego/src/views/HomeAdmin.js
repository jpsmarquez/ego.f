import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from 'antd';

export default function HomeAdmin(props) {
      return (
            <div
                  style={{
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center'
                  }}>
                  <Row>
                        <Col span={30}>

                              <br />
                              <br />
                              <br />
                                    <Link to="/Employees">
                                          <Button type="primary" shape="rectangle" style={{ width: 500, height:100, backgroundColor: 'grey' , fontSize:50}}  >
                                                CREAR EMPLEADO
                                          </Button>
                                    </Link>
                    

                              <br />
                              <br />
                              <br />
            
                                    <Link to="/NewInversion">
                                          <Button className="buttonone" type="primary" shape="rectangle" style={{ width: 500, height:100, backgroundColor: 'grey' ,fontSize:50}}>
                                                NUEVA INVERSION
                                            </Button>
                                    </Link>

                                    <br />

                              <br />
                              <br />
       
                                    <Link to="/Inversions">
                                          <Button type="primary" shape="rectangle" style={{ width: 500, height:100, backgroundColor: 'grey',fontSize:50 }} >
                                                INVERSIONES
                                            </Button>
                                    </Link>
                                    <br />
                              <br />
                              <br />
                 
                                    <Link to="/Profile">
                                          <Button type="primary" shape="rectangle" style={{ width: 500, height:100, backgroundColor: 'grey' ,fontSize:50}} >
                                                PERFIL
                                          </Button>

                                    </Link>
                                    <br />
                              <br />
                              <br />
 
                                    <Button onClick={props.logout} size='100px' type="primary" shape="rectangle" style={{ width: 500, height:100, backgroundColor: 'grey',fontSize:50 }}>
                                          SALIR
                                     </Button>
                      

                        </Col>
                  </Row>
            </div>
      );
};
