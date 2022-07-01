import React from 'react';

const About = () => {
    const data = [
        {
            id: "01",
            heading: "Digital Branding",
            pro: <>
                <progress className="progress progress-success w-56" value="10" max="100"></progress>
                <progress className="progress progress-success w-56" value="40" max="100"></progress>
                <progress className="progress progress-success w-56" value="70" max="100"></progress>
                <progress className="progress progress-success w-56" value="100" max="100"></progress>
            </>
        },
        {
            id: "02",
            heading: "Team Management",
            pro: <>
                <progress className="progress progress-primary w-56" value="10" max="100"></progress>
                <progress className="progress progress-primary w-56" value="40" max="100"></progress>
                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                <progress className="progress progress-primary w-56" value="100" max="100"></progress>
            </>
        },
        {
            id: "03",
            heading: "Creative Mind",
            pro: <>
                <progress className="progress progress-error w-56" value="10" max="100"></progress>
                <progress className="progress progress-error w-56" value="40" max="100"></progress>
                <progress className="progress progress-error w-56" value="70" max="100"></progress>
                <progress className="progress progress-error w-56" value="100" max="100"></progress>
            </>

        },
    ]
    return (
        <div className='lg:grid grid-cols-3 gap-8 bg-black'>

            {
                data.map((item,index) => {
                    return (
                        <div key={index} className='p-12' data-aos="zoom-in-left">
                            <h1 className='text-4xl text-[#38d16a] font-bold'>{item.id}</h1>
                            <h2 className='text-white text-2xl font-mono font-bold'>{item.heading}</h2>
                            <div>
                                {
                                    item.pro
                                }
                            </div>
                        </div>
                    )
                })
            }


        </div>
    );
};

export default About;