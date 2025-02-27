import React, { useState } from "react";
import logoblack from "../../assets/SVG/logoblack.svg";
import { Link } from "react-router-dom";
import arrowrightwhite from "../../assets/SVG/arrowrightwhite.svg";

const Log = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      setMessage("Login successful!");
      // Proceed with your login flow (e.g., update global state, redirect, etc.)
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="relative">
      {/* Desktop Logo */}
      <Link to="/">
        <img
          src={logoblack}
          alt="Shoor Logo"
          className="hidden lg:block absolute -translate-x-1/2 top-5 left-1/2"
        />
      </Link>
      <div className="max-w-screen-2xl mx-auto h-screen px-4 sm:px-8 py-7 sm:py-14 space-y-10 pb-14 overflow-hidden flex flex-col items-center justify-center bg-white">
        {/* Mobile Logo */}
        <Link to="/">
          <img
            src={logoblack}
            alt="Shoor Logo"
            className="absolute -translate-x-1/2 top-5 lg:hidden"
          />
        </Link>
        {/* Log In Heading */}
        <h1 className="font-nexabold text-sm tracking-wider mb-8">LOG IN</h1>

        {/* Form Container */}
        <div className="w-full max-w-sm">
          <form onSubmit={handleLogin} className="flex flex-col space-y-16">
            {/* Email */}
            <label className="flex flex-col text-base font-nexaReg">
              Email
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>

            {/* Password */}
            <label className="flex flex-col text-base font-nexaReg">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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
              className="w-full bg-black text-white py-3 flex items-center justify-center gap-3 font-nexabold text-base tracking-wider"
            >
              <p>LOG IN</p>
              <img src={arrowrightwhite} alt="arrow" className="w-8" />
            </button>
          </form>

          {/* Message Display */}
          {message && (
            <div className="text-center mt-4 font-nexaReg text-base">
              {message}
            </div>
          )}

          {/* Links */}
          <div className="text-center mt-8 space-y-2 font-nexaReg text-base">
            <Link to="/register" className="underline block">
              I wish to register for a new account
            </Link>
            <Link to="/forgetpass" className="underline block">
              I forgot my password
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
