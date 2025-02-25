"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const BusinessNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const MobileLinks = [
    { label: "Dashboard", href: "/business-dashboard" },
    { label: "Your Business", href: "/business-dashboard/profile" },
    { label: "Funding Status", href: "/business-dashboard/funding-status" },
    { label: "Feedback", href: "/business-dashboard/feedback" },
  ];
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent SSR hydration mismatch

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/infu-logo.png"
              alt="Infinity Fund Logo"
              width={60}
              height={60}
              className="mr-0"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Business Dashboard
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home"].map((label, index) => (
              <a
                key={index}
                href={"/"}
                className="text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                {label}
              </a>
            ))}

            <SignedIn>
              <UserButton />
            </SignedIn>
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
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-2 px-4 py-3 text-center">
              {MobileLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => (
                    setIsMobileMenuOpen(false)
                  )}
                  className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
                >
                  {label}
                </a>
              ))}
              <SignedIn>
                <UserButton
                appearance={{
            
                  layout: {
                    unsafe_disableDevelopmentModeWarnings: true,
                  
                  }
                }}
                />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BusinessNavbar;
