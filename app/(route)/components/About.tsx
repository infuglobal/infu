import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-purple-50 to-white py-16 my-10">
      <div className="max-w-7xl m-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[400px]">
          <Image
            src="/i3.jpg" // Replace with your image path
            alt="About Infinity Funds"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg "
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
            About Infinity Fund
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At Infinity Fund, we aim to bridge the gap between innovative 
            businesses, eager investors, and curious learners. Our platform 
            empowers users to explore investment opportunities, fund their 
            ideas, and learn about smart financial growth.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Whether you&apos;re looking to expand your portfolio, take your business 
            to new heights, or deepen your knowledge, Infinity Fund is the 
            trusted platform to achieve your goals.
          </p>
          <Link href="/about-infu" className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-purple-700 transition duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
