import React from "react";
import indianflag from "../../../assets/SVG/indianflag.svg";
import ukflag from "../../../assets/SVG/ukflag.svg";

const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-6 lg:space-y-12">
        <div>
          <h2
            className="text-[#4B4B4B] font-manrope font-light text-22"
            data-aos="fade-right"
          >
            Contact Us
          </h2>
          <h1
            className="font-manrope font-medium text-42"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            How can we{" "}
            <span className="font-manrope font-medium text-42 text-[#55B719]">
              help you?
            </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-14 ">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="" className="font-manrope text-16 font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="bg-[#F0F0F0] border border-[#D7D7D7] rounded-[120px] py-2 px-5"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="" className="font-manrope text-16 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="bg-[#F0F0F0]  border border-[#D7D7D7] rounded-[120px] py-2 px-5"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="" className="font-manrope text-16 font-semibold">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="bg-[#F0F0F0]  border border-[#D7D7D7] rounded-[120px] py-2 px-5"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="" className="font-manrope text-16 font-semibold">
              Company URL
            </label>
            <input
              type="text"
              id="url"
              className="bg-[#F0F0F0]  border border-[#D7D7D7] rounded-[120px] py-2 px-5"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-14">
          <div className="space-y-2 flex flex-col lg:w-1/2">
            <label htmlFor="" className="font-manrope text-16 font-semibold">
              How can we help you?
            </label>
            <textarea
              rows={2}
              id="help"
              className="bg-[#F0F0F0]  border border-[#D7D7D7] rounded-[120px] py-3 px-5 lg:w-full"
            />
          </div>
          <div>
            <button className="text-white bg-[#55B719] rounded-[120px] py-3 px-6 btn">
              Let's Connect
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 xl:gap-10">
          <div>
            <h1 className="font-manrope font-medium text-42">Our Office</h1>
            <div className="flex items-start gap-5 py-3">
              <img src={indianflag} alt="india" />
              <p className="font-manrope font-light text-22 text-[#4B4B4B] max-w-60">
                6th Floor, IRIS Tech Park Sector-48 Gurgaon Haryana - 122018
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="font-manrope font-medium text-42">Contact</h1>

            <div className="flex items-center gap-5">
              <img src={indianflag} alt="" />
              <p className="font-manrope font-light text-22 text-[#4B4B4B]">
                +91 9999000000
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img src={ukflag} alt="" />
              <p className="font-manrope font-light text-22 text-[#4B4B4B]">
                +41 9999000000
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-manrope font-medium text-42">Email Us at</h1>
            <p className="font-manrope font-light text-22 text-[#55B719]">
              help@allinonepodast.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
