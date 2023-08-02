import React from "react";
import Navbar from "../components/shared/Navbar";
import Carousel from "../components/landing-page/Carousel";
import Intro from "../components/landing-page/Intro";
import Footer from "../components/shared/Footer";

const LandingPage = () => {
  return (
    <>
        <Navbar />  
        <Carousel/>
        <Intro/>
        <Footer/>
    </>
  );
};

export default LandingPage;
