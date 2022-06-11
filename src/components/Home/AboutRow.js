import React from 'react';
import about from '../../assets/about.jpg'
const AboutRow = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="lg:grid grid-cols-2 gap-3 p-1">
                    <img data-aos="zoom-in" src={about} class="" />
                    <div>
                        <p className='text-secondary font-bold'>About Me</p>
                        <div className='mt-12' data-aos="zoom-in-left">
                            <h1 class="text-5xl font-bold">Who I Am And <br /> What I Do</h1>
                            <p class="py-6 text-black font-bol">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.

                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            <button className='primary-btn mt-12'>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutRow;