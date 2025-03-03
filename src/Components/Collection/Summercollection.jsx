import { React, useState } from "react";
import bluekurtaback from "../../assets/Images/Collection/bluekurtaback.png";
import bluekurtashort from "../../assets/Images/Collection/bluekurtashort.png";
import bluekurtafront from "../../assets/Images/Collection/bluekurtafront.png";
import bluearms from "../../assets/Images/Collection/bluearms.png";
import bluelegs from "../../assets/Images/Collection/bluelegs.png";
import blackrightarr from "../../assets/SVG/blackrightarr.svg";
import blackleftarr from "../../assets/SVG/blackleftarr.svg";
import kurta7 from "../../assets/Images/Collection/kurta7.jpg";
import kurta7arms from "../../assets/Images/Collection/kurta7arms.webp";
import kurta7back from "../../assets/Images/Collection/kurta7back.avif";
import kurta7chest from "../../assets/Images/Collection/kurta7chest.avif";
import kurta10 from "../../assets/Images/Home/kurta10.jpg";
import kurta8 from "../../assets/Images/Collection/kurta8.jpg";

const Summercollection = () => {
  const images = [kurta7, kurta8]; // Add all images here
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
    <div className="flex flex-col max-w-screen-2xl mx-auto overflow-x-hidden">
      <div className="space-y-11 order-last">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col space-y-16">
            <div className="space-y-8 ">
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-[800px] h-[650px] object-cover"
              />

              <div className="flex justify-center lg:justify-end gap-40 px-5 lg:px-0">
                <button onClick={handlePrev}>
                  <img src={blackleftarr} alt="" />
                </button>
                <button onClick={handleNext}>
                  <img src={blackrightarr} alt="" />
                </button>
              </div>
            </div>

            <p className="font-roboto font-light text-base lg:text-xl px-5 lg:pl-28 max-w-[692px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="space-y-16  flex flex-col items-center lg:items-end justify-center lg:justify-end">
            <img
              src={kurta7back}
              alt="kurtaback"
              className="w-[488px] h-[320px] object-cover object-top"
            />
            <p className="max-w-[488px] font-roboto font-light text-base lg:text-xl px-5 lg:pr-2 lg:px-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
            <img
              src={kurta7chest}
              alt="kurtafront"
              className="w-[488px] h-[320px] object-cover "
            />
          </div>
        </div>
        <div className="flex gap-1 lg:gap-11 md:justify-center lg:justify-end">
          <img
            src={kurta7arms}
            alt="kurtaarms"
            className="w-[400px]  lg:w-[800px] h-[320px] object-cover"
          />
          <img
            src={kurta10}
            alt="kurtalegs"
            className="w-[150px] lg:w-[488px] h-[320px] object-cover object-bottom"
          />
        </div>
        <p className="max-w-2xl font-roboto font-light text-base lg:text-xl px-5 lg:px-0 lg:pl-28 ">
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
