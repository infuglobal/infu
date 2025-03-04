"use client";

import { createInvestor } from "@/lib/serveraction";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const RegisterPortfolio: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [riskPreference, setRiskPreference] = useState("Medium");
  const [investmentTypes, setInvestmentTypes] = useState<string[]>([]);
  const [kycStatus, setKycStatus] = useState({
    pan: "",
    aadhaar: "",
  });
  const [accreditedInvestor, setAccreditedInvestor] = useState<boolean>(false);
  const [userRole, setUserRole] = useState("Retail Investor");
  const [country, setCountry] = useState("");
  const [taxResidency, setTaxResidency] = useState("");
  const [bankAccountDetails, setBankAccountDetails] = useState({
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false); // Terms and Conditions
  const [panVerified, setPanVerified] = useState(false); // PAN Verification
  const [panVerificationMessage, setPanVerificationMessage] = useState(""); // PAN Verification Message

  const handleKycStatusChange = (field: string, value: string) => {
    setKycStatus((prev) => ({ ...prev, [field]: value }));
  };

  const handleBankAccountDetailsChange = (field: string, value: string) => {
    setBankAccountDetails((prev) => ({ ...prev, [field]: value }));
  };

  // PAN Verification
  const handleVerifyPAN = async () => {
    try {
      setPanVerificationMessage("Verifying...");
      const response = await fetch("/api/verify-pan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pan: kycStatus.pan }),
      });
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Failed to verify PAN.");
      if (data.verified) {
        setPanVerified(true);
        setPanVerificationMessage(
          `✅ PAN Verified Successfully\n🔹 Name: ${data.panDetails.registeredName}\n`
        );
      } else {
        setPanVerified(false);
        setPanVerificationMessage(
          `❌ PAN Verification Failed: ${data.message || "Invalid PAN"}`
        );
      }
    } catch (err) {
      setPanVerificationMessage(
        `❌ Error: ${err || "Unexpected error occurred"}`
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if terms and conditions are accepted
    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to proceed.");
      return;
    }

    // Check if PAN is verified
    if (!panVerified) {
      toast.error("Please verify your PAN before submitting.");
      return;
    }

    // Prepare the form data
    const formData = {
      fullName,
      dob,
      address,
      pincode,
      city,
      state,
      email,
      phoneNumber,
      riskPreference,
      investmentTypes,
      kycStatus,
      accreditedInvestor,
      userRole,
      country,
      taxResidency,
      bankAccountDetails,
    };

    // Call the server action with toast notifications
    toast.promise(createInvestor(formData), {
      loading: "Registering your portfolio...",
      success: (data) => {
        if (data.success) {
          // Reset the form
          setFullName("");
          setDob("");
          setAddress("");
          setPincode("");
          setCity("");
          setState("");
          setEmail("");
          setPhoneNumber("");
          setRiskPreference("Medium");
          setInvestmentTypes([]);
          setKycStatus({ pan: "", aadhaar: "" });
          setAccreditedInvestor(false);
          setUserRole("Retail Investor");
          setCountry("");
          setTaxResidency("");
          setBankAccountDetails({ accountNumber: "", ifscCode: "", bankName: "" });
          setTermsAccepted(false);
          return "Portfolio registered successfully!";
        } else {
          throw new Error(data.message);
        }
      },
      error: (error) => error.message || "Failed to register portfolio.",
    });
  };

  return (
    <div className="h-screen w-full pb-10 overflow-y-auto">
      <div className="mx-auto px-6 py-10 flex justify-center">
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          {/* Page Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Register Your Investment Portfolio
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Complete the form below to set up your investment portfolio.
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Basic Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    required
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* Address Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Address Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode
                  </label>
                  <input
                    required
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    required
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    required
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter State"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* Contact Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Contact Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* KYC Status */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                KYC Status
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      required
                      type="text"
                      value={kycStatus.pan}
                      onChange={(e) => handleKycStatusChange("pan", e.target.value)}
                      placeholder="Enter PAN Number"
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyPAN}
                      className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                    >
                      Verify
                    </button>
                  </div>
                  {panVerificationMessage && (
                    <p
                      className={`text-sm mt-2 ${
                        panVerified ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {panVerificationMessage}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number
                  </label>
                  <input
                    required
                    type="text"
                    value={kycStatus.aadhaar}
                    onChange={(e) => handleKycStatusChange("aadhaar", e.target.value)}
                    placeholder="Enter Aadhaar Number"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                
              </div>
            </section>

            {/* Accredited Investor Status */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Accredited Investor Status
              </h2>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accreditedInvestor"
                    checked={accreditedInvestor === true}
                    onChange={() => setAccreditedInvestor(true)}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accreditedInvestor"
                    checked={accreditedInvestor === false}
                    onChange={() => setAccreditedInvestor(false)}
                  />
                  No
                </label>
              </div>
            </section>

            {/* User Role */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                User Role
              </h2>
              <select
                required
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
              >
                <option value="Retail Investor">Retail Investor</option>
                <option value="Institutional Investor">Institutional Investor</option>
                <option value="HNI">High Networth Individual (HNI)</option>
              </select>
            </section>

            {/* Country & Tax Residency */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Country & Tax Residency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    required
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter Country"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax Residency
                  </label>
                  <input
                    required
                    type="text"
                    value={taxResidency}
                    onChange={(e) => setTaxResidency(e.target.value)}
                    placeholder="Enter Tax Residency"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* Bank Account Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Bank Account Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                  </label>
                  <input
                    required
                    type="text"
                    value={bankAccountDetails.accountNumber}
                    onChange={(e) =>
                      handleBankAccountDetailsChange("accountNumber", e.target.value)
                    }
                    placeholder="Enter Account Number"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    IFSC Code
                  </label>
                  <input
                    required
                    type="text"
                    value={bankAccountDetails.ifscCode}
                    onChange={(e) =>
                      handleBankAccountDetailsChange("ifscCode", e.target.value)
                    }
                    placeholder="Enter IFSC Code"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Name
                  </label>
                  <input
                    required
                    type="text"
                    value={bankAccountDetails.bankName}
                    onChange={(e) =>
                      handleBankAccountDetailsChange("bankName", e.target.value)
                    }
                    placeholder="Enter Bank Name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* Terms and Conditions */}
            <section>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <p className="text-sm text-gray-700">
                  I have read and accept the{" "}
                  <Link href="/terms-conditions" className="text-purple-600 hover:underline">
                    terms and conditions
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
              >
                Submit Portfolio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPortfolio;