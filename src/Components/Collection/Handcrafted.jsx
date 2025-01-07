import React from "react";
import yellokurta from "../../assets/Images/Collection/yellokurta.png";
import whitekurta from "../../assets/Images/Collection/whitekurta.png";
import frontwhitekurta from "../../assets/Images/Collection/frontwhitekurta.png";
import whitekurtaback from "../../assets/Images/Collection/whitekurtaback.png";

const Handcrafted = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7  overflow-hidden space-y-7">
        {/* images section */}
        <div className="flex gap-1 justify-end">
          <div>
            <img src={whitekurta} alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <div>
              <img src={frontwhitekurta} alt="" />
            </div>
            <div>
              <img src={whitekurtaback} alt="" />
            </div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-20 lg:space-y-28">
          {/* text */}
          <div className="lg:pl-44">
            <p className="lg:max-w-2xl font-roboto font-light text-base md:text-lg lg:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>

          {/* yellow kurta */}
          <div className=" grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2">
            <div className="relative z-50 space-y-5 flex flex-col justify-center  py-10 px-10 xl:px-20 order-last  md:order-first lg:order-first">
              <h1 className="font-nexabold text-xl ">Summer Collection</h1>
              <div className="relative z-50   max-w-[507px]">
                <p className="font-roboto font-light text-xl ">
                  Discover the handcrafted amalgamation of tradition art and
                  age-old craftmanship with tendy styles and silhouettes.
                </p>
              </div>
            </div>

            <div>
              <img src={yellokurta} alt="" className="object-cover h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handcrafted;
