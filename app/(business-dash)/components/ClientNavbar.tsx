"use client";

import React, { useState, useEffect } from "react";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const ClientNavbar: React.FC = () => {
  const { user } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const MobileLinks = [
    { label: "Dashboard", href: "/business-dashboard" },
    { label: "Funding Status", href: "/business-dashboard/funding-status" },
    { label: "Feedback", href: "/business-dashboard/feedback" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent SSR hydration mismatch

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="text-gray-700 font-medium">
          Hi, {user?.firstName} 👋 {/* Friendly greeting */}
        </div>

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

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-4 px-4 py-3 ">
          <SignedIn>
              <div className="mt-4">
                <UserButton
                />
              </div>
            </SignedIn>
            {MobileLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-purple-600 font-medium transition duration-300 cursor-pointer"
              >
                {label}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;