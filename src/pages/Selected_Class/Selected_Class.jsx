import React from 'react';
import { useContext } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { SignInMethod } from 'firebase/auth';
import Selected from './Selected';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Selected_Class = () => {
    // const [classes, setClasses] = useState([])
    const { user, loading } = useContext(AuthContext)
    const [classes, setClass]= useState([])
    // const [axiosSecure] = useAxiosSecure()

    // const { data: classes = [], refetch } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/carts?email=${user?.email}`
    //         );
    //         console.log('res from axios', res)
    //         return res.data;
    //     },
    //     enabled: !loading && !!user?.email,
    // })

    useEffect(()=>{
        fetch(`http://localhost:5000/carts?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setClass(data)
        })
    },[])

    




    return (
        <div className='w-full'>
            <Helmet>
                <title>EduHub | Selected Class</title>
            </Helmet>
            <h2>My All Classes</h2>
            <div className="w-full">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>payment</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <Selected
                                key={item._id}
                                item={item}
                                index={index}
                                setClass={setClass}
                                classes={classes}
                                ></Selected>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Selected_Class;