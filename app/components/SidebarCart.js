"use client";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";

const SidebarCart = ({ toggleCart }) => {
  // Initialize state for sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <h2 className="font-bold text-md text-center">Shopping Cart</h2>
      <span className="absolute top-3 right-3 text-pink-500 cursor-pointer text-2xl">
        <IoCloseCircle onClick={toggleCart} />
      </span>
      <ul className="list-decimal">
        <li>
          <div className="item flex my-5">
            <div className="w-2/3 text-sm font-semibold">
              TShirt - Wear the trend
            </div>
            <div className="w-1/3 flex justify-center items-center text-lg">
              <span className="text-pink-500">
                <AiFillMinusCircle />
              </span>
              <span className="mx-2 text-sm">1</span>
              <span className="text-pink-500">
                <AiFillPlusCircle />
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-5">
            <div className="w-2/3 text-sm font-semibold">
              TShirt - Wear the trend
            </div>
            <div className="w-1/3 flex justify-center items-center text-lg">
              <span className="text-pink-500">
                <AiFillMinusCircle />
              </span>
              <span className="mx-2 text-sm">1</span>
              <span className="text-pink-500">
                <AiFillPlusCircle />
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-5">
            <div className="w-2/3 text-sm font-semibold">
              TShirt - Wear the trend
            </div>
            <div className="w-1/3 flex justify-center items-center text-lg">
              <span className="text-pink-500">
                <AiFillMinusCircle />
              </span>
              <span className="mx-2 text-sm">1</span>
              <span className="text-pink-500">
                <AiFillPlusCircle />
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="item flex my-5">
            <div className="w-2/3 text-sm font-semibold">
              TShirt - Wear the trend
            </div>
            <div className="w-1/3 flex justify-center items-center text-lg">
              <span className="text-pink-500">
                <AiFillMinusCircle />
              </span>
              <span className="mx-2 text-sm">1</span>
              <span className="text-pink-500">
                <AiFillPlusCircle />
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex">
        <button className="flex mt-2 mr-2 text-white bg-pink-500 border-0 px-2 py-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
          <BsBagCheckFill className="m-1" />
          Checkout
        </button>
        <button className="flex mt-2 mr-2 text-white bg-pink-500 border-0 px-2 py-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default SidebarCart;
