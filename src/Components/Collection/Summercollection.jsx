import { React, useState } from "react";
import bluekurtaback from "../../assets/Images/Collection/bluekurtaback.png";
import bluekurtashort from "../../assets/Images/Collection/bluekurtashort.png";
import bluekurtafront from "../../assets/Images/Collection/bluekurtafront.png";
import bluearms from "../../assets/Images/Collection/bluearms.png";
import bluelegs from "../../assets/Images/Collection/bluelegs.png";
import blackrightarr from "../../assets/SVG/blackrightarr.svg";
import blackleftarr from "../../assets/SVG/blackleftarr.svg";

const Summercollection = () => {
  const images = [bluekurtashort, bluekurtashort, bluekurtashort]; // Add all images here
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col">
      <div className="space-y-11 order-last">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col space-y-16 ">
            <div className="space-y-8">
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-auto"
              />

              <div className="flex justify-end gap-40">
                <button onClick={handlePrev}>
                  <img src={blackleftarr} alt="" />
                </button>
                <button onClick={handleNext}>
                  <img src={blackrightarr} alt="" />
                </button>
              </div>
            </div>

            <p className="font-roboto font-light text-xl pl-28 max-w-[692px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="space-y-16  flex flex-col items-end justify-end">
            <img src={bluekurtaback} alt="" />
            <p className="max-w-[488px] font-roboto font-light text-xl pr-2 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
            <img src={bluekurtafront} alt="" />
          </div>
        </div>
        <div className="flex gap-11 justify-end">
          <img src={bluearms} alt="" />
          <img src={bluelegs} alt="" />
        </div>
        <p className="max-w-2xl font-roboto font-light text-xl pl-28 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-20 lg:space-y-44">
        <div className="space-y-4">
          <h1 className="font-nexalight text-3xl md:text-4xl lg:text-6xl">
            The Summer Collection
          </h1>
          <p className="font-roboto font-light text-sm    md:text-lg lg:text-xl max-w-[619px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summercollection;
