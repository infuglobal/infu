import React from "react";
import Link from "next/link";

const LeftNavbar = () => {
  const navigationItems = [
    { name: "Dashboard", route: "/business-dashboard" },
    { name: "Your Business", route: "/business-dashboard/profile" },
    { name: "Funding Status", route: "/business-dashboard/funding-status" },
    { name: "Feedback", route: "/business-dashboard/feedback" },
  ];

  return (
    <div className="hidden md:block w-64 bg-white border-r border-gray-200 h-screen shadow-sm">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
          <span className="text-gray-900">Infinity</span>
          <span>Fund</span>
        </h2>
        
      </div>

      {/* Navigation Links */}
      <nav className="px-4 py-6">
        <ul className="space-y-3">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.route}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftNavbar;