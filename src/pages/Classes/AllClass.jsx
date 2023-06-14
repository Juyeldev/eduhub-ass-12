import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';


const AllClass = ({ singleClass }) => {
    const { _id, className, classImg, instructorName, price, studentNumber,seats } = singleClass
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [disabled, setDisabled] = useState(false)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
console.log(singleClass)


    const handleSelected = () => {
        // console.log(singleClass)
        if (user && user.email) {
            const selectItem = { classId: _id, className, classImg, instructorName, price, studentNumber, email: user.email }
            fetch('https://assignment-12-server-xi-fawn.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setDisabled(true)
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Selected Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Class Selected Successfully',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-base-400 shadow-2xl mt-12">
            <figure><img src={classImg} alt="class image" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Class Name: {className} </h2>
                <p>Instructor Name: {instructorName} </p>
                <p>Price: ${price} </p>
                <p>Available Seats: {seats} </p>
                <div className="card-actions justify-end">
                    {
                        isAdmin && isInstructor ? <button disabled className="btn btn-primary">Select</button> :
                            <button onClick={() => handleSelected(singleClass)} className="btn btn-primary">Select</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClass;