"use client";

import { useState, useEffect } from "react";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
  const [role, setRole] = useState<"Investor" | "Business" | null>(null);

  useEffect(() => {
    // Retrieve the selected role from localStorage when the component mounts
    const savedRole = localStorage.getItem("infurole") as "Investor" | "Business" | null;
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const handleRoleSelection = (selectedRole: "Investor" | "Business") => {
    setRole(selectedRole);
    localStorage.setItem("infurole", selectedRole); // Save role to localStorage with key "infurole"
  };

  return (
    <div className="w-full h-screen overflow-y-auto flex items-center justify-center bg-white">
      {!role ? (
        <div className="text-center w-full max-w-md bg-white p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to</h1>
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Infinity Fund!</h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Unlock the future of finance. Whether you&apos;re ready to invest in thriving businesses
            or launch your own, Infinity Fund is where innovation and opportunity collide.
          </p>

          {/* Role Selection Buttons */}
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => handleRoleSelection("Investor")}
              className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Become an Investor
            </button>
            <button
              onClick={() => handleRoleSelection("Business")}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Grow your Business
            </button>
          </div>

          {/* Sign-In Link */}
          <div className="mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-purple-600 hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center">
          <SignUp
            appearance={{
              elements: {
                card: "w-full h-full py-12 bg-white border-none shadow-none flex flex-col",
                form: "flex-grow flex flex-col justify-center",
                formButtonPrimary:
                  "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500",
              },
              variables: {
                spacingUnit: "1.1rem",
              },
              layout: {
                unsafe_disableDevelopmentModeWarnings: true,
              },
            }}
            afterSignUpUrl="/update-role" // Redirect to update role
          />
        </div>
      )}
    </div>
  );
};

export default SignUpPage;