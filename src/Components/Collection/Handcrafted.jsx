import React from "react";
import yellokurta from "../../assets/Images/Collection/yellokurta.png";
import whitekurta from "../../assets/Images/Collection/whitekurta.png";
import frontwhitekurta from "../../assets/Images/Collection/frontwhitekurta.png";
import whitekurtaback from "../../assets/Images/Collection/whitekurtaback.png";
import kurta4 from "../../assets/Images/Collection/kurta4.webp";
import kurta5back from "../../assets/Images/Collection/kurta5back.webp";
import kurta5front from "../../assets/Images/Collection/kurta5front.webp";
import kurta5 from "../../assets/Images/Collection/kurta5.jpg";
import kurta6 from "../../assets/Images/Collection/kurta6.jpg";

const Handcrafted = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7  overflow-hidden space-y-7">
        {/* images section */}
        <div className="flex gap-1 lg:pl-44 justify-end h-[500px] ">
          <div className="w-1/2">
            <img
              src={kurta5front}
              alt="whitekurta"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="flex flex-col space-y-1 h-full items-center w-1/2">
            <div className="h-1/2 w-full">
              <img
                src={kurta6}
                alt="front"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-1/2 w-full">
              <img
                src={kurta5back}
                alt="back"
                className="w-full h-full object-cover object-top"
              />
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
          <div className=" flex flex-col gap-10 md:gap-0  md:flex-row  max-w-screen-2xl">
            <div className="relative z-50 space-y-5 flex flex-col justify-center  py-10 px-10 xl:px-20 order-first  md:order-first lg:order-first">
              <h1 className="font-nexabold text-xl ">Summer Collection</h1>
              <div className="relative z-50 max-w-[507px]">
                <p className="font-roboto font-light text-lg lg:text-xl ">
                  Discover the handcrafted amalgamation of tradition art and
                  age-old craftmanship with tendy styles and silhouettes.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <img
                src={kurta4}
                alt="kurta"
                className="object-cover object-top size-[500px] lg:size-[620px]"
              />
            </div>
          </div>
          {/* className="relative z-50 max-w-[507px]" */}
          {/* <div className="flex">
            <div>
              <h1 className="font-nexabold text-xl ">Summer Collection</h1>
              <div className="relative z-50 max-w-[507px]">
                <p className="font-roboto font-light text-xl ">
                  Discover the handcrafted amalgamation of tradition art and
                  age-old craftmanship with tendy styles and silhouettes.
                </p>
              </div>
            </div>
            <div className="flex ">
              <img
                src={kurta4}
                alt="kurta"
                className="object-cover size-[675px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Handcrafted;
