import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Collections.css';
const Collections = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <div className='first-collection'>
                            <div className='collection-style'>
                                <div>
                                    <p className='collect-header'>Up to <span className='collect-bold'>50%</span> off sale</p>
                                </div>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <p className='check-collect'><small>Check Now</small></p>
                                    <div className='check-line'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='second-collection'>
                            <div className='collection-style'>
                                <div>
                                <p className='collect-header'><span className='collect-bold'>Women’s </span> Collection</p>
                                </div>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <p className='check-collect'><small>Check Now</small></p>
                                    <div className='check-line'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <div className='third-collection'>
                            <div className='collection-style'>
                                <div>
                                    <p className='collect-header'><span className='collect-bold'>Men’s </span> Collection</p>
                                </div>
                                <div className='d-flex justify-content-start align-items-center'>
                                    <p className='check-collect'><small>Check Now</small></p>
                                    <div className='check-line'></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Collections;