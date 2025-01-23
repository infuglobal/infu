"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scrolling function
  const handleScroll = (e: React.SyntheticEvent | MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/infu-logo.jpg" 
              alt="Infinity Fund Logo"
              width={40}
              height={40}
              className="mr-2 rounded-e-full"
            />
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Infinity Fund
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, "how-it-works")}
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#features"
              onClick={(e) => handleScroll(e, "features")}
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
            >
              Features
            </a>

            {/* Stunning Login/Sign-Up Button */}
            <Link
              href="/register"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
            >
              Login / Sign-Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-2 px-4 py-3 text-center">
              <Link
                href="/"
                onClick={(e) =>( handleScroll(e, "home"), setIsMobileMenuOpen(false))}
                className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                Home
              </Link>
              <a
                href="#about"
                onClick={(e) => (handleScroll(e, "about"), setIsMobileMenuOpen(false))}
                className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => (handleScroll(e, "how-it-works"), setIsMobileMenuOpen(false))}
                className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                How It Works
              </a>
              <a
                href="#features"
                onClick={(e) =>( handleScroll(e, "features"), setIsMobileMenuOpen(false))}
                className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                Features
              </a>
              <Link
                href="/register"
                className="block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 text-center"
              >
                Login / Sign-Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
