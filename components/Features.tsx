import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { features } from "@/data/data";


const Features = () => {


  return (
    <section id="features" className="relative bg-gradient-to-br from-purple-50 via-white to-green-50 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-green-100 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Choose <span className="text-purple-600">INFU?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Experience the future of investments with innovative features designed for everyone.
          </p>
        </div>

        {/* Features Layout */}
        <div className="relative flex flex-wrap justify-center items-start gap-10">
          {/* Feature Items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-xl p-8 max-w-sm w-full transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
              }`}
            >
              {/* Check Icon */}
              <div className="absolute -top-6 -left-6 bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <FaCheckCircle className="text-white text-3xl" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
