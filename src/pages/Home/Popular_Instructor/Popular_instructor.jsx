import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Popular_instructor = () => {

    const [instructor, setInstructor] =useState()

   useEffect(()=>{
    fetch('https://assignment-12-server-xi-fawn.vercel.app/users/home')
    .then(res=>res.json())
    .then(data=>{
        const user= data.filter(user=>user?.role=='instructor')
        setInstructor(user)
    })
   },[])


    return (
        <div>
            <h2>Popular Instructor</h2>
            
        </div>
    );
};

export default Popular_instructor;