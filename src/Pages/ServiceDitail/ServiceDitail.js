import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const ServiceDitail = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:8000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>Your are booked to :</h1>
            <div>
                <h1 className=' mt-5'>{service.name}</h1>
            </div>


        </div>
    );
};

export default ServiceDitail;