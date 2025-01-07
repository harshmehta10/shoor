import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-svh flex justify-center items-center ">
      <div className="flex flex-col gap-5">
        <h1 className="text-42 font-manrope font-bold">
          Oops this page does not exist{" "}
        </h1>
        <Link to="/" className="flex justify-center">
          <button className="py-6 px-12 bg-[#55B719] rounded-[120px] text-white text-18 font-manrope font-bold ">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
