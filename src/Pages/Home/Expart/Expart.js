import React from 'react';
import './Expart.css'


const Expart = ({ expart }) => {
    const { name, img } = expart
    // console.log(expart)
    return (
        <div id='experts' className='g-2 col-sm-12 col-md-6 col-lg-4'>
             <div class="card " style={{ width: "18rem" }}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        </div>
       
    )
};

export default Expart;