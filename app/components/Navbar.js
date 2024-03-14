import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-x-8 py-6 font-semibold bg-slate-200">
        <li className="cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
