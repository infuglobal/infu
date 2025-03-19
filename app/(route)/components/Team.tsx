"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Avijit Chandra",
      role: "Founder, INFU",
      image: "/founder.jpg",
      message:
        "Whether you are an investor looking for real returns, a business in need of strategic funding, or an individual eager to learn smart investing, INFU is your gateway to limitless possibilities.",
    },
    {
      id: 2,
      name: "Christina Megha Jamuda",
      role: "Managing director, INFU",
      image: "/christina.jpg",
      message:
        "At Infu, we believe that wealth-building should be easy, secure, and accessible to everyone. Whether you’re starting with ₹1 or $1, or investing big, our AI-powered platform ensures maximum returns with complete transparency. No barriers, no limits, just smart investing!",
    },
    {
      id: 3,
      name: "Kaushik Das",
      role: "HR Head, INFU",
      image: "/kaushik-das.jpg",
      message:
        "At Infinity Fund, we’re all about connecting the right people—innovators with big ideas, investors looking for the next big opportunity, and learners eager to grow their financial knowledge. Our platform makes it easy to explore investment opportunities, secure funding, and gain insights into smart financial growth. Whether you want to expand your portfolio, take your business to the next level, or simply sharpen your financial skills, Infinity Fund is here to help you make it happen.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-gray-50 py-12 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-24 w-full overflow-hidden">
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-purple-400 opacity-25 blur-3xl rounded-full"></div>
      </motion.div>

      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-[#1E1E2E]   mb-12 sm:mb-20 relative z-10"
      >
        Meet Our <span className="text-[#312E81]">Team</span>
      </motion.h1>

      {/* Team Members */}
      <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-evenly w-full rounded-3xl overflow-hidden p-4 sm:p-6 backdrop-blur-lg relative ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Profile Image */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#312E81] shadow-xl hover:scale-105 transition-transform duration-500">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="max-w-md text-center md:text-left mt-6 md:mt-0 md:ml-6 lg:ml-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {member.name}
              </h2>
              <h3 className="text-base sm:text-lg text-[#312E81] font-medium mb-2 sm:mb-4">
                {member.role}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {member.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;