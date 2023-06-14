import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import P_Class from './P_Class';

const Popular_Class = () => {
    const [classes, setClass] = useState([])
    
    useEffect(()=>{
        fetch('https://assignment-12-server-xi-fawn.vercel.app/classes/home')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const sortedClasses = data.sort((a, b) => b.students - a.students);
            setClass(sortedClasses.slice(0, 6))
        })
    },[])



    return (
        <div>
            <h2 className='text-3xl text-center font-bold my-12'>Popular Class</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                 classes.map(PClas=> <P_Class
                 key={PClas._id}
                 PClas={PClas}></P_Class>)   
                }
            </div>
        </div>
    );
};

export default Popular_Class;