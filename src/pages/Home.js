import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Post from "../components/home/Post"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <Post/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
