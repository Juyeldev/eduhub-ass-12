import React from 'react';

const All_Inst = ({user}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl ">
            <div className="card-body ">
                <h2 className="card-title text-center">{user?.instructorName}</h2>
                <p>{user?.email}</p>
            </div>
            <figure><img className='rounded-xl mb-4' src={user?.instructorImg} alt="Instructor Image" /></figure>
        </div>
    );
};

export default All_Inst;