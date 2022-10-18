import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiAuthy } from 'react-icons/si';

const Navbar = () => {

  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to="/#"
            className="flex items-center p-2"
          >
            <SiAuthy className="w-8 h-8"/>
            <p className="text-2xl font-Paytone ml-2">FluxAuth</p>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink to ='/home'
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
              {({ isActive }) => (
              <span
                className={
                  `${isActive ? 'text-blue-600' : undefined}`
                }
              >
                Home
              </span>
              )}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink to='/profile'
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
               {({ isActive }) => (
              <span
                className={
                  `${isActive ? 'text-blue-600' : undefined}`
                }
              >
                Profile
              </span>
              )}
              </NavLink>
            </li>
            <li className="flex">
              <NavLink to ='/wallet'
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                {({ isActive }) => (
              <span
                className={
                  `${isActive ? 'text-blue-600' : undefined}`
                }
              >
                Wallet
              </span>
              )}
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex ">
            <NavLink to='/login' className="self-center px-8 py-3 rounded">
            {({ isActive }) => (
              <span
                className={
                  `${isActive ? 'dark:bg-violet-400 dark:text-gray-900 px-8 py-3 font-semibold rounded' : undefined}`
                }
              >
                Sign In
              </span>
              )}
            </NavLink>
            <NavLink to ='/register' className="self-center px-8 py-3 rounded">
            {({ isActive }) => (
              <span
                className={
                  `${isActive ? 'dark:bg-violet-400 dark:text-gray-900 px-8 py-3 font-semibold rounded' : undefined}`
                }
              >
                Sign Up
              </span>
              )}
            </NavLink>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
