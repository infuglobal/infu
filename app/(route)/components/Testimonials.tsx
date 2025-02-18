import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex P.",
      role: "Marketing Manager at TrendyCo",
      feedback:
        "Infu has streamlined our entire influencer collaboration process. The escrow feature ensures trust on both ends!",
    },
    {
      name: "Sarah T.",
      role: "CEO of Spark Influencer Agency",
      feedback:
        "We reduced our refund disputes by 80% after integrating Infu’s Tazapay escrow system—our clients love the transparency.",
    },
    {
      name: "Raj K.",
      role: "Founder of FitnessX Brand",
      feedback:
        "Reliable payments and straightforward fee structure make Infu the best platform for small businesses like mine!",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 via-indigo-100 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-900 tracking-wide">
            What Our Users Say
          </h2>
          <p className="text-gray-700 mt-4 text-lg sm:w-2/3 mx-auto">
            See how Infu is transforming lives for businesses and entrepreneurs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl border border-purple-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform "
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-purple-500 text-5xl mb-6 animate-bounce" />

              {/* User Feedback */}
              <p className="text-gray-600 italic mb-6 text-lg max-w-xs mx-auto">
                &quot;{testimonial.feedback}&quot;
              </p>

              {/* User Name and Role */}
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
