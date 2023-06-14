import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOADE_TOKEN
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();

        formData.append('image', data?.classImg[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                console.log(imgRes)
                if (imgRes.success) {
                    const imgUrl = imgRes.data.display_url;
                    const { className, instructorName, price, email, seats, status } = data;
                    const newClass = { className, instructorName, email, price: parseFloat(price), seats: parseFloat(seats), classImg: imgUrl , status}
                    fetch('http://localhost:5000/classes', {
                        method: 'POST',
                        headers:{
                            'content-type': 'application/json',
                        },
                        body:JSON.stringify(newClass)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.insertedId){
                            reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class Added successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                }
            })
    };



    console.log(image_hosting_token)



    return (
        <div className='w-full'>
            <Helmet>
                <title>EduHub | AddClass</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center'>Add Class Page</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full  ' >
                <div className='flex my-4'>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>

                        </label>
                        <input type="text" {...register("className", { required: true, maxLength: 120 })} placeholder="Class Name" className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full  ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>

                        </label>
                        <input type="text" {...register("instructorName", { required: true, maxLength: 120 })} defaultValue={user?.displayName} readOnly placeholder="Instructor Name" className="input input-bordered w-full " />

                    </div>
                </div>
                <div className='flex my-4'>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>

                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Type here" readOnly defaultValue={user?.email} className="input input-bordered w-full " />

                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat</span>

                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available Seat" className="input input-bordered w-full " />

                    </div>
                </div>
                <div className='flex my-4' >
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>

                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />

                    </div>

                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image</span>

                        </label>
                        <input type="file" {...register("classImg", { required: true })} className="file-input file-input-bordered w-full " />

                    </div>
                </div>
                <input type="text" readOnly defaultValue='pending' {...register("status", { required: true })} className="file-input file-input-bordered w-full hidden " />

                <div className=' w-full flex justify-center'>
                    <input className='px-40 rounded my-4 py-3 btn-primary ' type="submit" value="Add" />

                </div>
            </form>
        </div>
    );
};

export default AddClass;