import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import Feed from "../components/shared/Feed";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, []);
  

  return (
    <>
      <NavbarLoggedIn />
      <div className=" bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 h-screen flex justify-center items-center">
        <Feed/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
