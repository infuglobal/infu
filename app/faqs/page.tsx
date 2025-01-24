"use client";

import { FAQS } from "@/data/data";
import { useState } from "react";

type FAQCategory = keyof typeof FAQS; // Infer valid categories from FAQS

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("investors");
  const categories = Object.keys(FAQS) as FAQCategory[]; // Cast keys to FAQCategory type
  const faqs = FAQS[activeCategory]; // Fetch FAQs for the current category

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-5 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Find answers to the most common questions about our platform.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md transition-transform transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 border border-purple-600 hover:bg-purple-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6 last:border-b-0"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {question}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Still have questions?
          </h2>
          <p className="text-gray-600 mt-2">
            Contact our support team for personalized assistance.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
