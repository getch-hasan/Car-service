import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        //console.log(data)

        const url = `http://localhost:8000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    };
    return (
        <div className='add'>
            <h1>please add a service :</h1>
            <div >
                <form className='mx-auto w-50 d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input id='input' placeholder='name' {...register("Name", { required: true, maxLength: 20 })} />
                    <textarea id='input' placeholder='description' {...register("description")} />
                    <input id='input' placeholder='price' type="number" {...register("price",)} />
                    <input id='input' placeholder='photo' type="text" {...register("img",)} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;