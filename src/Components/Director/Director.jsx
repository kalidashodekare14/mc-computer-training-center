import React from 'react';
import directorImg from '../../assets/director.png'
import ButtonBlack from '../../Hooks/Button/ButtonBlack';

const Director = () => {
    return (
        <div className='lg:mx-32 my-20 flex justify-center  items-center space-x-10'>
            <div>
                <img className='w-full' src={directorImg} alt="" />
            </div>
            <div className='space-y-3'>
                <h1 className='font-bold text-4xl'>Director</h1>
                <h2 className='text-2xl text-[#797979] '>Ashawini Kumar Roy</h2>
                <p className='w-[80%]'>Welcome to MC Computer and Training Center. I am Ashawini Kumar Roy, the Director. With over 10 years of experience in computer science and a passion for education, I am dedicated to providing top-notch training to help you excel in your tech career.</p>
                <ButtonBlack>Learn More</ButtonBlack>
            </div>
        </div>
    );
};

export default Director;