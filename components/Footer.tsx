import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-100 to-purple-300 text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
          {/* Logo and Description */}
          <div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
              Infinity Funds
            </h1>
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Empowering investors, businesses, and learners to achieve financial growth with innovation and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-pink-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
            <p className="text-gray-800 mb-4">
              Stay connected through our social media platforms for updates and insights.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link href="https://twitter.com" passHref>
                <FaTwitter
                  size={28}
                  className="text-gray-800 hover:text-pink-400 transition"
                />
              </Link>
              <Link href="https://facebook.com" passHref>
                <FaFacebook
                  size={28}
                  className="text-gray-800 hover:text-pink-400 transition"
                />
              </Link>
              <Link href="https://instagram.com" passHref>
                <FaInstagram
                  size={28}
                  className="text-gray-800 hover:text-pink-400 transition"
                />
              </Link>
              <Link href="https://linkedin.com" passHref>
                <FaLinkedin
                  size={28}
                  className="text-gray-800 hover:text-pink-400 transition"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-500 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Infinity Funds. All Rights Reserved. |{" "}
            <Link href="/privacy" passHref>
              <span className="hover:text-pink-400 cursor-pointer">
                Privacy Policy
              </span>
            </Link>{" "}
            |{" "}
            <Link href="#" passHref>
              <span className="hover:text-pink-400 cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
