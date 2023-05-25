import React from 'react';
import Navber from '../Pages/Sharepage/Navber';
import { Outlet } from 'react-router-dom';
import Fotter from '../Pages/Sharepage/Fotter';


const Main = () => {
    return (
        <div className=' container mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;