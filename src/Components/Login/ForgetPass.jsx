import React from "react";
import { Link } from "react-router";
import logoblack from "../../assets/SVG/logoblack.svg";

const ForgetPass = () => {
  return (
    <div className="relative">
      <div className=" max-w-screen-2xl mx-auto h-screen  px-4 sm:px-8 py-7 sm:py-14  pb-14 space-y-14 overflow-hidden flex flex-col items-center justify-center ">
        <Link to="/">
          <img
            src={logoblack}
            alt="Shoor Logo"
            className="absolute -translate-x-1/2 top-5"
          />
        </Link>
        <div className="flex flex-col items-center space-y-6 ">
          <p className="font-nexabold text-sm">YOUR ACCOUNT</p>
          <h1 className="font-nexalight text-[35px]">Forget your password</h1>
        </div>
        <div className="w-full max-w-sm">
          <form className="flex flex-col space-y-14">
            {/* Email */}
            <label className="flex flex-col  font-nexaReg text-base">
              Email
              <input
                type="email"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 flex items-center justify-center space-x-2 tracking-wider font-nexabold text-base"
            >
              <span>LOG IN</span>
              <span className="ml-2">&rarr;</span>
            </button>
          </form>
          <div className="text-center mt-8 space-y-2 text-base font-nexaReg">
            <Link to="/login">
              <a href="#" className="block underline">
                Take me to log in page
              </a>
            </Link>
            <Link to="/register">
              <a href="#" className="block underline">
                I wish to register for a new account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
