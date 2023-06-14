import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useClass = () => {
    const [classes, setClasses]= useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('https://assignment-12-server-xi-fawn.vercel.app/classes')
    //     .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setLoading(false)
    //             setClasses(data);
    //         })
    // },[])

const  {data, isLoading:loading}=useQuery({
    queryKey:['class'],
    queryFn: async()=>{
        const res= await fetch ('https://assignment-12-server-xi-fawn.vercel.app/classes')
        return res.json();
    }

})

    return [data, loading]
};

export default useClass;