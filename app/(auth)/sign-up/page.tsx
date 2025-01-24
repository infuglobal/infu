"use client";

import { useState } from "react";
import Link from "next/link";

const SignUp = () => {
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
      // Simulate successful form submission
      console.log("Form submitted", formData);
    } catch (error) {
      console.error("Error registering user:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="w-full flex flex-col py-6 px-4 sm:px-8 items-center justify-center">
      {/* Welcome Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome!</h1>
        <p className="text-gray-600 mt-2">
          Join <span className="text-purple-600 font-bold">Infinity Fund</span> and start your journey today.
        </p>
      </div>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full max-w-md bg-white shadow-sm rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Create Your Account
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
          Register
        </button>
      </form>

      {/* Google Sign-Up */}
      <div className="text-center mt-4 w-full max-w-md">
        <p className="text-gray-600">Or</p>
        <button
          onClick={handleGoogleSignup}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
        >
          Sign Up with Google
        </button>
      </div>

      {/* Sign In Link */}
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-purple-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
