import React from 'react';
import Blogs from '../Blogs/Blogs';
import IconBlog from '../Icon/IconBlog';
import TravelItem from '../TravelItem/TravelItem';
import TravelTrips from '../TravelTrips/TravelTrips';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IconBlog></IconBlog>
            <TravelTrips></TravelTrips>
            <Blogs></Blogs>
            <TravelItem></TravelItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;