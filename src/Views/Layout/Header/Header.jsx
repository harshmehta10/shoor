import React, { useEffect, useState } from "react";
import logo from "../../../assets/SVG/logo.svg";
import { Link } from "react-router";
import Mobile from "./Mobile";
import questionmark from "../../../assets/SVG/questionmark.svg";
import location from "../../../assets/SVG/location.svg";
import cart from "../../../assets/SVG/cart.svg";
import Cart from "../../../Components/Cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
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
      <div className=" bg-transparent absolute w-full inset-0 h-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 relative  w-full">
          <nav className="flex items-center justify-between relative z-[100] w-full">
            <div onClick={toggle} className="cursor-pointer relative z-[]">
              <svg
                width="40"
                height="21"
                viewBox="0 0 40 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="1" rx="0.5" fill="white" />
                <rect y="10" width="40" height="1" rx="0.5" fill="white" />
                <rect y="20" width="40" height="1" rx="0.5" fill="white" />
              </svg>
            </div>

            <Link to="/">
              <img src={logo} alt="logo" className="relative z-[100]" />
            </Link>

            <div className=" lg:flex items-center gap-3 relative z-[100] ">
              <div className="relative">
                {totalItems > 0 && (
                  <div className="absolute -right-3 -top-2 bg-black text-white rounded-full flex justify-center text-xs size-5 items-center">
                    {totalItems}
                  </div>
                )}
                <img
                  src={cart}
                  alt="cart"
                  className="cursor-pointer"
                  onClick={handleclick}
                />
                {open && <Cart isOpen={open} toggle={handleclick} />}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
