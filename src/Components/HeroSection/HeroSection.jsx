import React from "react";
import Video1 from "../../assets/Video1.mp4";
import Video2 from "../../assets/Video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual build
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          tools for developers
        </span>
      </h1>
      <p className="mt-4 font-lg text-center text-neutral-500 max-w-4xl ">
        We create tools that help developers build, deploy, and scale virtual
        reality applications. Learn more about our mission and services.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-gray-700 to-gray-900 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center overflow-hidden  ">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg shadow-orange-400 mx-2 my-4 w-[45%] "
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  shadow-orange-400 mx-2 my-4
          w-[45%] "
        >
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
