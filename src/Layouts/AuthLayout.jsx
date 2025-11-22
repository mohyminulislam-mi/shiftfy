import React from 'react';
import Logo from '../pages/Shared/Logo';
import { Outlet } from 'react-router';
import DelivaryImg from "../assets/authImage.png"

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo />
            <div className='flex flex-col-reverse lg:flex-row py-10'> 
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={DelivaryImg} alt="Image" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;