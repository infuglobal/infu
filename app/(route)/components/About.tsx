"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-purple-50 to-white py-20 my-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center gap-16">
        {/* Left Section: Image with Animation */}
        <motion.div
          className="relative w-full md:w-1/2 h-80 md:h-[450px] rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/i13.webp"
            alt="About Infinity Fund"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="rounded-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Right Section: Content with Animation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-[#1E1E2E]  mb-6 drop-shadow-lg">
            About <span className="text-[#312E81]">Infinity Fund</span> 
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At Infinity Fund, we aim to bridge the gap between innovative
            businesses, eager investors, and curious learners. Our platform
            empowers users to explore investment opportunities, fund their
            ideas, and learn about smart financial growth.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Whether you&apos;re looking to expand your portfolio, take your
            business to new heights, or deepen your knowledge, Infinity Fund is
            the trusted platform to achieve your goals.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/about-infu"
              className="inline-block bg-gradient-to-r from-[#1E1E2E] to-[#312E81] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
