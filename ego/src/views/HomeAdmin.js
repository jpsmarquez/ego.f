import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card } from 'antd';
import '../App.css';

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
                          

                              <Link to="/Employees">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }}  >
                                          CREAR EMPLEADO
                                          </Button>
                              </Link>

                              <br />
                              <br />
                              <br />

                              <Link to="/NewInversion">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }}>
                                          CREAR INVERSION
                                            </Button>
                              </Link>

                              <br />

                              <br />
                              <br />

                              <Link to="/Inversions">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }} >
                                          INVERSIONES
                                            </Button>
                              </Link>
                              <br />
                              <br />
                              <br />

                              <Link to="/Notas">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }} >
                                          NOTAS
                                            </Button>
                              </Link>
                              <br />
                              <br />
                              <br />

                              <Link to="/Profile">
                                    <Button className="buttonss" type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }} >
                                          PERFIL
                                          </Button>

                              </Link>
                              <br />
                              <br />
                              <br />

                              <Button className="buttonss" onClick={props.logout} size='100px' type="primary" shape="round" style={{ width: 450, height: 100, backgroundColor: 'gray', fontSize: 50 }}>
                                    SALIR
                                     </Button>


                        </Col>
                  </Row>
            </div>
      );
};
