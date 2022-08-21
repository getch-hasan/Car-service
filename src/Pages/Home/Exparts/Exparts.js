import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';
const exparts = [
    { id: 1, name: 'will smit', img: expart1 },
    { id: 2, name: 'will jack', img: expart2 },
    { id: 3, name: 'will mac', img: expart3 },
    { id: 4, name: 'will tach', img: expart4 },
    { id: 5, name: 'will black', img: expart5 },
    { id: 6, name: 'will white', img: expart6 },
]
const Exparts = () => {

    return (
        <div className='container'>
            <h1 className='text-primary mt-4 text-center'>Our Experts</h1>
            <div class="row ">
                {
                    exparts.map(expart => <Expart
                        expart={expart}
                        key={expart.id}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;