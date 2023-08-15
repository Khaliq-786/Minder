import React from "react";
import NavbarLoggedIn from "../components/shared/NavbarLoggedIn";
import Footer from "../components/shared/Footer";
// import viewprofile from "../../images/viewprofile.jpg";

const ViewProfile = () => {
  return (
    <>
      <NavbarLoggedIn />
      {/* Profile section */}
      <div className="h-screen bg-gradient-to-br from-red-50 via-red-100 to-yellow-100 py-20 px-3 ">
        <div className="max-w-md mx-auto md:max-w-lg shadow-black/100">
          <div className=" p-3 rounded-2xl text-center py-5 shadow-2xl shadow-black/100">
            <div className="flex justify-center">
              <img
                className="rounded-full w-80 h-80"
                src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ng"
                alt=""
              />
            </div>

            <div className="text-center mb-2">
              <h1 className="text-red-400  text-4xl my-2 text">Yorek Lee </h1>
              <div className="px-5 text-sm">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis reprehenderit eaque, temporibus quas nobis autem
                  eveniet neque enim quisquam, error cupiditate, ipsa aliquid
                  incidunt distinctio omnis tempora dolor. Perferendis, velit!
                </p>
              </div>
              <div className="flex justify-between mt-3 px-4">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">97</span>
                  <span className="text-sm text-red-400">Followers</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">197</span>
                  <span className="text-sm text-red-400">Posts</span>
                </div>

                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-red-500">57</span>
                  <span className="text-sm text-red-400">Following</span>
                </div>
              </div>

              <div className="w-full  flex-row px-4 mt-4">
                
                <button class="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Follow
                  </span>
                </button>
                <button class="w-2/5 relative inline-flex items-center justify-center p-0.5 mb-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span class="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Message
                  </span>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profile section */}

      <Footer />
    </>
  );
};

export default ViewProfile;
