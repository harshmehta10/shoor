import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../assets/SVG/logo.svg";
import closebtn from "../../../assets/SVG/closebtn.svg";
import iconlogin from "../../../assets/SVG/iconlogin.svg";
import halfcircle from "../../../assets/SVG/halfcircle.svg";
import questionmark from "../../../assets/SVG/questionmark.svg";
import location from "../../../assets/SVG/location.svg";
import cart from "../../../assets/SVG/cart.svg";

const Mobile = ({ isOpen, toggle }) => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navbar = [
    {
      path: "/elite",
      Element: "Elite Apparel",
    },
    {
      path: "/classic",
      Element: "Traditional Wear",
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
            {navbar.map((item, idx) => (
              <NavLink
                key={item.Element}
                to={item.path}
                onClick={toggle}
                className="group"
              >
                {({ isActive }) => (
                  <span className="relative inline-block">
                    <span className="font-nexaReg text-4xl text-white transition-all duration-500">
                      {item.Element}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <img src={iconlogin} alt="User Icon" />
          {user ? (
            // If the user is logged in, show their name (or email)
            <p className="font-nexaReg text-base text-white">
              {user.name || user.email}
            </p>
          ) : (
            // Otherwise, display the Login/Register link
            <Link
              to="/login"
              onClick={() => window.scrollTo({ behavior: "smooth" })}
            >
              <p className="font-nexaReg text-base text-white">
                Login/Register
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
