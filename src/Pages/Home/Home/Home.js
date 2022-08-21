import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';
import Bannar from '../Bannar/Bannar'

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Exparts></Exparts>
            
        </div>
    );
};

export default Home;