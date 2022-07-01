import React from 'react';


const Foter = () => {

    return (
        <div>

            <footer data-aos="fade-up"
                data-aos-duration="3000" className="footer footer-center p-10 mt-4   bg-[#354259] text-white">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="scoialIcon flex  ">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-dribbble-square"></i>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Foter;



