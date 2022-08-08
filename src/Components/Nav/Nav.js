import React from "react";
import {NavLink, Link} from 'react-router-dom'
const Nav = () => {
    const Items = 
    <>
        <li className="mr-2" >
            <NavLink to='/' >
                Home
            </NavLink>
        </li>
        <li className="mr-2">
            <NavLink to='/about' >
                About
            </NavLink>
        </li>
        <li className="mr-2">
            <NavLink to='/dashboard' >
                Dashboard
            </NavLink>
        </li>       
        <li>
            <NavLink to='/addservice' >
                Add Service
            </NavLink>
        </li>
        {/* <li>
            <NavLink to='/updateservice' >
                Update Service
            </NavLink>
        </li> */}
        <li>
            <NavLink to='/gps' >
                Gps
            </NavLink>
        </li>
        <li>
            <NavLink to='/user' >
                User
            </NavLink>
        </li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                Items
            }
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Computer Compose</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {
            Items
        }
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/' className="btn">Get started</Link>
      </div>
    </div>
  );
};

export default Nav;
