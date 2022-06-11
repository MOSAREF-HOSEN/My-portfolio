import React from 'react';
import About from './About';
import AboutRow from './AboutRow';
import Banner from './Banner';


const Home = () => {
    return (
        <div className=''>
          <Banner></Banner>
          <About></About>
          <AboutRow></AboutRow>
        </div>
    );
};

export default Home;