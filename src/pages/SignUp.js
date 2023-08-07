import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  function errormessage(message = "Internal server error") {
    //Function to display error messages recieved from backend server
    let dropdown = document.getElementById("errormessage");
    dropdown.innerHTML = message;
    dropdown.classList.toggle("hidden");
  }

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let pw1 = document.getElementById("password");
    let pw2 = document.getElementById("confirmpassword");
    if (pw1.value !== pw2.value) {
      //Checking for password and confirm password are same or not
      errormessage("Password and Confirm Password must be same !");
      return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/CreateProfile");
    } else {
      errormessage(json.error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-gradient-to-br from-red-200 via-red-300 to-yellow-200">
        <div className="p-5 mb-8 rounded-lg mt-28 flex justify-center items-center h-5/6 w-9/12">
          <form
            className="w-3/6 flex flex-col required:border-red-500"
            onSubmit={handleSubmit}
          >
            <div className="text-5xl tex justify-center items-center align-middle mb-10 mx-auto font-semibold text-gray-950">
              SignUp
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={credentials.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={credentials.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
                minLength={8}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmpassword"
                className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                value={credentials.confirmpassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChange}
                minLength={8}
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="pnc-check"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="pnc-check"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I confirm that i've read all privacy policies and agree to all
                of them.
              </label>
            </div>
            <div
              className="text-sm text-center font-light text-red-950 pb-3"
              id="passwroddetails"
            >
              <ul className="inline-block list-disc">
                <li className="text-left">Password must be of minimum length 8</li>
                <li className="text-left">Password must have atleast 1 uppercase letter</li>
                <li className="text-left">Password must have atleast 1 lowercase letter</li>
                <li className="text-left">Password must have atleast 1 number</li>
                <li className="text-left">Password must have atleast 1 special character</li>
              </ul>
            </div>
            <div
              className="text-sm text-center font-bold text-red-950 pb-3 hidden"
              id="errormessage"
            ></div>
            <button className="flex justify-center items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="w-full flex justify-center items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Signup
              </span>
            </button>
            <button
              type="button"
              className="mt-4 flex justify-center items-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              SignUp with Google
            </button>
            <div className="text-black font-bold m-auto">
              Already registered ?
              <Link className="ml-4" to="/Login">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
