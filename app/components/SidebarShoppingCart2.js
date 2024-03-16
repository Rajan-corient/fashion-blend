"use client";
import React, { useState } from "react";

const SidebarShoppingCart2 = () => {
  // Initialize state for sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Handler function for toggling the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 m-5">
      <button
        onClick={toggleSidebar}
        className="flex items-center p-2 bg-white border rounded-md shadow-md text-black font-bold hover:bg-gray-100"
      >
        <svg
          className="fill-current w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm5.6 13.2-1.4-1.4L10 12.6 7.8 9.2l1.4-1.4L10 7.8l3.2 3.2z" />
        </svg>
        <span className="ml-2">Cart ({isOpen ? "hidden" : "visible"})</span>
      </button>
      {isOpen && (
        <div className="bg-white border rounded-md shadow-md p-5 mt-5">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          {/* Replace with actual shopping cart items */}
          <ul className="list-decimal list-inside text-gray-600">
            <li className="mt-2">Item 1 - $100.00</li>
            <li className="mt-2">Item 2 - $200.00</li>
            <li className="mt-2">Item 3 - $300.00</li>
          </ul>
          <p className="mt-4 text-xl font-bold">
            Total: <span className="text-red-600">$600.00</span>
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-5">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default SidebarShoppingCart2;
