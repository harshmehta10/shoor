import React from "react";
import downarrow from "../../../assets/SVG/downarrowwhite.svg";
import facebook from "../../../assets/SVG/facebook.svg";
import instagram from "../../../assets/SVG/instagram.svg";
import twitter from "../../../assets/SVG/twitter.svg";
import youtube from "../../../assets/SVG/youtube.svg";
import pintrust from "../../../assets/SVG/pintrust.svg";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="grid grid-cols-2 gap-y-10 gap-x-5  lg:grid-cols-5">
          <div className=" space-y-6 lg:space-y-12">
            <div className="space-y-5">
              <h1 className="text-white text-footer font-nexabold">
                COUNTRY/REGION
              </h1>
              <p className="text-white flex items-center gap-2 text-14 font-nexalight">
                India
                <div>
                  <img src={downarrow} alt="" />
                </div>
              </p>
            </div>
            <div className="space-y-5">
              <h1 className="text-white">LANGUAGE</h1>
              <p className="text-white flex items-center gap-2 text-14 font-nexalight">
                English
                <div>
                  <img src={downarrow} alt="" />
                </div>
              </p>
            </div>
          </div>

          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-white text-footer font-nexabold">
              CUSTOMER CARE
            </h1>
            <div className="space-y-2">
              <h1 className="text-white text-14 font-nexalight">
                Login/Register
              </h1>
              <h1 className="text-white text-14 font-nexalight">
                Customer Servicer
              </h1>
              <h1 className="text-white text-14 font-nexalight">
                Shipping Info
              </h1>
              <h1 className="text-white text-14 font-nexalight">Contact us</h1>
            </div>
          </div>

          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-white text-footer font-nexabold">
              OUR POLICIES
            </h1>
            <div className="space-y-2">
              <h1 className="text-white text-14 font-nexalight">
                Privacy Policies
              </h1>
              <h1 className="text-white text-14 font-nexalight">
                Terms & Conditions
              </h1>
              <h1 className="text-white text-14 font-nexalight">Cookies</h1>
              <h1 className="text-white text-14 font-nexalight">
                Accessibility
              </h1>
            </div>
          </div>

          <div className="space-y-5 lg:space-y-10">
            <h1 className="text-white text-footer font-nexabold">
              OUR COMPANY
            </h1>
            <div className="space-y-2">
              <h1 className="text-white text-14 font-nexalight">
                Become a Retailer
              </h1>
              <h1 className="text-white text-14 font-nexalight">Press</h1>
              <h1 className="text-white text-14 font-nexalight">Corporate</h1>
              <h1 className="text-white text-14 font-nexalight">Investors</h1>
              <h1 className="text-white text-14 font-nexalight">Careers</h1>
              <h1 className="text-white text-14 font-nexalight">Partners</h1>
              <h1 className="text-white text-14 font-nexalight">
                Latest Magazine
              </h1>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <img src={facebook} alt="" className="size-8 lg:size-11" />
              <img src={instagram} alt="" className="size-8 lg:size-11" />
              <img src={twitter} alt="" className="size-8 lg:size-11" />
              <img src={youtube} alt="" className="size-8 lg:size-11" />
              <img src={pintrust} alt="" className="size-8 lg:size-11" />
            </div>
            <h1 className="text-white font-Robotolight text-14"> © SHOOR</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
