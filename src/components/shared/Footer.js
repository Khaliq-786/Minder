import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  function refreshPage() {
    let location = window.location.pathname;
    if (location === "/") window.location.reload(false);
  }
  return (
    <>
      <footer class="w-full bg-black text-white shadow dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <Link to="/" onClick={refreshPage} class="hover:underline">
              MINDER™
            </Link>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
              <Link to="/AboutUs" class="mr-4 hover:underline md:mr-6 ">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/TnC" class="mr-4 hover:underline md:mr-6">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/Download" class="hover:underline">
                Download
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
