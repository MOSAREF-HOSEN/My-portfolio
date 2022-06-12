import React from 'react';
import About from './About';
import AboutRow from './AboutRow';
import Banner from './Banner';
import Carosel from './Carosel';
import Contact from './Contact';
import Foter from './Foter';
import Serviec from './Serviec';


const Home = () => {
    return (
        <div className='px-6 bg-black'>
          <Banner></Banner>
          <About></About>
          <AboutRow></AboutRow>
          <Serviec></Serviec>
          <Carosel></Carosel>
          <Contact></Contact>
          <Foter></Foter>
        </div>
    );
};

export default Home;