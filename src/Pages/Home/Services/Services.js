import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    // console.log(services)
    return (
        <div id='services'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className='services-title mt-5'>Our services </h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;