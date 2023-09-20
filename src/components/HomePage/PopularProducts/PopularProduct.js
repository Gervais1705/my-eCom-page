import React from 'react';
import { Col } from 'react-bootstrap';
import './PopularProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PopularProduct = ({product}) => {
    const {id, title, price, image, category} = product;
    return (
        <Col xs={12} md={4} lg={3}>
            <Link  className='link-style' to={`/productDetails/${id}`}>
            <div className='card-style p-2'>
                <div>
                    <img src={image} alt="" width={150} height={180} />
                </div>
                <div className='text-start p-3 pb-0'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p>{category}</p>
                    <p>
                        <FontAwesomeIcon className='star-color' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='star-color' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='star-color' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='star-color' icon={faStar} ></FontAwesomeIcon>
                        <FontAwesomeIcon className='star-color' icon={faStar} ></FontAwesomeIcon>
                    </p>
                    </div>
                    <p><b>{title}</b></p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='price-color mb-0'>$ {price}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='dot-blue'></div>
                            <div className='dot-red'></div>
                            <div className='dot-green'></div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </Col>
    );
};

export default PopularProduct;