
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useClass from '../../hooks/useClass';
import { FaTrashAlt } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext)

const [axiosSecure]= useAxiosSecure()
    

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?email=${user?.email}`
            );
            console.log('res from axios', res)
            return res.data;
        },
        enabled: !loading && !!user?.email,
    })

    // const { data: classes = [] } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/classes?${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${token}`
    //             }
    //         });
    //         return res.data;
    //     },
    //     enabled: !loading && !!user?.email,
    // })

    console.log(classes)

    return (
        <div className='w-full'>
            <Helmet>
                <title>EduHub | My Class</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center'>My All Classes</h2>
            <div className="w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Class Image</th>
                                <th>Price</th>
                                <th>Enrolled</th>
                                <th>Feedback</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        <div className="font-bold ">{item.className}</div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    

                                    <td >${item.price}</td>

                                    <td className=" text-center">
                                    {item.enrolled ? enrolled: 0}
                                    </td>
                                    <td>
                                    <button className="btn btn-ghost  btn-xs bg-blue-600   text-white">Feedback</button>
                                    </td>
                                    <td>
                                    <button className="btn btn-ghost  btn-xs bg-blue-700   text-white">Update</button>
                                    </td>
                                    <td>
                                        {item?.status ? item?.status:'Pending'}
                                    </td>       
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClasses;