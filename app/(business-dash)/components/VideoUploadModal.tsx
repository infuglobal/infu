"use client";

import { useState } from "react";
import { uploadBusinessPitchVideo } from "@/lib/serveraction"; // Adjust the path
import { toast } from "sonner"; // Import toast from sonner

const VideoUploadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [video, setVideo] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState<string | null>(null); // For video preview

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

  const handleSubmit = async () => {
    if (!video) {
      toast.error("Please upload a video."); // Replace alert with toast
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("video", video);

    try {
      const result = await uploadBusinessPitchVideo(formData);

      if (result.success) {
        toast.success("Pitch video uploaded successfully!"); // Success toast
    
        onClose();
        window.location.reload(); // Refresh the page
      } else {
        toast.error(result.message); // Error toast
      }
    } catch (error) {
      toast.error("Failed to upload video. Please try again."); // Error toast
      console.log(error);
    } finally {
      setIsUploading(false);
      if (videoPreview) URL.revokeObjectURL(videoPreview); // Clean up preview URL
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
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

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Your Pitch Video</h2>

        {/* Guidance for Users */}
        <div className="mb-6 bg-purple-50 p-4 rounded-xl text-sm text-gray-700">
          <p className="font-semibold text-purple-600">Why Upload a Pitch Video?</p>
          <p className="mt-2">
            A well-crafted pitch video can significantly increase your chances of securing investments. Investors often prefer videos because they:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Showcase your passion and vision clearly.</li>
            <li>Provide a concise overview of your business model.</li>
            <li>Help investors understand your product or service quickly.</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold">Tip:</span> Keep your video between 2-3 minutes long and focus on explaining your business model, market opportunity, and team.
          </p>
        </div>

        <div className="space-y-6">
          <label className="block text-sm font-medium text-gray-700">Select Video</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-purple-500 transition-colors duration-300">
              <span className="text-gray-500">Click to upload or drag and drop</span>
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
        {isUploading && (
          <div className="mt-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-700 font-medium">
                Please wait while we upload your video...
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleSubmit}
            disabled={isUploading}
            className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300"
          >
            {isUploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadModal;