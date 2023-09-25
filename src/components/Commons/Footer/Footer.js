import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='footer-style'>
            <Container>
                <div className='footer-link-style'>
                    <Row>
                        <Col xs={12} md={4} lg={3}>
                            <div className='d-flex flex-column justify-content-center align-items-start first-col p-2'>
                                <h5 className='fw-bold footer-header'>FashionMania@</h5>
                                <p className='text-start'><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small></p>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                        <div className='d-flex flex-column justify-content-center align-items-start first-col  pt-2'>
                                <h5 className='fw-bold footer-header'>Need Help?</h5>
                                <p className='text-start mb-1'><small>Support</small></p>
                                <p className='text-start mb-1'><small>Get Started</small></p>
                                <p className='text-start mb-1'><small>Terms of like</small></p>
                                <p className='text-start mb-1'><small>Privecy Policy</small></p>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} >
                        <div className='d-flex flex-column justify-content-center align-items-start first-col  pt-2'>
                                <h5 className='fw-bold footer-header'>Need Help?</h5>
                                <p className='text-start mb-1'><small>Support</small></p>
                                <p className='text-start mb-1'><small>Get Started</small></p>
                                <p className='text-start mb-1'><small>Terms of like</small></p>
                                <p className='text-start mb-1'><small>Privecy Policy</small></p>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                        <div className='d-flex flex-column justify-content-center align-items-start first-col-3 pt-2'>
                                <h5 className='fw-bold footer-header'>Need Help?</h5>
                                <p className='text-start mb-1'><small>Support</small></p>
                                <p className='text-start mb-1'><small>Get Started</small></p>
                                <p className='text-start mb-1'><small>Terms of like</small></p>
                                <p className='text-start mb-1'><small>Privecy Policy</small></p>
                            </div>
                        </Col>
                        
                        
                    </Row>
                </div>
                <div className='footer-line'></div>
                <p className='text-start mt-3'><small>Copyright @ FashionMania. All Right Reserved.</small></p>
            </Container>
        </footer>
    );
};

export default Footer;