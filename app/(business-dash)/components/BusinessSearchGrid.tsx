"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Business {
  id: string;
  name: string;
  category: string;
  image: string;
  funding: string;
}

interface BusinessSearchGridProps {
  businesses: Business[];
  categories: string[];
}

export default function BusinessSearchGrid({ businesses, categories }: BusinessSearchGridProps) {
  // ✅ Manage search and category state locally
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Ensure categories are unique
  const uniqueCategories = [...new Set(categories)];

  // ✅ Filter businesses dynamically without modifying the URL
  const filteredBusinesses = businesses.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* 🔍 Search Input */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">
          Explore <span className="text-purple-600">Businesses</span>
        </h1>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border w-96">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search businesses..."
            className="border-none focus:ring-0 w-full outline-none"
          />
        </div>
      </div>

      {/* 🏷️ Category Buttons */}
      <div className="flex gap-3 mb-6">
        {uniqueCategories.map((category) => (
          <button
            key={category} // ✅ Ensure unique keys
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🏢 Business Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business) => (
            <Link key={business.id} href={`/business-dashboard/business-details/${business.id}`} passHref>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
                <Image
                  src={business.image}
                  alt={business.name}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-black">{business.name}</h2>
                  <p className="text-sm text-gray-600">{business.category}</p>
                  <p className="text-purple-600 font-semibold mt-2">{business.funding}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No businesses found.</p>
        )}
      </div>
    </div>
  );
}
