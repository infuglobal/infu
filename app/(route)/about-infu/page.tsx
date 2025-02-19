import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex flex-col items-center">
      {/* Hero Section with Gradient Background and Image */}
      <div className="relative w-full max-w-7xl mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          How Infu Increases Individual Net Worth
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Infu is designed to help you grow your wealth effortlessly, using cutting-edge AI to make your money work harder and smarter.
        </p>
        <div className="relative w-full max-w-3xl mx-auto mb-8">
          <Image
            src='/i1.jpg'
            alt="AI-powered business concept"
            width={1200}
            height={800}
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all"
          />
        </div>
      </div>

      {/* Key Concept Section with Dynamic Cards */}
      <div className="text-center mb-16 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6">
          Key Concept: Make Your Money Work for You
        </h2>
        <p className="text-gray-700 mb-12">
          Infu helps individuals who want to grow their wealth but don&apos;t have the time, skills, or resources to run a business. Here’s how Infu works:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-purple-700 mb-4">AI-Powered Integration</h3>
            <p className="text-gray-600 text-sm">
              Infu uses AI to analyze market trends, investment opportunities, and optimize business operations, ensuring high returns with minimal risk.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-purple-700 mb-4">No Business Required</h3>
            <p className="text-gray-600 text-sm">
              Infu takes the hassle out of running a business for you, pooling funds to invest in diverse, high-performing ventures that generate steady returns.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Safe, Risk-Free Investment</h3>
            <p className="text-gray-600 text-sm">
              Unlike unpredictable stock markets and betting, Infu uses data-driven insights to reduce risks and increase profit consistency.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Wealth for Everyone</h3>
            <p className="text-gray-600 text-sm">
              Whether you&apos;re a small investor or have larger capital, Infu offers opportunities tailored to your financial goals, democratizing wealth creation.
            </p>
          </div>
        </div>
      </div>

      {/* How Infu Works Section with Background and Text */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6 mb-16 rounded-3xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">How Infu Works</h2>
        <div className="max-w-3xl w-full mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-purple-100 mb-4">1. AI-Powered Business Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              <li>Infu uses AI to identify market trends, analyze business potential, and optimize your investments for maximum returns.</li>
              <li>The platform ensures your capital is directed toward the highest-performing ventures with minimized risks.</li>
              <li>AI helps streamline operations, reducing inefficiencies and boosting profitability across all investments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-100 mb-4">2. No Need to Run a Business</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              <li>If you lack the time, expertise, or resources to run a business, Infu does it all for you, ensuring you earn passive income.</li>
              <li>Your funds are pooled with others, allowing Infu to invest in diverse, high-performing businesses that generate reliable returns.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-100 mb-4">3. Safe Alternative to Risky Investments</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              <li>Infu&apos;s AI-driven investments provide a safer, more predictable alternative to stock trading and betting, based on solid data and research.</li>
              <li>The platform reduces risks while optimizing strategies to ensure consistent returns on investments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-100 mb-4">4. Wealth Creation for Everyone</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
              <li>Infu makes wealth-building accessible to everyone, from small investors to seasoned ones, with opportunities suited to your goals.</li>
              <li>The platform levels the playing field, allowing people from all walks of life to benefit from wealth creation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Infu Works Section */}
      <div className="max-w-4xl w-full text-center mb-16">
        <h2 className="text-3xl font-semibold text-purple-600 mb-6">Why Infu Works</h2>
        <div className="space-y-4 text-lg text-gray-700">
          <div>
            <strong className="text-purple-600">AI as Your Partner:</strong> Infu&apos;s AI learns and adapts to constantly optimize business operations, ensuring your investments are always working at their best.
          </div>
          <div>
            <strong className="text-purple-600">Diverse Investment Options:</strong> From real estate to crowdfunding, Infu offers a range of investment types, all with varying risk levels to suit your goals.
          </div>
          <div>
            <strong className="text-purple-600">Transparent and Secure:</strong> Real-time profit tracking, escrow-based transactions, and full transparency ensure your investments are always safe and clear.
          </div>
        </div>
      </div>

      {/* Promise of Infu Section */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">The Promise of Infu</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Infu helps you become the investor you&apos;ve always wanted to be. By letting AI take care of the business, your money will grow steadily, unlocking new opportunities for long-term wealth creation.
        </p>
    
      </div>
    </div>
  );
};

export default AboutPage;
