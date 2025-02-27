import React from "react";
import { Link } from "react-router";
// Components
import Address from "../../../Components/Checkout/Address";
import Payment from "../../../Components/Checkout/Payment";
import OrderSummary from "../../../Components/Checkout/OrderSummary";
// Assets
import logoblack from "../../../assets/SVG/logoblack.svg";
import left from "../../../assets/SVG/arrowleftshop.svg";

const Checkout = () => {
  return (
    <div className=" min-h-screen mx-auto">
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left: Continue Shopping */}
          <Link to="/collection">
            <div className="flex items-center gap-2 lg:gap-5">
              <img
                src={left}
                alt="left arrow"
                className="size-6 lg:size-auto"
              />
              <p className="font-nexabold text-xs lg:text-base text-[#444C40]">
                Continue shopping
              </p>
            </div>
          </Link>

          {/* Center: SHOOR Logo */}
          <Link to="/">
            <img src={logoblack} alt="Shoor Logo" className="h-4 lg:h-6" />
          </Link>

          {/* Right: Empty (or add user/account icons, etc.) */}
          <div className="hidden lg:block"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-5 lg:py-10">
        {/* Two-column layout: OrderSummary + Address (left), Payment (right) */}
        <div className="flex flex-col lg:flex-row gap-8  justify-center">
          {/* Left column */}
          <div className=" space-y-8">
            <OrderSummary />
            <Address />
          </div>

          {/* Right column */}
          <div className="">
            <Payment />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
