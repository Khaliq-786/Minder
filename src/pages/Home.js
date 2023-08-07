import React from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import Feed from "../components/shared/Feed";

const Home = () => {
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
