import React from 'react';
import './service.css'
import { useNavigate } from 'react-router-dom'
const Service = ({ service }) => {
    const navigate = useNavigate();
    const { _id, name, price, img, description } = service
    const serviceDetail = (id) => {
        navigate(`/service/${id}`)


    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => serviceDetail(_id)}>Book:{name}</button>


        </div>
    );
};

export default Service;