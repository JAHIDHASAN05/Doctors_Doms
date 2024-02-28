import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices]= useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/services')
            .then(res=> res.json())
            .then(data=> setServices(data))
    },[])
    return (
        <div className='mt-6 mb-10'>
            <div className='text-center'>
                <h1 className='text-error text-xl font-bold'>services</h1>
                <h1 className='font-bold text-4xl mb-2'>Our Service Area</h1>
                <p className='text-sm md-3'>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  place-items-center w-full'>
           {
                services.map(service=> <ServicesCard
                key={service._id}
                service={service}
                >

                </ServicesCard>)
            }
           </div>

        </div>
    );
};

export default Services;