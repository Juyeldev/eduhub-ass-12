import React, { useState } from 'react';
import { useEffect } from 'react';
import All_Inst from './All_Inst';
import { Helmet } from 'react-helmet';







const Instructor = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('inst.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>EduHub | Instructor</title>
            </Helmet>
           <div >
           <h1 className=''>All Instructor</h1>
           </div>
           
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-32'>
                {
                    users.map(user=> <All_Inst
                    key={user._id}
                    user={user}></All_Inst>)
                }
            </div>
        </div>
    );
};

export default Instructor;