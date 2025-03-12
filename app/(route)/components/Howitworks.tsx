'use client'

import React from "react";
import { motion } from "framer-motion";
import { FocusCards } from "@/components/ui/focus-cards";

const HowItWorks = () => {
  const cards = [
    {
      title: "For Investors: Access high-growth opportunities with real-time insights",
      src: "/indian-investor.jpg",
    },
    {
      title: "For Businesses: Secure funding and connect with growth-focused investors",
      src: "/i8.jpg",
    },
    {
      title: "For Learners: Master smart investing to build wealth and financial growth",
      src: "/indian-learning.jpg",
    },
  ];
  

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-purple-50 to-gray-50 bg-opacity-70 backdrop-blur-lg py-20   rounded-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        How it <span className="text-purple-600">Works</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you&apos;re an investor, a business, or a learner, our platform
          is designed to guide you every step of the way.
        </motion.p>

        {/* Focus Cards Component */}
        <FocusCards cards={cards} />
      </div>
    </section>
  );
};

export default HowItWorks;
