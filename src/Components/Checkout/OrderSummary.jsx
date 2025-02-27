import React from "react";
import plus from "../../assets/SVG/plus.svg";
import minus from "../../assets/SVG/minus.svg";
import crossbtn from "../../assets/SVG/crossbtn.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../app/cartSlice";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="max-w-screen-2xl mx-auto w-[550px] px-4">
      {/* Title Bar */}
      <div className="bg-black py-3 flex justify-center">
        <h1 className="font-nexabold text-base text-white">ORDER SUMMARY</h1>
      </div>

      {/* Cart Items */}
      <div className="p-4 bg-[#FBFBFB] space-y-10">
        {cartItems.map((item, idx) => (
          <div
            key={item.id}
            className={`pb-10 ${
              idx < cartItems.length - 1 ? "border-b border-black/20" : ""
            }`}
          >
            <div className="flex gap-6">
              {/* Item Image */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-24 object-cover"
              />

              {/* Item Details */}
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <h2 className="font-nexabold text-sm lg:text-base">
                    {item.title}
                  </h2>
                  <h2 className="font-nexaReg text-sm lg:text-base">
                    {item.price}
                  </h2>
                </div>

                {/* Description + Color */}
                <p className="text-[#898989] font-roboto font-light text-xs leading-5">
                  {item.description}
                  <br />
                  Color : Brown
                </p>

                {/* Quantity & Remove Button */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="w-3"
                    >
                      <img src={minus} alt="Decrease quantity" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="w-3"
                    >
                      <img src={plus} alt="Increase quantity" />
                    </button>
                  </div>
                  <button onClick={() => handleRemove(item.id)}>
                    <img src={crossbtn} alt="Remove" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary (Items, Shipping, Subtotal) */}
      <div className="p-4 bg-[#FBFBFB]">
        <div className="flex justify-end gap-8">
          <div className="text-right">
            <p className="font-nexaReg text-base">Shipping</p>
            <p className="font-nexaReg text-base">Subtotal</p>
          </div>
          <div className="text-right">
            <p className="font-nexaReg text-base">Free</p>
            <p className="font-nexaReg text-base">₹{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
