import React from 'react';
import Cart from './Cart';

const Carosel = () => {

    const data =[
        {
            name: 'project',
            id: 1,
            img: 'https://i.ibb.co/9c0FQby/Screenshot-95.png'
        },
        {
            name: 'project',
            id: 2,
            img: 'https://i.ibb.co/dDP9CP9/Screenshot-93.png'
        },
        {
            name: 'project',
            id: 3,
            img: 'https://i.ibb.co/HBKwWLx/Screenshot-94.png'
        },
        {
            name: 'project',
            id: 4,
            img: 'https://i.ibb.co/Twv7Bp4/Screenshot-92.png'
        },
        {
            name: 'project',
            id: 5,
            img: 'https://i.ibb.co/vwN3KjZ/Screenshot-91.png'
        },
    ]

    return (
        <div className='mt-36'>
            <h2 className='text-green-500  text-center font-bold text-2xl'>_My Projects_</h2>

            {/* cart */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                {
                data.map(pd=> <Cart
                key={pd.id}
                pd={pd}
                ></Cart>)
                }
            </div>

        </div>
    );
};

export default Carosel;