import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'

const Services = () => {

    const [services , setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='container'>
            <h2 className='text-center mt-4 mb-4' >My Services</h2>
            <div className='d-flex justify-content-center flex-wrap '>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;