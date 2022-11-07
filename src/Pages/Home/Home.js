import React from 'react';
import useTitle from '../../hooks/useTitle';
import Hero from '../Hero/Hero';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
        </div>
    );
};

export default Home;