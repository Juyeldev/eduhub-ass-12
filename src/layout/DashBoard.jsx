import React, { useContext } from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';



const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    // TODO

    console.log(user)

    return (
        <div >
            <Helmet>
                <title>EduHub | Dashboard</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet />

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-green-600">
                    <h2 className='text-2xl font-bold text-center my-4'><Link to='/'>Home</Link></h2>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">


                        {
                            isAdmin && <>
                                <li> <NavLink to='/dashboard/manages_Class'> Manage Class </NavLink></li>
                                <li> <NavLink to='/dashboard/allUser'> Manage User </NavLink></li>
                                <div className="divider"></div></>
                        }
                        {isInstructor &&
                            <>
                                <li> <NavLink to='/dashboard/myClasses'> My Classes </NavLink></li>
                                <li> <NavLink to='/dashboard/addClass'> Add Class</NavLink></li>
                                <div className="divider"></div>
                            </>
                        }
                        {
                            !isAdmin && !isInstructor && <>
                                <li> <NavLink to='/dashboard/selected'> Selected Class</NavLink></li>
                                <li> <NavLink to='/dashboard/enrolled'> Enrolled</NavLink></li>
                                <li> <NavLink to='/dashboard/payment'> Payment</NavLink></li>
                                <div className="divider"></div>
                            </>
                        }
                        <div>
                            <div className='flex justify-center'>
                                <img className='rounded-full center' src={user.photoURL} alt="" />
                            </div>
                            <h1 className='text-2xl text-center'>{user?.displayName}</h1>
                            <p className='text-1xl text-center'> {user?.email}</p>
                        </div>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;