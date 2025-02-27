import React, { useState } from "react";
import { useSelector } from "react-redux";
import arrowrightwhite from "../../assets/SVG/arrowrightwhite.svg";
import { Link } from "react-router";

const Payment = () => {
  const methods = [
    "Net Banking",
    "UPI",
    "Credit / Debit Card",
    "Paytm",
    "Razor Pay",
  ];

  // Default selection
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 bg-[#FBFBFB] w-[550px] lg:w-[600px]">
      <div className="flex justify-center mb-6">
        <h1 className="font-nexaReg text-base">Select Payment Method</h1>
      </div>

      {methods.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-black/20 py-5 flex gap-3 items-center"
          onClick={() => setSelectedMethod(item)}
        >
          {/* The black box remains the same for all items */}
          <div
            className={`p-2 cursor-pointer ${
              selectedMethod === item
                ? "border border-black"
                : "border border-black/30"
            }`}
          >
            <div
              className={`size-3 ${
                selectedMethod === item ? "bg-black" : "bg-black/30"
              }`}
            ></div>
          </div>

          {/* Text color changes based on selection */}
          <p
            className={`font-nexaReg text-base cursor-pointer ${
              selectedMethod === item ? "text-black" : "text-black/30"
            }`}
          >
            {item}
          </p>
        </div>
      ))}

      <Link to="/pay">
        <div className="bg-black flex gap-10 justify-center py-5 cursor-pointer mt-8">
          <p className="text-white">PAY (₹ {totalAmount})</p>
          <img src={arrowrightwhite} alt="arrow-right" />
        </div>
      </Link>
    </div>
  );
};

export default Payment;
