import React from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
import temppic from "../images/bgm1.jpg";

const MyProfile = () => {
  return (
    <>
      <NavbarLoggedIn />
      <div className="border-2 border-black w-4/6 mx-auto h-screen p-10">
        <div className="flex w-full justify-center items-center">
          <img src={temppic} alt="Profile Pic" className="w-40 rounded-full" />
        </div>
        <div className="text-5xl font-semibold w-full text-center mt-7">
          khaliq786
        </div>
        <div className="w-full flex justify-center my-5 mt-16">
          <div className="mx-10 border-2 border-dotted border-slate-500 rounded-lg relative right- py-3 px-10">Khaliq</div>
          <div className="mx-10 border-2 border-dotted border-slate-500 rounded-lg relative left- py-3 px-10">Hussain</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
