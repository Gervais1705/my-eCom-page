import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchedAsyncProducts, getAllProducts } from '../../../states/productsSlice';
import PopularProduct from './PopularProduct';
const PopularProducts = () => {
    const products = useSelector(getAllProducts);
    const dispatch = useDispatch();
    console.log(products)
    useEffect(()=>{
        dispatch(fetchedAsyncProducts());
    },[dispatch]);
    return (
        <div>
            <Container>
                <h3 className='fw-bold'>Popular Products</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className='mt-5'>
                    <Row>
                        {
                            products?.slice(0,4)?.map(product => <PopularProduct
                            key={product.id}
                            product={product}
                            ></PopularProduct>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default PopularProducts;