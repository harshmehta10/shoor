import React from "react";
import hero2 from "../../assets/Images/Home/hero2.png";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";

const Whyus = () => {
  return (
    <div className="relative ">
      <img
        src={hero2}
        alt=""
        className="absolute top-0 w-full h-full left-0  pointer-events-none "
      />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-20   flex flex-col items-center space-y-11">
        <div className="h-24 w-0.5 bg-white relative z-50 shrink-0 "></div>
        <div className="relative z-50 space-y-7 flex flex-col justify-center items-center py">
          <h1 className=" text-white font-nexabold text-14 text-center">
            SPRING SUMMER COLLECTION 2020
          </h1>
          <div className="relative z-50 text-white font-nexalight space-y-12 flex flex-col justify-center items-center max-w-2xl">
            <h1 className="font-nexabold text-[60px] text-center leading-none">
              Saar bringing retro back
            </h1>

            <p className="font-roboto font-normal text-xl text-center">
              Discover the handcrafted amalgamation of tradition art and age-old
              craftmanship with tendy styles and silhouettes.{" "}
            </p>

            <button className="bg-white text-black font-nexabold py-5 px-5 flex items-center gap-20">
              SHOP NOW
              <img src={arrowbtn} alt="" />
            </button>
          </div>
          <div className="h-24 w-0.5 bg-white relative z-50 shrink-0 "></div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
