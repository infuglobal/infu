"use client";

import { registerBusiness } from "@/lib/serveraction";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import
import React, { useState } from "react";
import { toast } from "sonner";

interface GstData {
  gstNumber: string;
  legalName: string;
  centerJurisdiction: string;
  stateJurisdiction: string;
  dateOfRegistration: string | Date;
  constitutionOfBusiness: string;
  taxpayerType: string;
  gstinStatus: string;
  dateOfCancellation?: string | Date | null;
  fieldVisitConducted: string;
  natureBusActivities: string[];
  coreBusinessActivityCode: string;
  coreBusinessActivityDescription: string;
  aadhaarValidation: string;
  aadhaarValidationDate: string | Date;
  address: string;
  hsnInfo: { hsnCode: string; description: string }[];
  filingFrequency: ("Monthly" | "Quarterly" | "Annually")[];
  reference: string;
  addressDetails: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  einvoiceStatus: boolean;
  panNumber: string;
  filingStatus: { year: number; status: string }[];
}

const RegisterBusiness: React.FC = () => {
  const [gst, setGst] = useState("");
  const [gstVerified, setGstVerified] = useState(false);
  const [gstVerificationMessage, setGstVerificationMessage] = useState("");
  const [gstData, setGstData] = useState<GstData | null>(null);

  const [pan, setPan] = useState("");
  const [panVerificationMessage, setPanVerificationMessage] = useState("");
  const [panVerified, setPanVerified] = useState(false);

  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter(); // Initialize useRouter

  const handleVerifyGST = async () => {
    try {
      setGstVerificationMessage("Verifying...");
      const response = await fetch("/api/verify-gst", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gst }),
      });

      const data = await response.json();
      if (data.verified) {
        setGstVerified(true);
        setGstVerificationMessage("GST Verified Successfully ✅");
        setGstData(data.gstData);
        setName(data.gstData.legalName || "");
        setAddress(data.gstData.address || "");
        setState(data.gstData.stateJurisdiction || "");
      } else {
        setGstVerified(false);
        setGstVerificationMessage(data.message || "GST Verification Failed ❌");
      }
    } catch (err) {
      setGstVerificationMessage(
        `Error verifying GST. Please try again. ${err}`
      );
    }
  };

  const handleVerifyPAN = async () => {
    try {
      setPanVerificationMessage("Verifying...");
      const response = await fetch("/api/verify-pan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pan }),
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // Add GST data to formData if verified
    if (gstVerified && gstData) {
      Object.entries(gstData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, JSON.stringify(value));
        }
      });
    }

    toast.promise(registerBusiness(formData), {
      loading: "Registering your business...",
      success: (data) => {
        if (data.success) {
          // Redirect after showing the success toast
          setTimeout(() => {
            router.push("/business-dashboard"); // Use router.push for redirection
          }, 1000); // Delay redirection to allow toast to display
          return "Business registered successfully!";
        } else {
          throw new Error(data.message);
        }
      },
      error: (error) => error.message || "Failed to register business.",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="h-screen w-full pb-10 overflow-y-auto">
      <div className="mx-auto px-6 py-10 flex justify-center">
        <div className="w-[90%] bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          {/* Page Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Register Your Business
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Complete the form below to register your business and apply for
              funding.
            </p>
          </header>

          {/* Form */}
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Business Details Section */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Business Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="business-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Legal Name
                  </label>
                  <input
                    required
                    type="text"
                    id="business-name"
                    name="businessName"
                    placeholder="Enter your business name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business-category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Category
                  </label>
                  <select
                    required
                    id="business-category"
                    name="businessCategory"
                    defaultValue="" // Use defaultValue instead of selected
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  >
                    <option value="" disabled>
                      Select your business category
                    </option>
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Service">Service</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Finance">Finance</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="business-description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Complete description of your business
                  </label>
                  <textarea
                    required
                    maxLength={10000}
                    id="business-description"
                    name="description"
                    rows={9}
                    placeholder="Enter your business description"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div className="flex-col space-y-3">
                  <div>
                    <label
                      htmlFor="gst"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      GST Number (Optional)
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        id="gst"
                        name="gstNumber"
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
                    {gstVerificationMessage && (
                      <p
                        className={`text-sm mt-2 ${
                          gstVerified ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {gstVerificationMessage}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="pan"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      PAN Number
                    </label>
                    <div className="relative flex items-center">
                      <input
                        required
                        type="text"
                        id="pan"
                        name="panNumber"
                        placeholder="Enter Pan number"
                        value={pan}
                        onChange={(e) => setPan(e.target.value)}
                        className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyPAN}
                        className="ml-3 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
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
                </div>
              </div>
            </section>

            {/* Business Address Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Business Address Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Complete Address
                  </label>
                  <input
                    required
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pincode
                  </label>
                  <input
                    type="number"
                    id="pincode"
                    name="pinCode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    required
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State
                  </label>
                  <input
                    required
                    type="text"
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter State"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            {/* Business Owner Details */}
            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">
                Business Owner Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="owner-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    required
                    id="owner-name"
                    name="ownerName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Owner Name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="emailAddress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="number"
                    id="phoneNumber"
                    name="mobileNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="flex space-x-2 m-5">
                <input type="checkbox" required />
                <div>
                  I have read and accept{" "}
                  <Link href="/terms-conditions" className="text-purple-700">
                    terms and Conditions
                  </Link>{" "}
                  before registering my business on Infinity Fund.
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;