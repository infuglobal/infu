import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-200 to-indigo-200 text-gray-900 py-10 mt-20 shadow-lg rounded-t-2xl text-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-extrabold text-purple-700 hover:text-purple-900 transition duration-300">
              Infinity Fund
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Empowering investors, businesses, and learners to achieve financial growth with innovation and security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-purple-700">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#home" className="hover:text-purple-900 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-purple-900 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-purple-900 transition duration-300">
                  How it works
                </Link>
              </li>
             
              <li>
                <Link href="/faqs" className="hover:text-purple-900 transition duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
  <h3 className="font-semibold text-xl mb-4 text-purple-700">Follow Us</h3>
  <p className="text-gray-600 mb-4">
    Stay connected through our social media platforms for updates and insights.
  </p>
  <div className="flex justify-center md:justify-start space-x-6">
    <Link target="blank" href="https://x.com/Infinity_Fund24?t=G2RlwYRA7Nu70xgqZCrozw&s=08" passHref>
      <FaTwitter
        size={28}
        className="text-gray-600 hover:text-purple-800 transition duration-300 transform hover:scale-110"
      />
    </Link>
    <Link target="blank" href="https://www.facebook.com/profile.php?id=61572575597745" passHref>
      <FaFacebook
        size={28}
        className="text-gray-600 hover:text-purple-800 transition duration-300 transform hover:scale-110"
      />
    </Link>
    <Link target="blank" href="https://www.instagram.com/in.fu.co?utm_source=qr&igsh=bTd2YmQzeTdpdzlr" passHref>
      <FaInstagram
        size={28}
        className="text-gray-600 hover:text-purple-800 transition duration-300 transform hover:scale-110"
      />
    </Link>
    <Link target="blank" href="https://www.linkedin.com/company/106347988/admin/dashboard/" passHref>
      <FaLinkedin
        size={28}
        className="text-gray-600 hover:text-purple-800 transition duration-300 transform hover:scale-110"
      />
    </Link>
    <Link target="blank" href="https://wa.me/919155436850" passHref>
      <FaWhatsapp
        size={28}
        className="text-gray-600 hover:text-purple-800 transition duration-300 transform hover:scale-110"
      />
    </Link>
  </div>
  <p className="text-gray-600 mt-4">
    Email us at:{" "}
    <div  className="text-purple-700 hover:underline">
      team@globalinfinityfund.com
    </div>
  </p>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-400 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Infinity Fund. All Rights Reserved. |{" "}
            <Link href="/privacy-policies" passHref>
              <span className="hover:text-purple-800 cursor-pointer transition duration-300">
                Privacy Policy
              </span>
            </Link>{" "}
            |{" "}
            <Link href="/terms-conditions" passHref>
              <span className="hover:text-purple-800 cursor-pointer transition duration-300">
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
