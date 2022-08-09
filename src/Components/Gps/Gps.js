import React from 'react';
import { NavLink } from "react-router-dom";
const Gps = () => {
    return (
        <div>
            
            <h2 className='text-3xl' > government primary school helper </h2>
            <NavLink to='/casualleave' className="link link-primary"> নৈমিত্তিক ছুটি </NavLink>
        </div>
    );
};

export default Gps;