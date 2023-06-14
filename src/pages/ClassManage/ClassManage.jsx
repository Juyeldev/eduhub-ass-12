import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ClassManage = () => {
    const {user, loading}= useContext(AuthContext)
    const [disabled, setDisabled]= useState(false)

    const { data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes/mangeClass');
            return res.data;
        },
        enabled: !loading && !!user?.email,
    })




    const handleApprovedStatus = (_id) => {
        //     console.log(id);
        fetch(`http://localhost:5000/classes/approved/${_id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
                    if(data.modifiedCount>0){
                        setDisabled(true)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Approved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
            
          });
      };
    const handleDenyStatus = (_id) => {
        //     console.log(id);
        fetch(`http://localhost:5000/classes/deny/${_id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
                    if(data.modifiedCount>0){
                        setDisabled(true)
                        
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class denied now',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
            
          });
      };


    return (
         <div className='w-full '>
            <Helmet>
                <title>EduHub | Manage Class</title>
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
                                <th>Instructor Name</th>                   
                                <th>Instructor Email</th>                   
                                <th> Seat</th>
                                <th>Price</th>
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
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold ">{item.className}</div>
                                    </td>

                                    <td >{item.instructorName}</td>
                                    <td>
                                    {item.email}
                                    </td>
                                    <td>
                                    {item.seats}
                                    </td>
                                    <td>
                                    {item.price}
                                    </td>
                                    <td>
                                        <div className='grid grid-cols-1 gap-2'>
                                            {
                                              item.status=='pending'?  <button className="btn btn-ghost  btn-xs bg-yellow-600   text-white">Pending</button>:
                                              <button disabled className="btn btn-ghost  btn-xs bg-yellow-600   text-white">Pending</button>
                                            }
                                            {
                                                item?.status!=='approve'? <button onClick={()=>handleApprovedStatus(item._id)}  className="btn btn-ghost btn-xs bg-green-600 text-white">Approved</button>:
                                                <button disabled className="btn btn-ghost btn-xs bg-green-600 text-white">Approved</button>
                                            }
                                            {
                                                item?.status!=='deny'? <button onClick={()=>handleDenyStatus(item._id)} className="btn btn-ghost btn-xs bg-red-600  text-white">Deny</button>:
                                                <button disabled  className="btn btn-ghost btn-xs bg-red-600  text-white">Deny</button>
                                            }
                                        </div>
                                    </td>  
                                    <td>
                                    <button className="btn btn-ghost  btn-xs bg-blue-600   text-white">Feedback</button>
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


export default ClassManage;