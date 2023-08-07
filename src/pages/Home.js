import React from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import Post from "../components/home/Post";

const Home = () => {
  return (
    <>
      <NavbarLoggedIn />
      <div className="h-screen flex justify-center items-center">
        <Post />
      </div>
      <Footer />
    </>
  );
};

export default Home;
