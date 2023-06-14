import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Selected = ({item, index,classes, setClass}) => {

const{_id}= item;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining= classes.filter(deleteClass=> deleteClass._id!==_id);
                            setClass(remaining)
                        }
                    })
            }
        })
    }


    return (
        <>
            <tr >
                <td>
                    {index + 1}
                </td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={item?.classImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    <div className="font-bold ">{item?.className}</div>
                </td>

                <td >${item.price}</td>

                <td>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost  btn-xs bg-blue-700   text-white">Delete</button>
                </td>
                <td>
                    <Link to='/dashboard/payment'><button className="btn btn-ghost  btn-xs bg-blue-600   text-white">Pay</button></Link>
                </td>

            </tr>
        </>
    );
};

export default Selected;