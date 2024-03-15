import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
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
      <div className="cart absolute right-0 top-2">
        <button>
          <CiShoppingCart className="text-xl md:text-2  xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
