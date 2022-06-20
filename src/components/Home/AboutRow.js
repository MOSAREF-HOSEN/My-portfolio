import React from 'react';
import about from '../../img/about.jpg'
const AboutRow = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="lg:grid grid-cols-2 gap-3 p-1">
                    <img data-aos="zoom-in" src={about} class="" />
                    <div>
                        <p className='text-secondary text-2xl text-center font-bold'>my skllis</p>
                        <div className='mt-4 p-10' data-aos="zoom-in-left">

                            <p class=" text-white font-bol">
                                I am full-stack  web application developer my
                                technical skllis html5 css3 javascript bootstrap tealwiend css componets libary.and development some  technologys react reactRouter firebase stript express nodejs mongodb Familiar reactNative neextjs
                            </p>
                            <div className='pt-6'>
                            <a href='#about' data-aos="zoom-in" className='primary-btn mt-16'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutRow;