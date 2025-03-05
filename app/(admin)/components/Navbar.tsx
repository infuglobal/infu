'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  

  const adminLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/feedbacks', label: 'Feedbacks' },
    { href: '/admin/businesses', label: 'Businesses' },
    { href: '/admin/investors', label: 'Investors' },
  ];

  return (
    <div>
      <div className="w-full bg-white border-b border-gray-200 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Mobile Menu Button */}
            <div className="flex items-center">
              
              <Image
                src="/infu-logo.png"
                alt="Infinity Fund Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <Link
                href="/admin"
                className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
              >
                Admin Dashboard
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              {adminLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-gray-700 hover:text-purple-600 font-medium transition duration-300 ${
                    pathname === href ? 'text-purple-600' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
              >
                Home
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
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
            <div className="sm:hidden">
              <div className="space-y-2 px-4 py-3 text-center">
                {adminLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`block text-gray-700 hover:text-purple-600 font-medium transition duration-300 ${
                      pathname === href ? 'text-purple-600' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      
      
    </div>
  );
};

export default AdminNavbar;