'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClassName = (route: string) => {
    return pathname === route
      ? 'block w-full text-left text-sm text-purple-600 hover:text-purple-500'
      : 'block w-full text-left text-sm text-gray-500 hover:text-purple-400';
  };

  const adminLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/feedbacks', label: 'Feedbacks' },
    { href: '/admin/businesses', label: 'Businesses' },
    { href: '/admin/investors', label: 'Investors' },
  ];

  return (
    <div>
      <nav className="w-full bg-white shadow-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left Mobile Menu Button */}
            <div className="flex items-center">
              <button
                type="button"
                className="block sm:hidden text-gray-700 hover:text-purple-600 focus:outline-none mr-4"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
              <Image
                src="/infu-logo.png"
                alt="Infinity Fund Logo"
                width={60}
                height={60}
                className="mr-0"
              />
              <Link
                href="/admin"
                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
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
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
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
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300"
                >
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Left Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <aside className="w-64 bg-gray-50 border-r border-gray-200 shadow-lg rounded-lg h-full">
            <div className="flex items-center justify-between p-6">
              <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
              <button
                type="button"
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                <IoClose size={24} />
              </button>
            </div>
            <nav className="px-4">
              <ul className="space-y-4">
                {adminLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={getLinkClassName(href)}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;