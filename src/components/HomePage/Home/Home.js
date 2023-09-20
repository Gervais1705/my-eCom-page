import React from 'react';
import Banner from '../Banner/Banner';
import Collections from '../Collections/Collections';
import ConnectUs from '../ConnectUs/ConnectUs';
import Deliveries from '../Delivery/Deliveries';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import PopularProducts from '../PopularProducts/PopularProducts';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='mt-4 mb-4'>
                <Banner></Banner>
            </div>
            <div className='delivery-section-style'>
                <Deliveries></Deliveries>
            </div>
            <div className='collection-section-style'>
                <Collections></Collections>
            </div>
            <div className='collection-section-style'>
                <PopularProducts></PopularProducts>
            </div>
            <div className='collection-section-style'>
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div className='collection-section-style'>
                <ConnectUs></ConnectUs>
            </div>
        </div>
    );
};

export default Home;