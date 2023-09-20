import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Delivery from './Delivery';
import tracking from '../../../images/delivery/tracking 1.png';
const Deliveries = () => {
    const [deliveries, setDeliveries] = useState([]);
    useEffect(()=>{
        fetch('delivery.json')
        .then(res => res.json())
        .then(data => setDeliveries(data));
    },[deliveries])
    return (
        <div>
            <Container>
                <Row>
                    <Delivery image={tracking} title="FAST DELIVERY" para="Lorem Ipsum is simply dummy text "></Delivery>
                    <Delivery image={tracking} title="FAST DELIVERY" para="Lorem Ipsum is simply dummy text "></Delivery>
                    <Delivery image={tracking} title="FAST DELIVERY" para="Lorem Ipsum is simply dummy text "></Delivery>
                    <Delivery image={tracking} title="FAST DELIVERY" para="Lorem Ipsum is simply dummy text "></Delivery>
                </Row>
            </Container>
        </div>
    );
};

export default Deliveries;