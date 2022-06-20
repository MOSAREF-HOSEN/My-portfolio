import React from 'react';

const Cart = ({pd}) => {
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000" class="  bg-[#354259] card1 rounded">
            <figure><img className='rounded-lg' src={pd.img} alt="Shoes " /></figure>
            <div class="card-body">
                <h2 class="text-center text-white text-2xl">{pd.name}</h2>
                <p className='text-white'>If a dog chews shoes whose shoes does he choose?</p>
               <div className='flex justify-around text-white'>
                <a className='text-green-300 uppercase' href="">client repo</a>
                <a className='text-green-300 uppercase' href=""> server repo</a>
               </div>
               <button className='primary-btn mt-12'><a href='' target="_blank" data-aos="zoom-in" >veiwe project</a></button>
            </div>
        </div>
    );
};

export default Cart;