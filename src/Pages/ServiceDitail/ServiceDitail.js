import React from 'react';
import {useParams} from 'react-router-dom'

const ServiceDitail = () => {
    let {serviceId}=useParams();
    return (
        <div>
            <h1 className=' mt-5'>Welcome to detail :{serviceId}</h1>
           
        </div>
    );
};

export default ServiceDitail;