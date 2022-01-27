import React from 'react';
import Blogs from '../Blogs/Blogs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;