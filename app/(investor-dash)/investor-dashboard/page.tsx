 "use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import { fetchPools, fetchCategories } from "@/lib/serveraction"; // Import fetchCategories

interface Business {
  id: string; // Changed to string to match MongoDB _id
  name: string;
  category: string;
  image: string;
  funding: string;
}

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition duration-300 ${active ? "bg-purple-600 text-white" : "bg-gray-200 text-black hover:bg-gray-300"}`}
  >
    {children}
  </button>
);

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, placeholder }) => (
  <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm border w-96">
    <Search className="text-gray-500" size={20} />
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-none focus:ring-0 w-full outline-none"
    />
  </div>
);

export default function ExploreInvestors() {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [page, setPage] = useState<number>(1);
  const [categories, setCategories] = useState<string[]>(["All"]); // Initialize with "All"
  const observer = useRef<IntersectionObserver | null>(null);

  // Fetch categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

  const fetchBusinesses = useCallback(async () => {
    try {
      const newBusinesses = await fetchPools(page, selectedCategory, search);
      console.log("Fetched businesses:", newBusinesses); // Debugging
      setBusinesses((prev) => [...prev, ...newBusinesses]);
    } catch (error) {
      console.error("Error fetching businesses:", error);
    }
  }, [page, selectedCategory, search]);

  useEffect(() => {
    fetchBusinesses();
  }, [page, selectedCategory, search]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  const filteredBusinesses = businesses.filter(
    (b) =>
      (selectedCategory === "All" || b.category === selectedCategory) &&
      (b.name?.toLowerCase() ?? "").includes(search.toLowerCase()) // Safely handle undefined names
  );

  return (
    <div className="px-6 py-4 w-full h-screen overflow-y-auto">
      {/* Title & Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">
          Explore <span className="text-purple-600">Businesses</span>
        </h1>
        <CustomInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search businesses..."
        />
      </div>

      {/* Categories */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <CustomButton
            key={category}
            onClick={() => setSelectedCategory(category)}
            active={selectedCategory === category}
          >
            {category}
          </CustomButton>
        ))}
      </div>

      {/* Business Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredBusinesses.map((business, index) => (
          <Link
            key={index}
            href={`/investor-dashboard/invest-business/${business.id}`} // Dynamic route using poolId
            passHref
          >
            <div
              ref={index === filteredBusinesses.length - 1 ? lastElementRef : null}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer" // Add cursor-pointer for better UX
            >
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
        ))}
      </div>
    </div>
  );
}