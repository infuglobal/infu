import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Investor",
      image: "/john.jpg",
      feedback:
        "Infinity Funds has revolutionized my investment experience. The platform is intuitive, secure, and offers diverse opportunities to grow my portfolio.",
    },
    {
      name: "Jane Smith",
      role: "Business Owner",
      image: "/john.jpg",
      feedback:
        "As a business owner, raising funds has never been easier. The AI-driven insights helped me optimize my profitability and connect with the right investors.",
    },
    {
      name: "Michael Lee",
      role: "Learner",
      image: "/john.jpg",
      feedback:
        "The educational resources on Infinity Funds empowered me to make informed investment decisions. I highly recommend it to anyone starting their financial journey.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-800">
            What Our Users Say
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            See how Infinity Funds is transforming lives for investors,
            businesses, and learners worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-purple-100 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              {/* User Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />

              {/* User Feedback */}
              <p className="text-gray-600 italic mb-6">&quot;{testimonial.feedback}&quot;</p>

              {/* User Name and Role */}
              <h3 className="text-lg font-bold text-purple-800">
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
