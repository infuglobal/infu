"use client";

import { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate successful login
      console.log("Form submitted", formData);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="w-full flex flex-col py-6 px-4 sm:px-8 items-center justify-center">
      {/* Welcome Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome Back!</h1>
        <p className="text-gray-600 mt-2">
          Sign in to your <span className="text-purple-600 font-bold">Infinity Fund</span> account.
        </p>
      </div>

      {/* Sign-In Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full max-w-md bg-white shadow-sm rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Sign In
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Sign In
        </button>
      </form>

      {/* Google Sign-In */}
      <div className="text-center mt-4 w-full max-w-md">
        <p className="text-gray-600">Or</p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
        >
          Sign In with Google
        </button>
      </div>

      {/* Sign-Up Link */}
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-purple-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
