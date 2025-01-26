import React from "react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

const InvestorsNavbar = () => {

  // Example navigation links
  const links = [
    { name: "Dashboard", href: "#dashboard" },
   
    { name: "Businesses", href: "#businesses" },
    { name: "Profile", href: "#profile" },
  ];

  return (
    <nav className="bg-purple-600 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/" className="hover:text-gray-200">
            PlatformLogo
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className= "text-white hover:text-gray-200" 
            >
              {link.name}
            </Link>
          ))}
           <SignedIn>
            <UserButton />
        </SignedIn>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default InvestorsNavbar;
