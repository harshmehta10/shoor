import { React, useState } from "react";
import brownkurta from "../../assets/Images/pdp/brownkurta.png";
import plus from "../../assets/SVG/plus.svg";
import minus from "../../assets/SVG/minus.svg";
import crossbtn from "../../assets/SVG/crossbtn.svg";
import arrowrightwhite from "../../assets/SVG/arrowrightwhite.svg";
import num from "../../assets/SVG/num.svg";
import closebtn from "../../assets/SVG/closebtn.svg";

const Cart = ({ isOpen, toggle }) => {
  const prod = [
    {
      img: brownkurta,
      heading: "Saar Kurta",
      color: "Brown",
      price: " ₹ 1600",
      decrese: minus,
      increase: plus,
      para: "Lorem Ipsum is simply",
      btn: crossbtn,
      number: num,
    },
    {
      img: brownkurta,
      heading: "Saar Kurta",
      color: "Brown",
      price: " ₹ 1600",
      decrese: minus,
      increase: plus,
      para: "Lorem Ipsum is simply",
      btn: crossbtn,
      number: num,
    },
  ];
  return (
    <div className="absolute z-[999] top-0 right-0 bg-white w-[500px] ">
      <div className="absolute top-0 -left-5">
        <img
          src={closebtn}
          alt="closebtn"
          className="bg-black size-5 cursor-pointer"
          onClick={toggle}
        />
      </div>
      {isOpen && (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-10">
          <div>
            <h1 className="font-nexaReg text-base text-center">
              Your shopping cart (4 Items)
            </h1>
          </div>
          <div className="space-y-7">
            {prod.map((items, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0 ? " border-b border-black border-opacity-20" : ""
                } flex gap-12 pb-10`}
              >
                <div className="flex gap-12">
                  <div>
                    <img src={items.img} alt="" className="w-20 h-24" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-20">
                      <h1 className="font-nexabold text-base">
                        {items.heading}
                      </h1>
                      <h1 className="font-nexaReg text-base">{items.price}</h1>
                    </div>
                    <p className="text-[#898989] font-roboto font-light text-xs">
                      {items.para}
                    </p>
                    <p className="text-[#898989] font-roboto font-light text-xs">
                      Color : {items.color}
                    </p>
                    <div className="flex gap-20 ">
                      <div className="flex gap-5 items-center">
                        <div className="w-3">
                          <img src={items.decrese} alt="" />
                        </div>
                        <div>
                          <img
                            src={items.number}
                            alt=""
                            className="border p-2"
                          />
                        </div>
                        <div>
                          <img src={items.increase} alt="" />
                        </div>
                      </div>
                      <div className="flex justify-end ">
                        <img src={items.btn} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center  items-center gap-10">
            <div className="border-r border-opacity-20 pr-9">
              <p className="font-nexaReg text-base">Items</p>
              <p className="font-nexaReg text-base">Shipping</p>
              <p className="font-nexaReg text-base">Subtotal</p>
            </div>

            <div>
              <p className="font-nexaReg text-base">₹ 6,400.00</p>
              <p className="font-nexaReg text-base">Free</p>
              <p className="font-nexaReg text-base">₹ 6,400.00</p>
            </div>
          </div>

          <button className="flex justify-center bg-black text-white py-4  w-full gap-16 font-nexabold text-base">
            Checkout <img src={arrowrightwhite} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
