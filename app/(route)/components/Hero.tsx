import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative bg-black w-full h-screen flex justify-center items-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/i6.jpg" 
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-50"
          priority // Ensures this image is loaded first
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Invest, Grow, Learn – All in One Platform
        </h1>
        <div className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed bg-black/50 rounded-3xl py-2 px-4">
        Infu: Turning Every Rupee into Opportunity, Powered by AI        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href='/sign-up' className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            Become an Investor
          </Link>
          <Link href='/sign-in' className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            Grow Your Business
          </Link>
          <Link href='learning-resources' className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
            Learn About Investments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
