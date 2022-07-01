import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItems = <>
        <a href="#about"> about </a>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><a href='#/'>Home</a></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><a href='#about'>About</a></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><a href='#skills'>Skills</a></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/'>Review</Link></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><a href='#contac'>contact</a></li>

    </>
    return (
        <div className="navbar bg-gray-800 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-green-500">
                        {manuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-transparent bg-clip-text text-yellow-400 text-2xl font-serif ">Mosaref Hosen</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;