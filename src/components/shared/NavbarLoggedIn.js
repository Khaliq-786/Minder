import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import profileContext from "../../context/profiles/profileContext";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const NavbarLoggedIn = () => {
  const context = useContext(profileContext);
  const { profile, setProfile } = context;
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  return (
    <>
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <Link to="/" onClick={refreshPage}>
            <div className="mt-3 text-sm">
              <h1 className="text-3xl lg:text-4xl pl-5 lg:pl-3 font-semibold cursor-pointer">
                Minder
              </h1>
            </div>
          </Link>

          {/* {Middle} */}
          <div className="max-w-xs ml-20">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black rounded-md px-12 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          {/* {Right} */}
          <div className="flex place-items-center justify-end space-x-4">
            <HomeIcon className="navBtn" />
            <MenuIcon className="h-6 md:hidden cursor-pointer navBtn" />
            <PaperAirplaneIcon className="navBtn" />
            <HeartIcon className="navBtn" />

            <img
              src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg?w=500&ssl=1"
              className="h-10 rounded-full cursor-pointer navBtn"
            />
            <div className="font-semibold">{profile.username}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLoggedIn;
