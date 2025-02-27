import React from "react";
import pen from "../../assets/SVG/whitepen.svg";

const Address = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 w-[550px]">
      {/* Black bar for the ADDRESS title */}
      <div className="bg-black py-3 text-center">
        <h1 className="font-nexabold text-base text-white">ADDRESS</h1>
      </div>

      {/* White box with the address info, HOME button, and pen icon */}
      <div className="bg-[#FBFBFB] relative p-4">
        {/* Top section: address text (left) + HOME button (right) */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-nexaReg text-base mb-1">Shoor</p>
            <p className="font-nexaReg text-base mb-1">E 11</p>
            <p className="font-nexaReg text-base mb-1">New Delhi, Delhi</p>
            <p className="font-nexaReg text-base mb-1">110025</p>
            <p className="font-nexaReg text-base">Mobile : +91 7000070000</p>
          </div>

          {/* HOME button */}
          <div className="border-2 border-black px-7 py-2.5">
            <p className="font-nexabold text-xs">HOME</p>
          </div>
        </div>

        {/* Pen icon at bottom-right corner */}
        <div className="absolute bottom-4 right-4 bg-black p-2">
          <img src={pen} alt="Edit Address" />
        </div>
      </div>
    </div>
  );
};

export default Address;
