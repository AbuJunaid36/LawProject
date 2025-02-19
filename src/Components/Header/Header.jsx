import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="bg-white text-black shadow-md md:px-32">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold" onClick={closeMobileMenu}>
            Logo
          </Link>

          {/* Navigation links */}
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/" className="hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
            <Link
              to="/WaitingRoom"
              className="hover:text-blue-600 transition-colors"
            >
              Waiting Room
            </Link>
            <Link
              to="/ForLawyears"
              className="hover:text-blue-600 transition-colors"
            >
              For Lawyears
            </Link>
          </nav>

          {/* Login button */}
          <Link
            to="/LogIn"
            className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm transition-all"
          >
            Log In
          </Link>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 border-t border-gray-300">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="/"
                className="hover:text-blue-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              <a
                href="/"
                className="hover:text-blue-600 transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
              <a
                href="/"
                className="hover:text-blue-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
              <a
                href="/"
                className="hover:text-blue-600 transition-colors"
                onClick={closeMobileMenu}
              >
                Schedule
              </a>
              <Link
                to="/ForLawyears"
                className="hover:text-blue-600 transition-colors"
                onClick={closeMobileMenu}
              >
                For Lawyears
              </Link>
              <Link
                to="/LogIn"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm transition-all mt-2"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
