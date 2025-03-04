import React, { useState } from "react";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";
import whitearrowbtn from "../../assets/SVG/whitearrowbtn.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/cartSlice";

const Overview = ({ id, icon, title, price, description }) => {
  const size = ["S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showAddedPopup, setShowAddedPopup] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = ({ id, icon, title, price, description }) => {
    console.log("Add to cart clicked");
    dispatch(addToCart({ id, icon, title, price, description }));
    setShowAddedPopup(true);
    // Hide the popup after 2 seconds
    setTimeout(() => setShowAddedPopup(false), 2000);
  };

  return (
    <div>
      {/* Popup when item is added to cart */}
      {showAddedPopup && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white py-2 px-4 rounded shadow flex items-center z-50">
          Added to Cart!
          <div className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-20 lg:space-y-44">
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-around xl:justify-around space-y-2">
          <div>
            <img
              src={icon}
              alt="Product"
              className="w-[350px] h-[500px] lg:w-[402px] lg:h-[593px]"
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
                  <div
                    key={idx}
                    onClick={() => setSelectedSize(item)}
                    className={`border border-black rounded-full w-12 h-12 flex justify-center items-center cursor-pointer transition-colors duration-300 ${
                      selectedSize === item
                        ? "bg-black hover:text-white"
                        : "bg-white hover:bg-black hover:text-white"
                    }`}
                  >
                    <h1
                      className={`font-nexabold ${
                        selectedSize === item ? "text-white" : ""
                      }`}
                    >
                      {item}
                    </h1>
                  </div>
                ))}
              </div>
              <h1 className="font-nexabold text-xs lg:text-base text-[#767676] cursor-pointer">
                SIZE CHART
              </h1>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="bg-[#8D7B67] border border-black p-1 rounded-full w-6 h-6"></div>
                <div className="bg-[#FFAF57] border border-[#BEBEBE] p-1 rounded-full w-6 h-6"></div>
              </div>
              <div>
                <p className="font-roboto font-light text-[#767676] text-base">
                  Natural Oak
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-3 relative">
              <h1 className="font-roboto font-light text-3xl">{price}</h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart({ id, icon, title, price, description });
                }}
                className="relative text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden border-2 border-black"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
