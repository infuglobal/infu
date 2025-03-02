// MobileMenu.jsx (Client Component)
"use client";

import React, { useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

interface MobileLink {
    label: string;
    href: string;
  }

  interface MobileMenuProps {
    mobileLinks: MobileLink[];
  }
  
  const MobileMenu: React.FC<MobileMenuProps> = ({ mobileLinks }) => {  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-4 py-3 text-center">
            {mobileLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
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
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;