import React from 'react';
import Cart from './Cart';

const Carosel = () => {

    const data =[
        {
            name: 'Ema-john',
            id: 1,
            href: 'https://github.com/MOSAREF-HOSEN/simpole-amazon-Ecomarce',
            hrefs: 'https://github.com/MOSAREF-HOSEN/simpole-amazon-server',
            btn: 'https://emazone-with-fairbase.web.app/',
            img: 'https://i.ibb.co/8771GDj/ema.png'
        },
        {
            name: 'Genius Car',
            id: 1,
            href: 'https://github.com/MOSAREF-HOSEN/react-web-page',
            hrefs: 'https://github.com/MOSAREF-HOSEN/Genias-server',
            btn: 'https://aswame-care-service.firebaseapp.com/',
            img: 'https://i.ibb.co/MZwV65L/Screenshot-109.png'
        },
        
        {
            name: 'Phone henter',
            id: 3,
            href: 'https://github.com/MOSAREF-HOSEN/phone-hunter',
            btn: 'https://pensive-lalande-08763e.netlify.app/',
            img: 'https://i.ibb.co/pZVZDNW/Screenshot-105.png'
        },
        {
            name: 'Andro thomas',
            id: 4,
            href: 'https://github.com/MOSAREF-HOSEN/protfolio-react',
            btn: 'https://monumental-parfait-dbfced.netlify.app/',
            img: 'https://i.ibb.co/SJJDBpt/Screenshot-107.png'
        },
       
        {
            name: 'Ecomarce',
            id: 5,
            img: 'https://i.ibb.co/9c0FQby/Screenshot-95.png'
        },
        {
            name: 'project',
            id: 6,
            href: 'https://github.com/MOSAREF-HOSEN/tshart-maniya',
            btn: 'https://zesty-jalebi-b1ac0a.netlify.app/',
            img: 'https://i.ibb.co/dDP9CP9/Screenshot-93.png'
        },
        {
            name: 'project',
            id: 7,
            btn: 'https://zesty-jalebi-b1ac0a.netlify.app/',
            img: 'https://i.ibb.co/HBKwWLx/Screenshot-94.png'
        },
        {
            name: 'project',
            id: 8,
            img: 'https://i.ibb.co/Twv7Bp4/Screenshot-92.png'
        },
        {
            name: 'Many calculation',
            id: 9,
            href: 'https://github.com/MOSAREF-HOSEN/many-calculation',
            btn: 'https://clever-hypatia-f5014d.netlify.app/',
            img: 'https://i.ibb.co/vwN3KjZ/Screenshot-91.png'
        },
        {
            name: 'cline co',
            id: 2,
            href: 'https://github.com/MOSAREF-HOSEN/cline.co',
            btn: 'https://calm-cendol-0f2b71.netlify.app/',
            img: 'https://i.ibb.co/9pXsgkK/Screenshot-106.png'
        },
    ]

    return (
        <div id='skills' className='mt-36'>
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