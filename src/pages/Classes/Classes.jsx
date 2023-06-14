import React, { useState } from 'react';

import AllClass from './AllClass';
import useClass from '../../hooks/useClass';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Classes = () => {

    const [classes, setClass] = useState([])
    
    useEffect(()=>{
        fetch('https://assignment-12-server-xi-fawn.vercel.app/classes/home')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setClass(data)
        })
    },[])


    return (
       <div>
        <Helmet>
                <title>EduHub | Classes</title>
            </Helmet>
        <h2>All Class</h2>
         <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 my-32'>
         
            {
                classes.map(singleClass=> <AllClass
                key={singleClass._id}
                singleClass={singleClass}></AllClass>)
            }
        </div>
       </div>
    );
};

export default Classes;