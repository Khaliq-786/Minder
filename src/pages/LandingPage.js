import React from "react";
import Navbar from "../components/shared/Navbar";
import Carousel from "../components/landing-page/Carousel";
import Intro from "../components/landing-page/Intro";
import Footer from "../components/shared/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="h-full bg-gradient-to-br from-red-400 via-red-300 to-yellow-200">
        <Navbar />  
        <Carousel/>
        <Intro/>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
