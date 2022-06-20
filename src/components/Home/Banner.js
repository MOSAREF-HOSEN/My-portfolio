import React from 'react';
import banner from '../../img/hero1.jpg'
import Particle from '../Particle';
const Banner = () => {
    
    return (
        
        <div >
        
            {/* partical end */}
            <div class="hero min-h-screen  ">
            
                <div class="pb-0 hero-content flex-col lg:flex-row-reverse">
                <Particle></Particle>
                    <img  data-aos="fade-left" src={banner} class="bannerImg rounded-md" />
                    <div data-aos="fade-right">
                    
                        <h1 class="text-5xl font-bold text-secondary">I AM A <br /> WEB DEVELOPER</h1>
                        <p class="py-6 text-white font-thin text-xl">am a full-stack web developer with more than 1year of experience in web technology, I have advanced knowledge of React.js i created some
                            unique project  UX  base functionality </p>
                        <div className="scoialIcon">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-dribbble-square"></i>
                        </div>
                        <button className='primary-btn mt-12'><a href='https://drive.google.com/file/d/10OecRui20uTciOon6qYPWZ9v5HLaHPRO/view?usp=sharing' target="_blank" data-aos="zoom-in" >Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;