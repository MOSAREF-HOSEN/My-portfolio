import React from 'react';
import banner from '../../assets/home.png'
const Banner = () => {
    return (
        <div >
            <div class="hero min-h-screen  ">
                <div class="pb-0 hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-left" src={banner} class="image-full w-auto" />
                    <div data-aos="fade-right">
                        <h1  class="text-5xl font-bold text-secondary">I AM A <br /> WEB DEVELOPER</h1>
                        <p class="py-6 text-gray-400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet.</p>
                        <div className="scoialIcon">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-dribbble-square"></i>
                        </div>
                        <button data-aos="zoom-in" className='primary-btn mt-12'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;