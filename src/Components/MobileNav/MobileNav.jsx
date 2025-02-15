import React, { useState } from "react";

import { GoHomeFill } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { BiSolidWidget } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div>
      {/* Mobile Bottom Nav */}
      <div className="sm:hidden fixed bottom-0 w-full bg-gradient-to-t from-gray-50 to-white shadow-lg z-40 border-t ">
        <div className="flex justify-between py-3 px-4 relative">
          <Link to="/" className="flex flex-col items-center group">
            <GoHomeFill
              size={26}
              className={`${
                location.pathname === "/" ? "text-blue-500" : "text-gray-700"
              } group-hover:text-blue-500 transition duration-200 ease-in-out`}
            />
            <span
              className={`text-xs ${
                location.pathname === "/" ? "text-blue-500" : "text-gray-600"
              } group-hover:text-blue-500 transition duration-200 ease-in-out`}
            >
              Home
            </span>
          </Link>

          <Link to="/profile" className="flex flex-col items-center group">
            <MdAccountCircle
              size={26}
              className="text-gray-700 group-hover:text-blue-500transition duration-200 ease-in-out"
            />
            <span className="text-xs text-gray-600 group-hover:text-blue-500 transition duration-200 ease-in-out">
              Profile
            </span>
          </Link>

          <Link to="/order" className="flex flex-col items-center group ml-12">
            {/* <FiList size={26} className="text-gray-700 group-hover:text-blue-500 transition duration-200 ease-in-out" /> */}
            <FaListAlt
              size={26}
              className="text-gray-700 group-hover:text-blue-500 transition duration-200 ease-in-out"
            />
            <span className="text-xs text-gray-600 group-hover:text-blue-500 transition duration-200 ease-in-out">
              Order
            </span>
          </Link>

          <button className="flex flex-col items-center group">
            {/* <FiMenu size={26} className="text-gray-700 group-hover:text-blue-500 transition duration-200 ease-in-out" /> */}
            <BiSolidWidget
              size={26}
              className="text-gray-700 group-hover:text-blue-500 transition duration-200 ease-in-out"
            />
            <span className="text-xs text-gray-600 group-hover:text-blue-500 transition duration-200 ease-in-out">
              Menu
            </span>
          </button>

          {/* Centered Cart Icon */}
          <Link
          to="/LawyearDetails"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full border-2 border-gray-200 shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300 ease-in-out"
          aria-label="Go to Lawyer Details"
        >
          <GoLaw
            size={36}
            className={`${
              location.pathname === "/LawyearDetails"
                ? "text-blue-500"
                : "text-gray-700"
            } transition duration-200 ease-in-out`}
          />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
