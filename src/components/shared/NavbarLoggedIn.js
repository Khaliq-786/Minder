import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";

const NavbarLoggedIn = () => {
  let navigate = useNavigate();
  const context = useContext(profileContext);
  const { profile,getProfile } = context;
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile();
    } else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div className=" border-b bg-gradient-to-br from-yellow-50 to bg-red-100 shadow-lg shadow-black/30 sticky top-0 z-50 w-ful">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <Link to="/" onClick={refreshPage}>
            <div className="mt-4 text-sm inline-flex">
              <h1 className="text-3xl hidden sm:inline-flex lg:text-4xl pl-5 lg:pl-3 font-semibold  cursor-pointer font-fornavbar text-red-black">
                Minder 
              </h1>
              <h1 className="text-3xl sm:2xl md:3xl lg:text-4xl pl-5 lg:pl-3 font-semibold  cursor-pointer font-fornavbar text-red-black">
                💋
              </h1>
            </div>
          </Link>

          {/* {Middle} */}
          <div className="max-w-xs ml-10">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                className="bg-red-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-black focus:border-black rounded-md px-12 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>

          {/* {Right} */}
          <div className="flex place-items-center justify-end space-x-4 cursor-pointer">
            <HomeIcon className="navBtn " />
            <MenuIcon className="h-6 md:hidden cursor-pointer navBtn red" />
            <PaperAirplaneIcon className="navBtn" />
            <HeartIcon className="navBtn" />

            <img
              onClick={() => {
                //Enable dropdown show/hide fucntionality
                let dropdown = document.getElementById("dropdown");
                dropdown.classList.toggle("hidden");
              }}
              src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2012/10/image1.jpg?w=500&ssl=1"
              className="h-10 rounded-full mx-3 inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              alt="Profile pic"
            />
            <div className="font-semibold hidden md:block">{profile.username}</div>
          </div>
          <div
            id="dropdown"
            className="absolute hidden right-48 top-16 bg-gray-200 p-4 px-8 mt-1"
          >
            <div className="flex flex-col divide-y-2 divide-black">
              <div
                onClick={() => {
                  navigate("/MyProfile");
                }}
                className="py-2 cursor-pointer"
              >
                My profile
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/Login");
                }}
                className="py-2 cursor-pointer"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLoggedIn;
