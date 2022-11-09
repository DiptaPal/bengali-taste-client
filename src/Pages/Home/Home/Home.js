import React from 'react';
import useTitle from '../../../hooks/useTitle';

import Hero from '../../Hero/Hero';
import Contact from '../Contact/Contact';
import DishType from '../DishType/DishType';
import Services from '../Services/Services';
import TotalInfo from '../TotalInfo/TotalInfo';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>
            <TotalInfo></TotalInfo>
            <Services></Services>
            <DishType></DishType>
            <Contact></Contact>
        </div>
    );
};

export default Home;