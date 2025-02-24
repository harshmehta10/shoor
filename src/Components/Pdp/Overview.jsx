import { useState } from "react";
import React from "react";
import kurta from "../../assets/Images/Collection/kurta.png";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";
import whitearrowbtn from "../../assets/SVG/whitearrowbtn.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/cartSlice";

const Overview = ({ id, icon, title, price, description }) => {
  const size = ["S", "M", "L", "XL", "XXL"];
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = ({ id, icon, title, price, description }) => {
    setShowPopup(true);
    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    console.log({ id, icon, title, price, description });
    dispatch(addToCart({ id, icon, title, price, description }));
  };

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto hidden lg:relative">
        {showPopup && (
          <div className="absolute top-0 right-8 bg-black text-white py-2 px-4 rounded shadow flex items-center">
            Added to Cart!
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-20 lg:space-y-44s">
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-around xl:justify-around space-y-2">
          <div className="">
            <img
              src={icon}
              alt="kurtaimg "
              className="w-[350px] h-[500px] lg:w-[402px] lg:h-[593px] "
            />
          </div>
          <div className="space-y-11 max-w-[600px]">
            <div className="space-y-4">
              <div className="space-y-11">
                <h3 className="font-nexabold text-lg lg:text-xl">
                  Saar summer collection
                </h3>
                <h1 className="font-nexalight text-2xl lg:text-[40px]">
                  {title}
                </h1>
              </div>
              <p className="font-roboto font-light text-sm md:text-lg lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
              <div className="flex gap-2 lg:gap-5">
                {size.map((item, idx) => (
                  <div className="border border-black  rounded-full size-[46px] flex justify-center items-center bg-white group hover:bg-black cursor-pointer">
                    <h1 className="group-hover:text-white">{item}</h1>
                  </div>
                ))}
              </div>
              <h1 className="font-nexabold text-xs lg:text-base text-[#767676]">
                SIZE CHART
              </h1>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="bg-[#8D7B67] border border-black p-1 rounded-full size-[22px]"></div>
                <div className="bg-[#FFAF57] border border-[#BEBEBE] p-1 rounded-full size-[22px] "></div>
              </div>
              <div>
                <p className="font-roboto font-light text-[#767676] text-base">
                  Natural Oak
                </p>
              </div>
            </div>
            <div className="flex flex-col  items-end space-y-3 relative">
              <h1 className="font-roboto font-light text-3xl"> {price}</h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart({ id, icon, title, price, description });
                }}
                className="relative text-black font-nexabold py-3 lg:py-5 px-3
                lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm
                lg:text-base overflow-hidden border-2 border-black"
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
                  ADD TO CART
                </span>
                {/* Icon */}
                <img
                  src={isHovered ? whitearrowbtn : arrowbtn}
                  alt=""
                  className="relative z-10"
                />
              </button>
            </div>
            <div className="max-w-screen-2xl mx-auto relative lg:hidden">
              {showPopup && (
                <div className="absolute -top-36 left-10 bg-black text-white py-2 px-4 rounded shadow flex items-center">
                  Added to Cart!
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
