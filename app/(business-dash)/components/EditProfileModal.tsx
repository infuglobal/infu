"use client";

import { useState } from "react";
import { toast } from "sonner"; // Import toast from sonner
import { updateBusinessProfile } from "@/lib/serveraction"; // Import the server action

const EditProfileModal = ({
  isOpen,
  onClose,
  userId,
  existingData,
}: {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
  existingData: {
    businessName: string;
    description: string[];
    businessPitchVideo?: string;
  };
}) => {
  const [businessName, setBusinessName] = useState(existingData.businessName);
  const [description, setDescription] = useState(existingData.description.join(", "));
  const [video, setVideo] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(
    existingData.businessPitchVideo || null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Validate file size (35 MB limit)
      if (file.size > 35 * 1024 * 1024) {
        toast.error("Video size must be less than 35 MB.");
        return;
      }

      setVideo(file);

      // Generate video preview URL
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const result = await updateBusinessProfile(userId, {
        businessName,
        description: description.split(",").map((item) => item.trim()), // Convert to array
        businessPitchVideo: video,
      });

      if (result.success) {
        toast.success(result.message);
        onClose(); // Close the modal after successful update
        window.location.reload(); // Refresh the page to reflect changes
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
      if (videoPreview) URL.revokeObjectURL(videoPreview); // Clean up preview URL
    }
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[600px] h-[500px] overflow-y-auto transform transition-all duration-300 ease-in-out relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Business Profile</h2>

        {/* Guidance for Users */}
        <div className="mb-6 bg-purple-50 p-4 rounded-xl text-sm text-gray-700">
          <p className="font-semibold text-purple-600">Why Update Your Profile?</p>
          <p className="mt-2">
            Keeping your business profile updated ensures that investors and partners have the most accurate and compelling information about your business.
          </p>
        
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter your business name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter a comma-separated list of descriptions"
              rows={4}
            />
          </div>

          {/* Pitch Video */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Pitch Video</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-purple-500 transition-colors duration-300">
                <span className="text-gray-500">Click to upload</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            {video && (
              <p className="text-sm text-gray-600 mt-2">Selected: {video.name}</p>
            )}
          </div>

          {/* Video Preview */}
          {videoPreview && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Video Preview</h3>
              <video
                src={videoPreview}
                controls
                className="w-full rounded-lg"
              />
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="mt-6 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-700 font-medium">
                  Saving your changes...
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;