import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/SVG/logo.svg";
import closebtn from "../../../assets/SVG/closebtn.svg";
import iconlogin from "../../../assets/SVG/iconlogin.svg";
import halfcircle from "../../../assets/SVG/halfcircle.svg";
import questionmark from "../../../assets/SVG/questionmark.svg";
import location from "../../../assets/SVG/location.svg";
import cart from "../../../assets/SVG/cart.svg";

const Mobile = ({ isOpen, toggle }) => {
  const navbar = [
    {
      path: "/elite",
      Element: "Elite Apparel",
    },
    {
      path: "/classic",
      Element: "Classic Footwear",
    },
    {
      path: "/organic",
      Element: "Organic Grooming",
    },
    {
      path: "/collection",
      Element: "Collections",
    },
  ];
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 transform fixed inset-0 w-full z-[999]`}
    >
      <div className=" px-4 sm:px-8 pt-4 pb-10  bg-black min-h-svh flex flex-col justify-between  ">
        <div className="flex items-center justify-between">
          <button
            onClick={toggle}
            className="size-12 rounded-lg text-black text-lg"
          >
            <img src={closebtn} alt="" />
          </button>

          <a href="/">
            <img src={logo} alt="" className="w-24 " />
          </a>

          <div className="flex gap-4">
            <img src={questionmark} alt="" />
            <img src={location} alt="" />
            <img src={cart} alt="" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col space-y-16">
            {navbar.map((items, idx) => (
              <Link
                to={items.path}
                key={items.Element}
                onClick={toggle}
                className="font-nexaReg text-4xl text-white  transition-all duration-500 relative group"
              >
                {items.Element}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 itmes-center">
          <img src={iconlogin} alt="" />
          <Link
            to="/login"
            onClick={() => window.scrollTo({ behavior: "smooth" })}
          >
            <p className="font-nexaReg text-base text-white">Login/Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
