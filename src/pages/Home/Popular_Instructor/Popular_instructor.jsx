import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Popular_instructor = () => {

    const [instructor, setInstructor] =useState()

   useEffect(()=>{
    fetch('http://localhost:5000/users/home')
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