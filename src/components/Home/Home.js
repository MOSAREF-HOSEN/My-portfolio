import React from 'react';
import About from './About';
import AboutRow from './AboutRow';
import Banner from './Banner';
import Carosel from './Carosel';
import Serviec from './Serviec';


const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <About></About>
          <AboutRow></AboutRow>
          <Serviec></Serviec>
          <Carosel></Carosel>
        </div>
    );
};

export default Home;