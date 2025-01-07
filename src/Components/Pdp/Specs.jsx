import React from "react";
import pluswhite from "../../assets/SVG/pluswhite.svg";

const Specs = () => {
  const faq = [
    "PRODUCT DESCRIPTION",
    "FABRIC",
    "STITCHING",
    "COLORING",
    "SIZING",
    "STORY",
  ];
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-10 lg:space-y-24">
        <div>
          <h2 className="font-nexalight text-xl text-[#010101]">Specs</h2>
        </div>
        <div>
          {faq.map((item, idx) => (
            <div key={idx} className="border-y">
              <div className="flex justify-between my-7 items-center">
                <h1 className="font-nexabold text-base md:text-lg lg:text-xl ">
                  {item}
                </h1>

                <img
                  src={pluswhite}
                  alt=""
                  className="bg-black py-2 px-2 rounded-full "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specs;
