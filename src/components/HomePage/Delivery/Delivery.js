import React from 'react';
import { Col } from 'react-bootstrap';
import './Delivery.css';
const Delivery = (props) => {
    const {title, para, image} = props;
    return (
        <Col xs={12} md={4} lg={3} className='g-2'>
            <div className='d-flex justify-content-evenly align-items-center'>
                <img className='delivery-img' src={image} alt="" />
                <div className='text-start'>
                    <p className='fw-bold mb-0'><small>{title}</small></p>
                    <p className='mb-0'><small>{para}</small></p>
                </div>
            </div>
        </Col>
    );
};

export default Delivery;