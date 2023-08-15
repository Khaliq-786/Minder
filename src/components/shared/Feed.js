import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";

const Feed = () => {
  let navigate = useNavigate();
  const host = "http://localhost:5000";
  let slidesinitial = [
    {
      image: one,
      first_name: "Anna Kubov",
      last_name: "",
      age: "24",
      dist: "10 miles away",
      gender: "She/Her",
      preference: "Prefers men",
      bio: "A career orineted woman who loves swimming ,fucking and masturbation. ",
    },
    {
      image: two,
      first_name: "Alisha Ray",
      last_name: "",
      age: "24",
      dist: "10 miles away",
      gender: "She/Her",
      preference: "Prefers men",
      bio: "A career orineted woman who loves swimming ,fucking and masturbation. ",
    },
    {
      image: three,
      first_name: "Naomi Dane",
      last_name: "",
      age: "24",
      dist: "10 miles away",
      gender: "She/Her",
      preference: "Prefers men",
      bio: "A career orineted woman who loves swimming ,fucking and masturbation. ",
    },
    {
      image: four,
      first_name: "Leslie Grey",
      last_name: "",
      age: "24",
      dist: "10 miles away",
      gender: "She/Her",
      preference: "Prefers men",
      bio: "A career orineted woman who loves swimming ,fucking and masturbation. ",
    },
    {
      image: five,
      first_name: "Alishba Mallik",
      last_name: "",
      age: "24",
      dist: "10 miles away",
      gender: "She/Her",
      preference: "Prefers men",
      bio: "A career orineted woman who loves swimming ,fucking and masturbation. ",
    },
  ];

  const [slides, setSlides] = useState(slidesinitial);
  //Get All profile data except your own
  const getAllProfile = async () => {
    //API call
    const response = await fetch(`${host}/api/profile/getallprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      setSlides(json.profiles);
    } else {
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsFlipped(false); // Reset flip state when changing slide
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsFlipped(false); // Reset flip state when changing slide
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped); // Toggle flip state on image click
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllProfile();
      // console.log(slides);
    } else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, [slides]);
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center h-full relative w-full">
        <div
          style={{
            width: "30vw",
            height: "80vh",
            // borderRadius: "20px",
            transition: "transform 0.6s ease",
            position: "relative",
            // transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Apply the flip effect
          }}
          id="pop-up1"
          className="absolute left-0 border-red-200 border-double mr-60 w-1/2 h-4/5 rounded-2xl bg-gradient-to-br from-red-150 via-red-150 to-yellow-50 duration-500 shadow-2xl shadow-black/100 inline-grid items-top"
        >
          <span className="w-full items-center text-center mt-6 text-red-400 text-4xl">
            CURRENT MATCHES 💓
          </span>
          <span className="cursor-pointer hover:scale-125 transition-all duration-150 ease-out w-full  items-center text-center mt-10 text-red-400 text-2xl">
            Leslie Grey
          </span>
          <span className="cursor-pointer hover:scale-125 transition-all duration-150 ease-out w-full  items-center text-center mt-6 text-red-400 text-2xl">
            Alisha Ray
          </span>
          <span className="cursor-pointer hover:scale-125 transition-all duration-150 ease-out w-full items-center text-center mt-6 text-red-400 text-2xl">
            Anna Kubov
          </span>
        </div>

        <div
          id="pop-up2"
          className="flex justify-center items-center h-4/5 w-1/3 relative group"
        >
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute left-0.5 text-2xl rounded-full m-2 p-2 z-10 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Card Container */}
          <div
            onClick={handleImageClick}
            style={{
              // width: "30vw",
              // height: "80vh",
              // borderRadius: "20px",
              // transition: "transform 0.6s ease",
              // position: "relative",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Apply the flip effect
            }}
            className={`w-full h-full rounded-2xl relative transform transition-transform ease-in-out duration-500`}
          >
            {/* Front side (Image) */}
            <div
              style={{
                backgroundImage: `url(http://localhost:5000/${slides[currentIndex].image})`,
              }}
              className={`${
                isFlipped ? "hidden" : "block"
              } bg-cover bg-center bg-no-repeat w-full h-full rounded-2xl shadow-2xl shadow-black/100 text-center flex justify-center items-center `}
            >
              <div
                id=" short_bio"
                className=" hidden group-hover:block absolute bottom-0 p-10 mx-auto text-white"
              >
                <span className=" overflow-hidden text-lg">
                  {slides[currentIndex].first_name +
                    " " +
                    slides[currentIndex].last_name}
                </span>
                <span className=" ml-5 text-lg overflow-hidden hidden lg:inline-flex">
                  {slides[currentIndex].age}
                </span>
                <span className=" ml-28 text-sm overflow-hidden hidden 2xl:inline-flex">
                  {slides[currentIndex].gender}
                </span>
              </div>
            </div>

            {/* Back side (Text) */}
            <div
              style={{
                display: isFlipped ? "block" : "none",
                textAlign: "center",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: "#f2f2f2",
                padding: "20px",
                boxSizing: "border-box",
                transform: "rotateY(180deg)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              className="shadow-2xl shadow-black/100 bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 "
            >
              {/* <div class="py-50">{slides[currentIndex].text}</div> */}
              <div className="mt-[5rem] w-full">
                <p className=" text-red-300 text-lg lg:text-3xl mt-6 font-bold overflow-clip">
                  {slides[currentIndex].name}
                </p>
                <p className=" text-red-300 text-lg lg:text-3xl mt-6 overflow-clip ">
                  {slides[currentIndex].age}
                </p>
                <p className=" text-red-300 text-lg lg:text-3xl mt-6 overflow-clip">
                  {slides[currentIndex].gender}
                </p>
                <p className=" text-red-300 text-lg lg:text-3xl mt-6 overflow-clip">
                  {slides[currentIndex].preference}
                </p>
                <p className=" text-red-300 text-lg lg:text-3xl mt-6  hidden lg:block">
                  {slides[currentIndex].bio}
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute right-0.5 text-2xl rounded-full p-2 m-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
