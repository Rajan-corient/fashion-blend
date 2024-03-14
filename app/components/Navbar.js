import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-slate-100 py-2">
      <div className="flex flex-col items-center md:flex-row md:justify-start">
        <div className="logo mx-5">
          <Image
            alt="FashionBlend"
            src={"/logo.jpeg"}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-4 font-semibold md:text-xl">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>

            <Link href="/about">
              <li className="cursor-pointer">About</li>
            </Link>

            <Link href="/contact">
              <li className="cursor-pointer">Contact Us</li>
            </Link>

            <Link href="/login">
              <li className="cursor-pointer">Login</li>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 top-2">
          <button>
            <CiShoppingCart className="text-xl md:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
