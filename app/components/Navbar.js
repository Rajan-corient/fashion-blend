"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import SidebarShoppingCart2 from "./SidebarShoppingCart2";
import SidebarCart from "./SidebarCart";

const Navbar = () => {
  // Handler function for toggling the sidebar visibility
  const cartRef = useRef();
  const toggleCart = () => {
    if (cartRef.current.classList.contains("translate-x-full")) {
      cartRef.current.classList.remove("translate-x-full");
      cartRef.current.classList.add("translate-x-0");
    } else {
      cartRef.current.classList.add("translate-x-full");
      cartRef.current.classList.remove("translate-x-0");
    }
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-start py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            alt="FashionBlend"
            src={"/logo.jpeg"}
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-8 font-semibold">
          <Link href="/shirts">
            <li className="cursor-pointer">Shirts</li>
          </Link>

          <Link href="/tshirts">
            <li className="cursor-pointer">T-Shirts</li>
          </Link>

          <Link href="/hoodies">
            <li className="cursor-pointer">Hoodies</li>
          </Link>

          <Link href="/jeans">
            <li className="cursor-pointer">Jeans</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-4 top-4">
        <button onClick={toggleCart}>
          <CiShoppingCart className="text-xl md:text-3xl" />
        </button>
      </div>

      <div
        ref={cartRef}
        className="cart-sidebar absolute w-72 h-full top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform-
        translate-x-full cursor-pointer shadow-md z-10"
      >
        <SidebarCart toggleCart={toggleCart} />
      </div>
    </div>
  );
};

export default Navbar;
