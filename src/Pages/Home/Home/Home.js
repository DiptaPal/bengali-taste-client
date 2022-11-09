import React from 'react';
import useTitle from '../../../hooks/useTitle';

import Hero from '../../Hero/Hero';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import DishType from '../DishType/DishType';
import HomeBlog from '../HomeBlog/HomeBlog';
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
            <Discount></Discount>
            <HomeBlog></HomeBlog>
            <Contact></Contact>
        </div>
    );
};

export default Home;