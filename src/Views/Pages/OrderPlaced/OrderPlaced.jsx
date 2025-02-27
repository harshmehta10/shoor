import React from "react";
import bag from "../../../assets/SVG/bag.svg";
import arrowbtn from "../../../assets/SVG/arrowbtn.svg";
import { Link } from "react-router";

const OrderPlaced = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto  min-h-[100vh] relative  overflow-x-hidden w-full">
        {/* Absolute container to center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          {/* Bag Icon */}
          <img src={bag} alt="bag" className="mx-auto mb-4" />

          {/* Order Info */}
          <p className="text-white font-nexaReg text-lg">
            Order Id <span className="font-nexabold text-lg">#7633458</span>
          </p>
          <p className="text-white font-nexaReg text-lg mb-4">
            Order has been placed successfully
          </p>

          {/* Continue Shopping Button */}
          <Link to="/collection">
            <button className="flex bg-white px-4 py-4 mx-auto items-center justify-center gap-10 w-[500px]">
              <span className="font-nexabold text-base">CONTINUE SHOPPING</span>
              <img src={arrowbtn} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
