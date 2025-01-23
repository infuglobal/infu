"use client";

import { useState } from "react";
import Image from "next/image";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "Investor",
    profilePicture: "",
    phoneNumber: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
      console.error("Error registering user:");
      setError("An error occurred. Please try again.");
    
  };

  const handleGoogleSignup = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="flex bg-white min-h-screen flex-col lg:flex-row">
      <section className="w-full lg:w-[50%] flex justify-center items-center p-8">
        <div className="w-full flex flex-col py-5 items-center justify-center shadow-sm rounded-lg">
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5 w-[80%] sm:w-[90%]">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4">Create an Account</h2>
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full text-gray-700 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Investor">Investor</option>
              <option value="Business">Business</option>
              <option value="Learner">Learner</option>
              <option value="Admin">Admin</option>
            </select>
            <input
              type="text"
              name="profilePicture"
              placeholder="Profile Picture URL"
              value={formData.profilePicture}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-600">Or</p>
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
            >
              Sign Up with Google
            </button>
          </div>
        </div>
      </section>

      {/* Right Section: Image */}
      <div className="hidden lg:block w-[50%]">
        <Image
          src="/i5.jpg"
          alt="login image"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-sm shadow-lg"
        />
      </div>
    </div>
  );
};

export default Register;
