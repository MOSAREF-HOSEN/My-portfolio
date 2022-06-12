import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItems = <>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/'>Home</Link></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/about'>About</Link></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/skills'>Skills</Link></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/review'>Review</Link></li>
        <li className='hover:bg-green-500 text-orange-400 uppercase font-semibold rounded'><Link to='/contact'>contact</Link></li>
        {/* {
            user ? <li><Link to='/dashbord'>Dashbord</Link></li> : ''

        }
        <li>{user ? <button onClick={logout} className="btn btn-ghost">sign Out</button> : <Link to='/signup'>Login</Link>}</li> */}
    </>
    return (
        <div className="navbar bg-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-green-500">
                        {manuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-green-700 text-2xl font-serif ">GOLAP MOSTOFA</a>
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