import { React, useState } from "react";
import hero3 from "../../assets/Images/Home/hero3.png";
import hero4 from "../../assets/Images/Home/hero4.png";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";
import whitearrowbtn from "../../assets/SVG/whitearrowbtn.svg";

const Product = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-20 lg:space-y-44">
        <div className="grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2  bg-[#FAFAFA] ">
          <div>
            <img src={hero3} alt="" className="object-cover h-full" />
          </div>
          <div className="relative z-50 space-y-5 py-10 px-10 xl:px-20 flex flex-col justify-center ">
            <h1 className="font-nexabold text-14 ">SPRING SUMMER</h1>
            <div className="relative z-50   space-y-9  max-w-2xl">
              <h1 className="font-nexalight text-[40px]  leading-none">
                Saar bringing retro back
              </h1>

              <p className="font-roboto font-normal text-xl  text-[#969696]">
                Discover the handcrafted amalgamation of tradition art and
                age-old craftmanship with tendy styles and silhouettes.{" "}
              </p>

              <button
                className="relative text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Background animation */}
                <span
                  className={`absolute inset-0 bg-black transform ${
                    isHovered ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-500 ease-out`}
                />
                {/* Text content */}
                <span
                  className={`relative z-10 transition-colors duration-500 ${
                    isHovered ? "text-white" : "text-black"
                  }`}
                >
                  DISCOVER MORE
                </span>
                {/* Icon */}
                <img
                  src={isHovered ? whitearrowbtn : arrowbtn}
                  alt=""
                  className="relative z-10"
                />
              </button>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2  bg-[#FAFAFA]  ">
          <div className="relative z-50 space-y-5 flex flex-col justify-center  py-10 px-10 xl:px-20 order-last  md:order-first lg:order-first">
            <h1 className="font-nexabold text-14 ">SPRING SUMMER</h1>
            <div className="relative z-50 space-y-9  max-w-2xl">
              <h1 className="font-nexalight text-[40px]  leading-none">
                Saar bringing retro back
              </h1>

              <p className="font-RobotoReg text-xl  text-[#969696]">
                Discover the handcrafted amalgamation of tradition art and
                age-old craftmanship with tendy styles and silhouettes.{" "}
              </p>

              <button
                className="relative text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Background animation */}
                <span
                  className={`absolute inset-0 bg-black transform ${
                    isHovering ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-500 ease-out`}
                />
                {/* Text content */}
                <span
                  className={`relative z-10 transition-colors duration-500 ${
                    isHovering ? "text-white" : "text-black"
                  }`}
                >
                  DISCOVER MORE
                </span>
                {/* Icon */}
                <img
                  src={isHovering ? whitearrowbtn : arrowbtn}
                  alt=""
                  className="relative z-10"
                />
              </button>
            </div>
          </div>

          <div>
            <img src={hero4} alt="" className="object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
