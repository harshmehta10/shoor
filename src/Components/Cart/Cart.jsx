import React, { useEffect } from "react";
import plus from "../../assets/SVG/plus.svg";
import minus from "../../assets/SVG/minus.svg";
import crossbtn from "../../assets/SVG/crossbtn.svg";
import arrowrightwhite from "../../assets/SVG/arrowrightwhite.svg";
import closebtn from "../../assets/SVG/closebtn.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../app/cartSlice";
import { Link } from "react-router";

const Cart = ({ isOpen, toggle }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("remove");
    dispatch(removeFromCart(id));
  };

  // Calculate total items by summing the quantity of each item.
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  // Compute unique items count based on item.id
  const uniqueItemsCount = new Set(cartItems.map((item) => item.id)).size;

  // Disable background scrolling when the cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="absolute z-[999] -top-5 lg:-top-2 -right-5 lg:-right-5 bg-white w-[300px] lg:w-[500px] h-[600px]">
      <div className="absolute top-5 lg:top-0 -left-5">
        <img
          src={closebtn}
          alt="closebtn"
          className="bg-black size-5 cursor-pointer"
          onClick={toggle}
        />
      </div>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-[500px]">
          <h2 className="text-2xl font-nexaReg">Your cart is empty.</h2>
        </div>
      ) : (
        isOpen && (
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-10">
            <div>
              <h1 className="font-nexaReg text-sm lg:text-base text-center">
                Your shopping cart ({totalItems} items)
              </h1>
            </div>

            {/* Items Section: make scrollable if more than 2 unique items */}
            <div
              className={`space-y-7 ${
                uniqueItemsCount > 2 ? "max-h-[300px] overflow-y-auto" : ""
              }`}
            >
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 0 ? "border-b border-black border-opacity-20" : ""
                  } flex gap-12 pb-10`}
                >
                  <div className="flex gap-6 lg:gap-12">
                    <div>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-20 h-24"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-8 lg:gap-20">
                        <h1 className="font-nexabold text-sm lg:text-base">
                          {item.title}
                        </h1>
                        <h1 className="font-nexaReg text-sm lg:text-base">
                          {item.price}
                        </h1>
                      </div>
                      <p className="text-[#898989] font-roboto font-light text-xs">
                        {item.description}
                      </p>

                      <div className="flex gap-20">
                        <div className="flex gap-5 items-center">
                          <div
                            className="w-3 cursor-pointer"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            <img src={minus} alt="Decrease quantity" />
                          </div>
                          <div>{item.quantity}</div>
                          <div
                            className="cursor-pointer"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            <img src={plus} alt="Increase quantity" />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button onClick={() => handleRemove(item.id)}>
                            <img src={crossbtn} alt="Remove" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="flex justify-center items-center gap-10 pb-5">
                <div className="border-r border-opacity-20 pr-9">
                  <p className="font-nexaReg text-base">Shipping</p>
                  <p className="font-nexaReg text-base">Subtotal</p>
                </div>
                <div>
                  <p className="font-nexaReg text-base">Free</p>
                  <p className="font-nexaReg text-base">₹ {totalAmount}</p>
                </div>
              </div>
            )}

            <Link to="/checkout">
              <button className="flex justify-center bg-black text-white py-4 w-full gap-16 font-nexabold text-base">
                Checkout <img src={arrowrightwhite} alt="Checkout" />
              </button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
