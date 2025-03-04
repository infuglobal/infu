"use client";
import React, { useState, useCallback } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createPool } from "@/lib/serveraction";
import Image from "next/image";
import { X } from "lucide-react"; // Import close icon
import Link from "next/link";

const CreatePool: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [profitability, setProfitability] = useState<string>("");
  const [revenueModel, setRevenueModel] = useState<string>("");
  const [executionPlan, setExecutionPlan] = useState<string>("");
  const [lockInPeriod, setLockInPeriod] = useState<string>("");
  const [hashtagInput, setHashtagInput] = useState<string>(""); // Input for hashtags
  const [hashtags, setHashtags] = useState<string[]>([]); // Array of hashtags
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false); // State for terms and conditions
  const router = useRouter();

  const handleThumbnailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }, []);

  // Add a hashtag
  const addHashtag = () => {
    if (hashtagInput.trim() === "") return; // Ignore empty input
    if (hashtags.length >= 10) {
      toast.error("You can only add up to 10 hashtags.");
      return;
    }
    if (!hashtagInput.startsWith("#")) {
      toast.error("Hashtags must start with '#'.");
      return;
    }
    setHashtags((prev) => [...prev, hashtagInput.trim()]);
    setHashtagInput(""); // Clear input
  };

  // Remove a hashtag
  const removeHashtag = (index: number) => {
    setHashtags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if terms and conditions are accepted
    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      // Add hashtags to the form data as a comma-separated string
      formData.append("hashtags", hashtags.join(","));

      await toast.promise(
        createPool(formData),
        {
          loading: "Creating your Pool...",
          success: (data) => {
            if (data.success) {
              router.push("/business-dashboard/funding-status");
              return "Pool created successfully!";
            } else {
              throw new Error(data.message);
            }
          },
          error: (error: Error) => error.message || "Failed to create pool.",
        }
      );
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen w-full pb-10 overflow-y-auto">
      <div className="mx-auto px-6 py-10 flex justify-center">
        <div className=" bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
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
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount required"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Profitability Percentage</label>
                  <input
                    required
                    type="number"
                    name="profitability"
                    value={profitability}
                    onChange={(e) => setProfitability(e.target.value)}
                    placeholder="Enter estimated profitability"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    required
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Tech">Tech</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lock-in Period</label>
                  <input
                    required
                    type="text"
                    name="lockInPeriod"
                    value={lockInPeriod}
                    onChange={(e) => setLockInPeriod(e.target.value)}
                    placeholder="E.g., 3 months, 1 year"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">Business Description</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Revenue Model</label>
                  <textarea
                    required
                    rows={4}
                    name="revenueModel"
                    value={revenueModel}
                    onChange={(e) => setRevenueModel(e.target.value)}
                    placeholder="Describe your revenue model in detail"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Execution Plan</label>
                  <textarea
                    required
                    rows={4}
                    name="executionPlan"
                    value={executionPlan}
                    onChange={(e) => setExecutionPlan(e.target.value)}
                    placeholder="Provide a detailed execution plan, including milestones, timelines, and key achievements"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Please provide a complete description of your execution plan, including any achievements or milestones.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">Hashtags</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Add Hashtags</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={hashtagInput}
                    onChange={(e) => setHashtagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addHashtag();
                      }
                    }}
                    placeholder="Type a hashtag and press Enter or click +"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-purple-200"
                  />
                  <button
                    type="button"
                    onClick={addHashtag}
                    className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Use hashtags to make your pool more discoverable (e.g., #Tech, #RealEstate, #Finance).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {hashtags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeHashtag(index)}
                        className="text-purple-800 hover:text-purple-900"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-purple-700 mb-4">Thumbnail Image</h2>
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt="Thumbnail Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">No image selected</span>
                  )}
                </div>
                <label className="mt-4 cursor-pointer">
                  <span className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                    Upload Thumbnail
                  </span>
                  <input
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  The thumbnail image will represent your business. It should be clickable and visually appealing to attract investors.
                </p>
              </div>
            </section>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I accept the <Link href="/terms-conditions" className="text-purple-600 hover:underline">terms and conditions</Link>.
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Pool"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePool;