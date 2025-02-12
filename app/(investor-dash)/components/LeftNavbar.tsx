import React from "react";
import Link from "next/link";

const LeftNavbar = () => {
  const navigationItems = [
    { name: "Dashboard", route: "/investor-dashboard" },
    { name: "Your Portfolio", route: "/investor-dashboard/portfolio" },
    { name: "Feedback", route: "/investor-dashboard/feedback" },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen ">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Infinity Fund</h2>
      </div>
      <nav className="px-4">
        <ul className="space-y-4">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link href={item.route}
               className="block text-sm font-medium text-gray-700 hover:text-purple-500">
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
