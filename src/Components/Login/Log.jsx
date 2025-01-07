import React from "react";
import logoblack from "../../assets/SVG/logoblack.svg";
import { Link } from "react-router";

const Log = () => {
  return (
    <div className="relative">
      <div className=" max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-10 pb-14 overflow-hidden flex flex-col items-center justify-center bg-white">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoblack}
            alt="Shoor Logo"
            className="absolute -translate-x-1/2 top-5"
          />
        </Link>

        {/* Log In Heading */}
        <h1 className="font-nexabold text-sm tracking-wider mb-8">LOG IN</h1>

        {/* Form */}
        <div className="w-full max-w-sm ">
          <form className="flex flex-col space-y-16 ">
            {/* Email */}
            <label className="flex flex-col text-base font-nexaReg">
              Email
              <input
                type="email"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>

            {/* Password */}
            <label className="flex flex-col text-base font-nexaReg">
              Password
              <input
                type="password"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 border border-black rounded-sm focus:ring-1 focus:ring-black"
              />
              <label className="font-nexabold text-base">Remember me</label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 flex items-center justify-center space-x-2 uppercase font-nexabold text-base tracking-wider"
            >
              <span>Log In</span>
              <span className="ml-2">&rarr;</span>
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-8 space-y-2 font-nexaReg text-base ">
            <Link to="/register">
              <a href="#" className="block underline">
                I wish to register for a new account
              </a>
            </Link>
            <Link to="/forgetpass">
              <a href="#" className="block underline">
                I forgot my password
              </a>
            </Link>
          </div>

          {/* Alternative Login */}
          <div className="text-center mt-10 text-sm font-nexabold tracking-wide">
            LOG IN WITH OTHER SERVICES
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;
