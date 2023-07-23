import React from "react";
import logo from "../Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 text-black primary-text">
        <Link to="/">
          <img
            src={logo}
            className="inline-block relative h-16 mr-2 rounded-lg"
            alt="Minder Logo"
          />
          <div className="inline-block font-body font-bold secondary-text">
            MINDER
          </div>
        </Link>
        <ul className="ml-10 text-lg font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">About us</li>
          <li className="hover:cursor-pointer">Download</li>
        </ul>
        <button className="relative inline-flex items-center justify-center p-0.5 ml-auto mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/Login">Login</Link>
          </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to="/SignUp">Sign Up</Link>
          </span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
