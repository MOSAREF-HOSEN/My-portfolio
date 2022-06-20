import React from 'react';
import pop from '../../img/3239444.webp'
const Contact = () => {
    return (
        <div id='about' style={{
            background: `url(${pop})`
        }} className='bg-primary px-10 py-14 mt-12'>
            <div className='text-center pb-14 '>
                <p className='text-xl font-bold text-transparent text-green-500'>
                    Contact Us
                </p>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5 text-black'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md bg-blue-300'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md bg-blue-300'
                />
                <textarea
                    className='textarea w-full max-w-md bg-blue-300'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className='primary-btn btn btn-outline btn-succes rounded'>submit</button>
            </div>
           
        </div>
    );
};

export default Contact;