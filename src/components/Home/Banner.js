import React from 'react';
import banner from '../../img/final.png'
import Particle from '../Particle';
const Banner = () => {
    
    return (
        
        <div id='/'>
        
            {/* partical end */}
            <div className="hero min-h-screen  ">
            
                <div className="pb-0 hero-content flex-col lg:flex-row-reverse">
                <Particle></Particle>
                    <img  data-aos="fade-left" src={banner} className="bannerImg rounded-md" />
                    <div data-aos="fade-right">
                    
                        <h1  className="text-5xl font-bold text-secondary">I AM A <br /> WEB DEVELOPER</h1>
                        <p className="py-6 text-white font-thin text-xl">i'm a full-stack web developer with more than 1year of experience in web technology, I have advanced knowledge of React.js i created some
                            unique project  UX  base functionality </p>
                        <div className="scoialIcon">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-pinterest"></i>
                            <i className="fa-brands fa-dribbble-square"></i>
                        </div>
                        <button className='primary-btn mt-12'><a href='https://drive.google.com/file/d/1YlHp4IySJVOQTn3tKYiVCaPtSP4v9ryL/view?usp=sharing' target="_blank" data-aos="zoom-in" >Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;