import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const AllUsers = () => {
const [disabled, setDisabled]= useState(false)
const {user, loading}= useContext(AuthContext)

const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const res = await axios.get('http://localhost:5000/users');
        return res.data;
    },
    enabled: !loading && !!user?.email,
})





//     const { data: userse= [], refetch } = useQuery(['users'], async () => {
//         const res = await fetch(`http://localhost:5000/users`)
//         return res.json();
        
//     })
// const {_id}=userse;


    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                setDisabled(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                refetch();
                setDisabled(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleUserDelete=(_id)=>{
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }



    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === 'admin' ? <button disabled className="btn btn-ghost bg-orange-600  text-white">Admin</button> :
                                 <button  onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white">Admin</button> 
                                
                                    
                                }</td>
                                <td>{user?.role === 'instructor' ? <button disabled className="btn btn-ghost bg-orange-600  text-white">Instructor</button> :
                                 <button  onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white">Instructor</button> 
                                
                                    
                                }</td>
                                <td><button onClick={() => handleUserDelete(user?._id)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;