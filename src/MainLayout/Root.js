import React from 'react';
import { Outlet } from 'react-router-dom';
import Features from '../Pages/Features';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Root;