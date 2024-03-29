import React from "react";
import { useState } from "react";
import VideoFeed from "./VideoFeed";
// import { Application } from "@splinetool/runtime";

const ContentSection = () => {
  // useEffect(() => {
  //   const canvas = document.getElementById("canvas3d");
  //   const app = new Application(canvas);
  //   app.load("https://prod.spline.design/KWiKZX2uN8Ud7le7/scene.splinecode");
  // }, []);
  const [showlive, setshowlive] = useState(false);

  return (
    <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
      <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto ">
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-500 to-purple-100 shadow-lg transform skew-x-2 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl">
          <div className="flex items-center justify-end pt-6 pr-6">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
          </div>

          <div className="px-20 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800"></div>
                <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1"></div>
              </div>
              <div className="hidden md:flex items-center justify-center"></div>
            </div>

            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
              <div className="text-6xl font-bold text-gray-900 leading-none object-fit">
                <div className="w-[60%] h-[90%] text-center float-right rounded-3xl absolute inset-y-5 right-5 z-40">
                  {/* <img className="object-cover" src="https://www.olympus-imaging.co.in/content/000101300.jpg"></img> */}
                  {/* <canvas className="w-10 h-10" id="canvas3d"></canvas> */}
                </div>
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-400 z-40">
                  Process
                </span>{" "}
                all your work together anywhere
              </div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                A better experience for yout attendees and less stress your
                team.
              </div>
            </div>
            <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
              <bottom
                type="button"
                className="flex items-center justify-start w-48 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
              >
                <button onClick={() => setshowlive(true)} className="px-4 lg:px-10 py-2 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
                  Live Video
                </button>
              </bottom>
            </div>
          </div>
        </div>
        {showlive &&
          <div>
            <VideoFeed />
            <button onClick={()=>setshowlive(false)}>close</button>
          </div>

        }
      </div>
    </div>
  );
};

export default ContentSection;
