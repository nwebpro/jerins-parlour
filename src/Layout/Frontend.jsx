import React from 'react';
import Header from '../Pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'

const Frontend = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Frontend;