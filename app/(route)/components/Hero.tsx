import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black w-full h-screen flex justify-center items-center text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/i14.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="hidden md:block object-cover object-center opacity-50"
          priority // Ensures this image is loaded first
        />
         <Image
          src="/i14.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="block md:hidden object-cover object-center opacity-50"
          priority // Ensures this image is loaded first
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 sm:px-4 max-w-4xl">
        <TextGenerateEffect
          words1="Invest, Grow, Learn"
          words2="– All in One"
          words3="Platform"
          className="text-center"
        />
        <div className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed bg-black/50 rounded-3xl py-2 px-4">
          Infu: Turning Every Rupee into Opportunity, Powered by AI{" "}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/sign-up"
            className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white font-semibold 
               px-6 py-3 rounded-full shadow-xl border border-white/30 
               hover:bg-white/30 hover:shadow-2xl hover:-translate-y-1 
               transition-all duration-300 transform"
          >
            Become an <span className="text-purple-300">Investor</span>
          </Link>
          <Link
            href="/sign-in"
            className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white font-semibold 
               px-6 py-3 rounded-full shadow-xl border border-white/30 
               hover:bg-white/30 hover:shadow-2xl hover:-translate-y-1 
               transition-all duration-300 transform"
          >
            Grow Your <span className="text-pink-300">Business</span>
          </Link>
          <Link
            href="learning-resources"
            className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white font-semibold 
               px-6 py-3 rounded-full shadow-xl border border-white/30 
               hover:bg-white/30 hover:shadow-2xl hover:-translate-y-1 
               transition-all duration-300 transform"
          >
            Learn About <span className="text-purple-300">Investments</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
