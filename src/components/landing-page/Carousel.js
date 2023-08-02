import React from "react";
import background from "../../background.jpg";

const Carousel = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen items-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <img className="w-full h-full" src={background} alt="Dating images here" />
      </div>
      <div className="relative bottom-0 z-1">
        <div className="cursor-help text-center text-lg p-5 m-5 rounded-md border-2 border-slate-300 border-double font-mono text-white">
          Are you also searching for someone to date in your college but
          cannot find anyone?
        </div>
        <div className="cursor-help text-center text-lg p-5 m-5 rounded-md border-2 border-slate-300 border-double font-mono text-white">
          Don't worry! We are here for you with the perfect solution to your
          stagnant dating life!
        </div>
      </div>
    </div>
  );
};

export default Carousel;
