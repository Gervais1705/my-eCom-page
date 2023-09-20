import React from 'react';
import { Container } from 'react-bootstrap';
import './StatusBar.css';
import facebook from '../../../images/social/Facebook.png';
import insta from '../../../images/social/Instagram.png';
import printrest from '../../../images/social/Pinterest.png';
const StatusBar = () => {
    return (
        <div className='statusbar-style'>
            <Container>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='fw-bold m-3'>Free shipping on all UK orders!</div>
                    <div className='d-flex justify-content-evenly align-items-center m-3'>
                        <div className=''><img src={facebook} alt="" /></div>
                        <div className='ms-3 me-3'><img src={insta} alt="" /></div>
                        <div className=''><img src={printrest} alt="" /></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StatusBar;