import React from 'react';
import Particle from '../Particle';

const Foter = () => {
   
    return (
        <div>

            <footer class="footer footer-center p-10 mt-4   bg-[#354259] text-white">
                {/* <Particle></Particle> */}
                <div class="grid grid-flow-col gap-4">
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className="scoialIcon flex  ">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-dribbble-square"></i>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Foter;