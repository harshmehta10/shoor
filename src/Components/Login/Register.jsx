import React, { useState } from "react";
import logoblack from "../../assets/SVG/logoblack.svg";
import { Link, useNavigate } from "react-router-dom";
import arrowrightwhite from "../../assets/SVG/arrowrightwhite.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }
    const user = { email, password, phone };
    localStorage.setItem("user", JSON.stringify(user));
    // Redirect the user to the collection page after registration
    navigate("/collection");
  };

  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-10 pb-14 overflow-hidden flex flex-col items-center justify-center bg-white h-screen">
        <Link to="/">
          <img
            src={logoblack}
            alt="Shoor Logo"
            className="absolute -translate-x-1/2 top-5"
          />
        </Link>
        <h1 className="text-sm font-nexabold tracking-wider mb-8">REGISTER</h1>
        <div className="w-full max-w-sm">
          <form onSubmit={handleRegister} className="flex flex-col space-y-16">
            <label className="flex flex-col text-base font-nexaReg">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>
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
            <label className="flex flex-col text-base font-nexaReg">
              Phone
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="mt-1 border-b border-black outline-none focus:border-gray-500"
              />
            </label>
            <div className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 border border-black rounded-sm focus:ring-1 focus:ring-black"
              />
              <label className="font-nexabold text-sm lg:text-base">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 flex items-center justify-center space-x-2 uppercase "
            >
              <p className="font-nexabold text-sm lg:text-base tracking-wider">
                REGISTER
              </p>
              <img src={arrowrightwhite} alt="arrow" className="w-8" />
            </button>
          </form>
          {message && (
            <div className="mt-4 text-center text-green-600">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
