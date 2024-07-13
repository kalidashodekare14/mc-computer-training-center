import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Director from '../../Components/Director/Director';
import Facilities from '../../Components/Facilities/Facilities';
import Counter from '../../Components/Counter/Counter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Director></Director>
            <Facilities></Facilities>
            <Counter></Counter>
        </div>
    );
};

export default Home;