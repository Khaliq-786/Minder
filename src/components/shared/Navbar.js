import React from "react";
import logo from "../../Logo.png";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Navbar = () => {
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  return (
    <>
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <div className="relative hidden lg:inline-grid w-24 cursor-pointer mt-1 p-3">
            <img
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer mt-1 p-3">
            <img
              src="../Logo.png "
              className="h-10 rounded-full cursor-pointer"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* {Middle} */}
          <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5" text-gray-500 />
              </div>
              <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black rounded-md"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          {/* {Right} */}
          <div className="flex place-items-center justify-end space-x-4">
            <HomeIcon className="navBtn" />
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
            <PaperAirplaneIcon className="navBtn" />
            <HeartIcon className="navBtn" />

            <img
              src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg?w=500&ssl=1"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 bg-gradient-to-br from-slate-700 via-slate-400 to-slate-100 text-black primary-text">
    <Link to="/" onClick={refreshPage}>
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
      <li className="hover:cursor-pointer">
        <Link to="/" onClick={refreshPage}>
          Home
        </Link>
      </li>
      <li className="hover:cursor-pointer">
        <Link to="/AboutUs">About us</Link>
      </li>
      <li className="hover:cursor-pointer">
        <Link to="/Download">Download</Link>
      </li>
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
  </div> */
}
