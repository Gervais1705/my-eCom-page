import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './FeaturedProducts.css';
import I4 from '../../../images/I4.jpg'
import I2 from '../../../images/I2.jpg'
import I5 from '../../../images/I5.jpg'
import I3 from '../../../images/i3.png'
import I1 from '../../../images/I1.jpg'
const FeaturedProducts = () => {
    return (
        <div>
            <Container>
                <h3 className='fw-bold'>Featured Products</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-5'>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                        <Row>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src={I4} className='pic-1' height='215px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src={I2} className='pic-2' height='215px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src={I1} className='pic-3' height='205px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src={I5} className='pic-4' height='210px'></Image>
                        </Col>
                        </Row>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Image src={I3} className='featured'></Image>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProducts;