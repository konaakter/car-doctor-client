import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Blog></Blog>
        </div>
    );
};

export default Home;