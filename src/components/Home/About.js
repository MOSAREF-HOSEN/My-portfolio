import React from 'react';

const About = () => {
    const data = [
        {
            id: "01",
            heading: "Digital Branding",
            desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
        {
            id: "02",
            heading: "Team Management",
            desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
        {
            id: "03",
            heading: "Creative Mind",
            desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
        },
    ]
    return (
        <div className='lg:grid grid-cols-3 gap-8 bg-black'>
           
            {
                data.map((item)=>{
                    return(
                        <div className='p-12'>
                            <h1 className='text-4xl text-[#38d16a] font-bold'>{item.id}</h1>
                            <h2 className='text-white text-2xl font-mono font-bold'>{item.heading}</h2>
                            <p className='text-gray-300'><small>{item.desc}</small></p>
                        </div>
                    )
                })
            }
           
        </div>
    );
};

export default About;