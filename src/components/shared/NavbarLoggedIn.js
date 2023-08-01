import React from "react";
import logo from "../../Logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import profileContext from "../../context/profiles/profileContext";

const NavbarLoggedIn = () => {
  const context = useContext(profileContext);
  const { profile, setProfile } = context;
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  return (
    <>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 bg-gradient-to-br from-slate-700 via-slate-400 to-slate-100 text-black primary-text">
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
        <Link to="/" onClick={refreshPage}>
          <div className="inline-block text-lg mr-6 font-bold secondary-text">
            {profile.username}
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarLoggedIn;
