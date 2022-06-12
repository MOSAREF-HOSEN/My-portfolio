import React from 'react';
import html from '../../img/skills/html5.png'
import css from '../../img/skills/css3.png'
import js from '../../img/skills/js.png'
import figma from '../../img/skills/figma.png'
import git from '../../img/skills/git.png'
import react from '../../img/skills/reactjs.png'
import nodejs from '../../img/skills/nodejs.png'
import nextjs from '../../img/skills/nextjs.png'

const Serviec = () => {
    const data = [
        {
            name: 'html5',
            img: html,
            id: 1
        },
        {
            name: 'css3',
            img: css,
            id: 2
        },
        {
            name: 'javascript',
            img: js,
            id: 3
        },
        {
            name: 'figma',
            img: figma,
            id: 4
        },
        {
            name: 'git',
            img: git,
            id: 5
        },
        {
            name: 'react',
            img: react,
            id: 6
        },
        {
            name: 'nodejs',
            img: nodejs,
            id: 7
        },
        {
            name: 'nextjs',
            img: nextjs,
            id: 8
        },
    ]
    return (
        <div>
            <h1 className='text-indigo-600 text-center text-xl uppercase font-bold'>our</h1>
        <h2 className='uppercase text-center
         font-bold text-3xl text-[#38d16a] mt-4'>servives</h2>
            <div className='grid grid-cols-4 gap-6'>
                {
                    data.map(pd => {
                        return (
                            <div class="shadow-xl rounded-sm bg-black">
                                <div class="py-auto flex justify-center items-center  ">
                                    <img src={pd.img} alt="" />
                                    <h2 class=" text-2xl uppercase text-bold text-green-500 text-center">{pd.name}</h2>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Serviec;