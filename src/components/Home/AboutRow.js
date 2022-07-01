import React from 'react';
import about from '../../img/abd01.png'
const AboutRow = () => {
    return (
        <div id='about'>
            <div className="hero min-h-screen ">
                <div className="lg:grid grid-cols-2 gap-3 p-1">
                    <img data-aos="zoom-in" src={about} className="" />
                    <div className='mt-24'>
                        <p className='text-secondary uppercase text-3xl font-bold'>my skllis</p>
                        <div className=' pt-5' data-aos="zoom-in-left">

                            <p className=" text-white font-bol">
                                I am full-stack  web application developer my
                                technical skllis html5 css3 javascript bootstrap tealwiend css componets libary.and development some  technologys react reactRouter firebase stript express nodejs mongodb Familiar reactNative neextjs
                            </p>
                            <div className='pt-12'>
                            <a href='#contac' data-aos="zoom-in" className='primary-btn mt-16'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutRow;