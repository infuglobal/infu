"use client";

import React, { useState } from "react";

const CreatePool: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [businessNature, setBusinessNature] = useState("");
  const [profitability, setProfitability] = useState("");
  const [revenueModel, setRevenueModel] = useState("");
  const [riskLevel, setRiskLevel] = useState("");
  const [executionPlan, setExecutionPlan] = useState("");
  const [lockInPeriod, setLockInPeriod] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

   

   

  };

  return (
    <div className="h-screen w-full pb-10 overflow-y-auto">
      <div className="mx-auto px-6 py-10 flex justify-center">
        <div className="w-[90%] bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Create a Pool</h1>
            <p className="text-sm text-gray-600 mt-2">
              Complete the form below to create an investment pool.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">Investment Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount Required</label>
                  <input
                    required
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount required"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Profitability</label>
                  <input
                    required
                    type="text"
                    value={profitability}
                    onChange={(e) => setProfitability(e.target.value)}
                    placeholder="Enter estimated profitability"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nature of Business</label>
                  <input
                    required
                    type="text"
                    value={businessNature}
                    onChange={(e) => setBusinessNature(e.target.value)}
                    placeholder="Enter nature of business"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Revenue Model</label>
                  <input
                    required
                    type="text"
                    value={revenueModel}
                    onChange={(e) => setRevenueModel(e.target.value)}
                    placeholder="Enter revenue model"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Risk Level</label>
                  <input
                    required
                    type="text"
                    value={riskLevel}
                    onChange={(e) => setRiskLevel(e.target.value)}
                    placeholder="Enter risk level"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Execution Plan</label>
                  <textarea
                    required
                    rows={4}
                    value={executionPlan}
                    onChange={(e) => setExecutionPlan(e.target.value)}
                    placeholder="Describe execution plan"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lock-in Period</label>
                  <input
                    required
                    type="text"
                    value={lockInPeriod}
                    onChange={(e) => setLockInPeriod(e.target.value)}
                    placeholder="E.g., 3 months, 1 year"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Submit Pool
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePool;
