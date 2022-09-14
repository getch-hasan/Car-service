import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services,setServices]=useServices();
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are you sure for delete this product');
        if(proceed){
            const url=`http://localhost:8000/service/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
            const remaining=services.filter(service=> service._id !==id)
            setServices(remaining);
            });


        }

    }
    return (
        <div className='mt-5'>

            <h1>This is for manage your service</h1>
            {
                services.map(service => <div
                key={service._id}> <h4>{service.name}<button onClick={()=>handleDelete(service._id)}>X</button></h4> </div>)
            }
            
        </div>
    );
};

export default ManageServices;