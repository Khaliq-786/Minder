import React from "react";
import dating1 from "../../dating1.jpg";

const Carousel = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center mt-8">
        <div className="w-4/6 h-9/12 border-8 border-slate-600 border-double rounded-lg overflow-hidden">
          <img className="" src={dating1} alt="Dating images here" />
        </div>
        <div className="text-center text-lg p-5 m-5 rounded-md border-2 border-slate-300 border-double font-mono text-white">
          Are you also searching for someone to date in your college but cannot find anyone ?
        </div>
        <div className="text-center text-lg p-5 m-5 rounded-md border-2 border-slate-300 border-double font-mono text-white">
          Don't worry ! We are here for you with the perfect solution to your stagnant dating life !
        </div>
      </div>
    </>
  );
};

export default Carousel;
