import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './FeaturedProducts.css';
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
                        <Image src='https://media.istockphoto.com/photos/portrait-of-friendly-young-businessman-picture-id1352495212?k=20&m=1352495212&s=612x612&w=0&h=MilhICkTrzeDLTXiNo-Tnc0L1RqsvnOO6t7tg8L8zXo=' className='pic-1' height='215px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src='https://media.istockphoto.com/photos/happy-to-be-on-the-job-picture-id515663611?k=20&m=515663611&s=612x612&w=0&h=g69KsoPb-RfW5loSqhlfawwKFbSyBhn_cv_BixSw1CQ=' className='pic-2' height='215px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src='https://media.istockphoto.com/photos/colorful-tie-die-tshirt-on-wooden-background-fashion-summer-picture-id1322677667?k=20&m=1322677667&s=612x612&w=0&h=zjXRF-qrejSJI37RKPJNBg1jpEtK0W5gqWEXhszArd8=' className='pic-3' height='205px'></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6} className='g-2'>
                        <Image src='https://media.istockphoto.com/photos/tie-dye-shirt-picture-id859807234?k=20&m=859807234&s=612x612&w=0&h=cs7RnXJv0O1fyQxHG1famrxJ13goUMFaQcNKCpReKkw=' className='pic-4' height='210px'></Image>
                        </Col>
                        </Row>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Image src='https://media.istockphoto.com/photos/close-up-of-a-white-mens-shirts-picture-id157567639?k=20&m=157567639&s=612x612&w=0&h=r5oyOHpJjtuNUWBi3nuuliHVDVhyaevCkr-ml1bhTDk=' className='featured'></Image>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProducts;