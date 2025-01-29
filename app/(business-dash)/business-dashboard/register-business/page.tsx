'use client'
import React, { useState } from 'react';

const RegisterBusiness: React.FC = () => {
  const [gst, setGst] = useState('');
  const [gstVerified, setGstVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [fundingAmount, setFundingAmount] = useState('');
  const [roi, setRoi] = useState('');
  const [paybackPeriod, setPaybackPeriod] = useState('');
  const [useOfFunds, setUseOfFunds] = useState('');

  const handleVerifyGST = async () => {
    try {
      setVerificationMessage('Verifying...');
      const response = await fetch('/api/verify-gst', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gst }),
      });

      const data = await response.json();
      if (data.verified) {
        setGstVerified(true);
        setVerificationMessage('GST Verified Successfully ✅');
      } else {
        setGstVerified(false);
        setVerificationMessage(data.message || 'GST Verification Failed ❌');
      }
    } catch (err) {
      setVerificationMessage(`Error verifying GST. Please try again.,${err}`);
    }
  };

  

  return (
    <div className=" h-screen w-full pb-10 overflow-y-auto">
              <div className="  mx-auto px-6 py-10 flex justify-center">

      <div className="w-[90%] bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
      {/* Page Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Register Your Business</h1>
          <p className="text-sm text-gray-600 mt-2">
            Complete the form below to register your business and apply for funding.
          </p>
        </header>

        {/* Form */}
        <form className="space-y-8">
          {/* Business Details Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Business Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business-name"
                  placeholder="Enter your business name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
              <div>
                <label htmlFor="gst" className="block text-sm font-medium text-gray-700">
                  GST Number
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="gst"
                    placeholder="Enter GST number"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                    className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyGST}
                    className="ml-3 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                  >
                    Verify
                  </button>
                </div>
                {verificationMessage && (
                  <p className={`text-sm mt-2 ${gstVerified ? 'text-green-600' : 'text-red-600'}`}>
                    {verificationMessage}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="pan" className="block text-sm font-medium text-gray-700">
                  PAN Number
                </label>
                <input
                  type="text"
                  id="pan"
                  placeholder="Enter PAN number"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
            </div>
          </section>

          {/* Funding Application Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Funding Application</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="funding-amount" className="block text-sm font-medium text-gray-700">
                  Funding Amount Needed
                </label>
                <input
                  type="number"
                  id="funding-amount"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(e.target.value)}
                  placeholder="Enter funding amount"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
              <div>
                <label htmlFor="roi" className="block text-sm font-medium text-gray-700">
                  Proposed ROI
                </label>
                <input
                  type="number"
                  id="roi"
                  value={roi}
                  onChange={(e) => setRoi(e.target.value)}
                  placeholder="Enter ROI percentage"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
              <div>
                <label htmlFor="payback-period" className="block text-sm font-medium text-gray-700">
                  Payback Period (months)
                </label>
                <input
                  type="number"
                  id="payback-period"
                  value={paybackPeriod}
                  onChange={(e) => setPaybackPeriod(e.target.value)}
                  placeholder="Enter payback period"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
              <div>
                <label htmlFor="use-of-funds" className="block text-sm font-medium text-gray-700">
                  Intended Use of Funds
                </label>
                <input
                  type="text"
                  id="use-of-funds"
                  value={useOfFunds}
                  onChange={(e) => setUseOfFunds(e.target.value)}
                  placeholder="Describe the use of funds"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                />
              </div>
            </div>
          </section>

         

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
