import React from 'react';
import { Link } from 'react-router-dom';

const P_Class = ({ PClas }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={PClas?.classImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{PClas?.className}</h2>
                <p>{PClas?.instructorName} </p>
                <div className="card-actions">
                   <Link to='/classes'> <button className="btn btn-primary">View More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default P_Class;