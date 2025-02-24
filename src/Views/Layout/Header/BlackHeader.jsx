import React, { useEffect, useState } from "react";
import logoblack from "../../../assets/SVG/logoblack.svg";
import questionmarkblack from "../../../assets/SVG/questionmarkblack.svg";
import blackcart from "../../../assets/SVG/blackcart.svg";
import Mobile from "./Mobile";
import Cart from "../../../Components/Cart/Cart";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const BlackHeader = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };
  const [open, setopen] = useState(false);
  const handleclick = () => {
    setopen(!open);
  };
  const navbar = [
    {
      path: "/Elite Apparel",
      Element: "Elite Apparel",
    },
    {
      path: "/Classic Footwear",
      Element: "Classic Footwear",
    },
    {
      path: "/Organic Grooming",
      Element: "Organic Grooming",
    },
    {
      path: "/Collections",
      Element: "Collections",
    },
  ];
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <>
      <Mobile isOpen={menu} toggle={toggle} />
      {open && (
        <div className="h-full backdrop-blur-lg fixed inset-0 z-[100]"></div>
      )}

      <div className=" bg-transparent  w-full inset-0 ">
        <div
          className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 lg:py-7 relative  w-full space-y-8 lg:space-y-10
        "
        >
          <nav className="flex items-center justify-between relative z-[100] w-full">
            <div onClick={toggle} className="cursor-pointer">
              <svg
                width="40"
                height="21"
                viewBox="0 0 40 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="1" rx="0.5" fill="black" />
                <rect y="10" width="40" height="1" rx="0.5" fill="black" />
                <rect y="20" width="40" height="1" rx="0.5" fill="black" />
              </svg>
            </div>

            <Link to="/">
              <img src={logoblack} alt="logo" className="" />
            </Link>

            <div className="flex items-center gap-3  ">
              <div className="relative">
                {totalItems > 0 && (
                  <div className="absolute -right-3 -top-2 bg-black text-white rounded-full flex justify-center text-xs size-5 items-center">
                    {totalItems}
                  </div>
                )}
                <img
                  src={blackcart}
                  alt="cart"
                  className="cursor-pointer"
                  onClick={handleclick}
                />

                {open && <Cart isOpen={open} toggle={handleclick} />}
              </div>
            </div>
          </nav>
          <div className="flex justify-center  items-center gap-12 text-center md:text-start border py-4 w-full">
            <Link to="/elite">
              <h1 className="text-black font-nexaReg text-14 ">
                ELITE APPAREL
              </h1>
            </Link>
            <Link to="/classic">
              <h1 className="text-black font-nexaReg text-14">
                CLASSIC FOOTWEAR
              </h1>
            </Link>
            <Link to="/organic">
              <h1 className="text-black font-nexaReg text-14">
                ORGANIC GROOMING
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackHeader;
