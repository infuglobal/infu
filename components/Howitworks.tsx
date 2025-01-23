import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Whether you&apos;re an investor, a business, or a learner, our platform is 
          designed to guide you every step of the way.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Investor Step */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/business.png" // Replace with your investor icon path
                alt="Investor Icon"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              For Investors
            </h3>
            <p className="text-gray-600">
              Discover businesses to invest in and monitor your portfolio with 
              real-time insights and analytics.
            </p>
          </div>

          {/* Business Step */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/business.png" // Replace with your business icon path
                alt="Business Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              For Businesses
            </h3>
            <p className="text-gray-600">
              Showcase your business to potential investors and raise the funds 
              you need to grow.
            </p>
          </div>

          {/* Learner Step */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/business.png" // Replace with your learner icon path
                alt="Learner Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              For Learners
            </h3>
            <p className="text-gray-600">
              Access educational resources to deepen your understanding of 
              investments and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
