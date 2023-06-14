import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";

import { useContext } from 'react';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
   
    
    
    const navItems = <>
        <li className='font-bold '><Link to='/'>Home</Link></li>
        <li className='font-bold '><Link to='/instructors'>  Instructors </Link></li>
        <li className='font-bold '><Link to='/classes'>Classes</Link></li>
       


        {
            user ? <> <li className='font-bold '><Link to='/dashboard'>Dashboard</Link></li>
                <img className=' rounded-full w-[50px] ' src={user.photoURL} />

                <li className='font-bold ' onClick={logOut}><Link to='/login'>Log Out</Link></li></> :
                <li className='font-bold '><Link to='/login'>Login</Link></li>
        }

    </>

    return (
        <div>
            <div className="navbar fixed z-10  max-w-7xl mx-auto bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-32">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"></a>
                    {/* <Link><img className='w-[80px]' src={} alt="" /></Link> */}
                    <h1 className='w-[200px] font-bold text-3xl'>Edu <span className='text-red-600 inline'>Hub</span></h1>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};



export default Navbar;