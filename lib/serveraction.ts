"use server";
import connectDB from "@/lib/db";


// you can find all serveractions here


// For uploading image and videos to cloudinary
import { v2 as cloudinary } from "cloudinary";
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (file: File): Promise<string> => {
  try {
    // Convert File to a data URL or base64 string
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64File = buffer.toString("base64");

    // Upload to Cloudinary with transformations
    const result = await cloudinary.uploader.upload(
      `data:${file.type};base64,${base64File}`,
      {
        folder: "thumbnails", // Organize thumbnails in a folder
        transformation: [
          { width: 1280, height: 720, crop: "fill", gravity: "auto" }, // Incoming transformation
          { quality: "auto:good", format: "webp" }, // Optimize format and quality
        ],
        eager: [
          {
            width: 640,
            height: 360,
            crop: "fill",
            gravity: "auto",
            quality: "auto:good",
            format: "webp",
          }, // Eager transformation 1
          {
            width: 320,
            height: 180,
            crop: "fill",
            gravity: "auto",
            quality: "auto:good",
            format: "webp",
          }, // Eager transformation 2
        ],
      }
    );

    // Return the secure URL of the uploaded image
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};






import { UploadApiResponse } from "cloudinary"; // For type safety


export const uploadBusinessPitchVideo = async (formData: FormData) => {
  try {
    // Connect to the database
    await connectDB();

    // Get the current user
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Extract form data
    const userId = user.id; // Extract userId from the user object
    const videoFile = formData.get("video") as File;

    // Validate required fields
    if (!userId || !videoFile) {
      throw new Error("Missing required fields");
    }

    // Convert the video file to a buffer
    const videoBuffer = await videoFile.arrayBuffer();
    const videoArray = Buffer.from(videoBuffer);

    // Upload video to Cloudinary
    const cloudinaryResponse = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "video",
            folder: "business_pitch_videos", // Optional: Organize videos in a folder
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else if (result) {
              resolve(result); // Ensure result is defined before resolving
            } else {
              reject(new Error("Cloudinary upload failed: No result returned"));
            }
          }
        )
        .end(videoArray);
    });

    // Extract Cloudinary video URL
    const videoUrl = cloudinaryResponse.secure_url;

    // Update the business document with pitch video details
    const updatedBusiness = await Business.findOneAndUpdate(
      { userId }, // Find the business by userId
      {
        businessPitchVideo: videoUrl,
      },
      { new: true } // Return the updated document
    ).lean(); // Convert the Mongoose document to a plain object

    if (!updatedBusiness) {
      throw new Error("Business not found for the given user");
    }

    // Revalidate the path (if using Next.js caching)
    revalidatePath("/business-dashboard"); // Adjust the path as needed

    return {
      success: true,
      message: "Pitch video uploaded successfully",
    };
  } catch (error) {
    console.error("Error uploading pitch video:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to upload pitch video",
    };
  }
};



// 2 For registering investors portfolios
interface InvestorData {
  fullName: string;
  dob: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  email: string;
  phoneNumber: string;
  riskPreference: string;
  investmentTypes: string[]; // Assuming this is an array of investment categories
  kycStatus: {
    pan: string;
    aadhaar: string;
  };
  accreditedInvestor: boolean;
  userRole: string;
  country: string;
  taxResidency: string;
  bankAccountDetails: {
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
}

export const createInvestor = async (formData: InvestorData) => {
  try {
    // Connect to the database
    await connectDB();
    const user = await currentUser();
    const userId = user?.id;

    if (!userId) {
      return { success: false, message: "User not authenticated." };
    }

    // Create a new investor document
    const newInvestor = new Investor({ userId, ...formData });

    // Save the investor to the database
    await newInvestor.save();

    return { success: true, message: "Investor created successfully!" };
  } catch (error) {
    console.error("Error creating investor:", error);
    return { success: false, message: "Failed to create investor." };
  }
};

import { revalidatePath } from "next/cache";

import { currentUser } from "@clerk/nextjs/server";
import { FilterQuery, Types } from "mongoose";
import GstData from "@/model/gst-data.model";
import Business from "@/model/business.model";
import BusinessAddress from "@/model/business-address.model";
import BusinessOwner from "@/model/businessOwner.model";
import Pool from "@/model/pool.model";
import Investor from "@/model/investor.model";
import Feedback from "@/model/feedback.model";


// 3 For registering businesses
export const registerBusiness = async (formData: FormData) => {
  try {
    // Connect to the database
    await connectDB();

    // Get the current user
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not authenticated." };
    }

    // Extract the email address from the user object
    const userEmail = user.primaryEmailAddress?.emailAddress; // Extract email from primaryEmailAddress
    if (!userEmail) {
      return { success: false, message: "User email not found." };
    }

    // Validate required fields
    const requiredFields = [
      "businessName",
      "businessCategory",
      "description",
      "panNumber",
    ];
    for (const field of requiredFields) {
      if (!formData.get(field)) {
        return { success: false, message: `${field} is required.` };
      }
    }

    // Business Data
    const businessData = {
      userId: user.id,
      userEmail, // Use the extracted email address
      businessName: formData.get("businessName") as string,
      businessCategory: formData.get("businessCategory") as string,
      description: (formData.get("description") as string).split(","), // Convert to array of strings
      isGstVerified: !!formData.get("gstNumber"), // GST is optional
      panNumber: formData.get("panNumber") as string,
    };

    let gstDataId = null;
    const gstNumber = formData.get("gstNumber") as string;

    // Save GST Data if GST number is provided
    if (gstNumber) {
      const gstData = {
        gstNumber,
        legalName: formData.get("legalName") as string,
        centerJurisdiction: formData.get("centerJurisdiction") as string,
        stateJurisdiction: formData.get("stateJurisdiction") as string,
        dateOfRegistration: new Date(
          formData.get("dateOfRegistration") as string
        ),
        constitutionOfBusiness: formData.get(
          "constitutionOfBusiness"
        ) as string,
        taxpayerType: formData.get("taxpayerType") as string,
        gstinStatus: formData.get("gstinStatus") as string,
        dateOfCancellation: formData.get("dateOfCancellation")
          ? new Date(formData.get("dateOfCancellation") as string)
          : null,
        fieldVisitConducted: formData.get("fieldVisitConducted") as string,
        natureBusActivities: JSON.parse(
          (formData.get("natureBusActivities") as string) || "[]"
        ),
        coreBusinessActivityCode: formData.get(
          "coreBusinessActivityCode"
        ) as string,
        coreBusinessActivityDescription: formData.get(
          "coreBusinessActivityDescription"
        ) as string,
        aadhaarValidation: formData.get("aadhaarValidation") as string,
        aadhaarValidationDate: new Date(
          formData.get("aadhaarValidationDate") as string
        ),
        address: formData.get("address") as string,
        hsnInfo: JSON.parse((formData.get("hsnInfo") as string) || "{}"),
        filingFrequency: JSON.parse(
          (formData.get("filingFrequency") as string) || "[]"
        ),
        reference: formData.get("reference") as string,
        addressDetails: JSON.parse(
          (formData.get("addressDetails") as string) || "{}"
        ),
        einvoiceStatus: formData.get("einvoiceStatus") === "true",
        panNumber: formData.get("panNumber") as string,
        filingStatus: JSON.parse(
          (formData.get("filingStatus") as string) || "[]"
        ),
      };

      // Save GST Data
      const newGstData = new GstData(gstData);
      await newGstData.save();
      gstDataId = newGstData._id;
    }

    // Create Business
    const newBusiness = new Business({
      ...businessData,
      gstData: gstDataId, // Link GST Data if available
    });
    await newBusiness.save();

    // Save Business Location
    const locationData = {
      businessId: newBusiness._id,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      pinCode: formData.get("pinCode") as string,
    };
    const newLocation = new BusinessAddress(locationData);
    await newLocation.save();

    // Save Business Owner
    const ownerData = {
      businessId: newBusiness._id,
      ownerName: formData.get("ownerName") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      emailAddress: formData.get("emailAddress") as string,
    };
    const newOwner = new BusinessOwner(ownerData);
    await newOwner.save();

    // Revalidate paths if using Next.js caching
    revalidatePath("/");

    return { success: true, message: "Business registered successfully!" };
  } catch (error) {
    console.error("Error registering business:", error);
    return {
      success: false,
      message: "Failed to register business. Please try again.",
    };
  }
};

// 4 Fetch business ID by user ID
export const fetchBusinessIdByUserId = async (userId: string) => {
  try {
    await connectDB();
    const business = await Business.findOne({ userId });

    if (!business) {
      throw new Error("No business found for this user.");
    }

    return business._id;
  } catch (error) {
    console.error("Error fetching business ID:", error);
    throw error;
  }
};


// For creating investment Pools
interface PoolData {
  userId: string;
  businessId: Types.ObjectId;
  amount: number;
  category: string; // Changed from businessNature to category
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  thumbnail: string; // Thumbnail URL
  hashtags: string[]; // Added hashtags as an array of strings
}

interface CreatePoolResponse {
  success: boolean;
  message: string;
}

export const createPool = async (
  formData: FormData
): Promise<CreatePoolResponse> => {
  try {
    await connectDB();
    const user = await currentUser();

    if (!user?.id) {
      return { success: false, message: "User not authenticated." };
    }
    const userId = user.id;

    // Check if the user already has a pool
    const existingPool = await Pool.findOne({ userId }).exec();
    if (existingPool) {
      return { success: false, message: "You can only create one pool." };
    }
    const businessId = await fetchBusinessIdByUserId(userId);

    // Handle thumbnail upload
    const thumbnailFile = formData.get("thumbnail") as File | null;
    let thumbnailUrl = "";
    if (thumbnailFile) {
      thumbnailUrl = await uploadImageToCloudinary(thumbnailFile);
    }

    // Handle hashtags
    const hashtagsInput = formData.get("hashtags") as string;
    const hashtags = hashtagsInput
      .split(",") // Split by commas
      .map((tag) => tag.trim()) // Remove whitespace
      .filter((tag) => tag.length > 0); // Remove empty strings

    const poolData: PoolData = {
      userId,
      businessId,
      amount: parseFloat(formData.get("amount") as string),
      category: formData.get("category") as string, // Changed from businessNature to category
      profitability: formData.get("profitability") as string,
      revenueModel: formData.get("revenueModel") as string,
      executionPlan: formData.get("executionPlan") as string,
      lockInPeriod: formData.get("lockInPeriod") as string,
      thumbnail: thumbnailUrl, // Thumbnail URL
      hashtags, // Added hashtags
    };

    const newPool = new Pool(poolData);
    await newPool.save();

    return { success: true, message: "Pool created successfully!" };
  } catch (error) {
    console.error("Error creating pool:", error);
    return { success: false, message: ` ${error} || "Failed to create pool.` };
  }
};


// Define the formatted pool type for the frontend
interface FormattedPool {
  id: string;
  name: string;
  category: string;
  image: string;
  funding: string;
}


// Fetch unique categories from the Pool schema
export async function fetchCategories(): Promise<string[]> {
  try {
    await connectDB();

    // Fetch distinct categories from the Pool collection
    const categories = await Pool.distinct("category").exec();
    return ["All", ...categories]; // Add "All" as the default category
  } catch (error) {
    console.error("Error fetching categories:", error);
    return ["All"]; // Return default category in case of error
  }
}

interface PoolDocument extends Document {
  userId: string;
  businessId: Types.ObjectId;
  amount: number;
  category: string;
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  thumbnail: string;
  hashtags: string[];
}

// Fetch pools from the database
export async function fetchPools(
  page: number = 1,
  category: string = "All",
  search: string = ""
): Promise<FormattedPool[]> {
  try {
    await connectDB();

    // Define pagination parameters
    const limit: number = 10; // Number of pools per page
    const skip: number = (page - 1) * limit;

    // Build the query based on category and search
    const query: FilterQuery<PoolDocument> = {};
    if (category !== "All") {
      query.category = category;
    }
    if (search) {
      query.$or = [
        { hashtags: { $in: [new RegExp(search, "i")] } }, // Search in hashtags
        { category: { $regex: search, $options: "i" } }, // Search in category
      ];
    }

    // Fetch pools from the database and populate businessId with businessName
    const pools = await Pool.find(query)
      .skip(skip)
      .limit(limit)
      .populate({
        path: "businessId",
        select: "businessName", // Only fetch the businessName field
      })
      .exec();

    // Format the data for the frontend
    const formattedPools: FormattedPool[] = pools.map((pool) => ({
      id: pool._id.toString(),
      name: pool.businessId?.businessName ?? "Unnamed Business", // Use businessName with a fallback
      category: pool.category,
      image: pool.thumbnail,
      funding: `₹${pool.amount} Required`,
    }));

    return formattedPools;
  } catch (error) {
    console.error("Error fetching pools:", error);
    return []; // Return an empty array in case of error
  }
}

// Define the response type
interface PoolDetails {
  id: string;
  userId: string;
  businessId: {
    id: string;
    businessName: string;
    businessCategory: string;
    description: string[];
    registrationDate: Date;
    isGstVerified: boolean;
    panNumber: string;
    businessPitchVideo: string;

  };
  amount: number;
  category: string;
  thumbnail: string;
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  hashtags: string[];
}

// Fetch pool and business details by poolId
export async function fetchPoolDetails(
  poolId: string
): Promise<PoolDetails | null> {
  try {
    await connectDB();

    // Fetch the pool and populate the businessId field
    const pool = await Pool.findById(poolId).populate("businessId").exec();

    if (!pool) {
      return null; // Return null if pool is not found
    }

    // Format the data
    const poolDetails: PoolDetails = {
      id: pool._id.toString(),
      userId: pool.userId,
      businessId: {
        id: pool.businessId._id.toString(),
        businessName: pool.businessId.businessName,
        businessCategory: pool.businessId.businessCategory,
        description: pool.businessId.description,
        registrationDate: pool.businessId.registrationDate,
        isGstVerified: pool.businessId.isGstVerified,
        panNumber: pool.businessId.panNumber,
        businessPitchVideo: pool.businessId.businessPitchVideo,

      },
      amount: pool.amount,
      category: pool.category,
      thumbnail: pool.thumbnail,
      profitability: pool.profitability,
      revenueModel: pool.revenueModel,
      executionPlan: pool.executionPlan,
      lockInPeriod: pool.lockInPeriod,
      hashtags: pool.hashtags,
    };

    return poolDetails;
  } catch (error) {
    console.error("Error fetching pool details:", error);
    return null;
  }
}

interface PoolDetail {
  id: string;
  userId: string;
  amount: number;
  category: string;
  thumbnail: string;
  profitability: string;
  revenueModel: string;
  executionPlan: string;
  lockInPeriod: string;
  hashtags: string[];
  historicalPerformance?: { month: string; returns: number }[]; // Added for chart data
}

export async function fetchPoolDetailsByUserId(
  userId: string
): Promise<PoolDetail | null> {
  try {
    await connectDB();

    // Find the pool associated with the user and populate business details
    const pool = await Pool.findOne({ userId });

    if (!pool) {
      return null; // No pool found
    }

    // Return pool details
    return {
      id: pool._id.toString(),
      userId: pool.userId,
      amount: pool.amount,
      category: pool.category,
      thumbnail: pool.thumbnail,
      profitability: pool.profitability,
      revenueModel: pool.revenueModel,
      executionPlan: pool.executionPlan,
      lockInPeriod: pool.lockInPeriod,
      hashtags: pool.hashtags,
      historicalPerformance: pool.historicalPerformance,
    };
  } catch (error) {
    console.error("Error fetching pool details:", error);
    throw new Error("Failed to fetch pool details.");
  }
}

export const fetchAllInvestors = async () => {
  try {
    await connectDB(); // Ensure the database is connected
    const investors = await Investor.find({}).lean(); // Fetch all investors
    return JSON.parse(JSON.stringify(investors)); // Convert to plain JavaScript objects
  } catch (error) {
    console.error("Error fetching investors:", error);
    return [];
  }
};

// Fetch all businesses with their related data
export const getAllBusinesses = async () => {
  try {
    await connectDB();

    // Fetch all businesses
    const businesses = await Business.find({}).populate("gstData").exec();

    // Fetch additional details for each business
    const businessesWithDetails = await Promise.all(
      businesses.map(async (business) => {
        const address = await BusinessAddress.findOne({
          businessId: business._id,
        }).exec();
        const owner = await BusinessOwner.findOne({
          businessId: business._id,
        }).exec();
        return {
          ...business.toObject(),
          address,
          owner,
        };
      })
    );

    return businessesWithDetails;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};

export async function checkBusinessRegistration(userId: string) {
  try {
    await connectDB();

    // Fetch the business details
    const business = await Business.findOne({ userId });
    if (!business) return null;

    // Fetch the address and owner details in parallel
    const [address, owner] = await Promise.all([
      BusinessAddress.findOne({ businessId: business._id }),
      BusinessOwner.findOne({ businessId: business._id }),
    ]);

    // Return the combined data
    return {
      business: JSON.parse(JSON.stringify(business)),
      address: address ? JSON.parse(JSON.stringify(address)) : null,
      owner: owner ? JSON.parse(JSON.stringify(owner)) : null,
    };
  } catch (error) {
    console.error("Error checking business registration:", error);
    return null;
  }
}

interface FeedbackFormData {
  userId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitFeedbackResponse {
  success: boolean;
  message: string;
}

export async function submitFeedback(
  formData: FeedbackFormData
): Promise<SubmitFeedbackResponse> {
  try {
    await connectDB();

    const { userId, name, email, subject, message } = formData;

    // Validate required fields
    if (!userId || !name || !email || !subject || !message) {
      throw new Error("All fields are required.");
    }

    // Save feedback to the database
    const newFeedback = new Feedback({
      userId,
      name,
      email,
      subject,
      message,
    });

    await newFeedback.save();

    // Revalidate the feedback page (optional)
    revalidatePath("/feedback");

    return { success: true, message: "Feedback submitted successfully!" };
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return { success: false, message: `Failed to submit feedback: ${error}` };
  }
}

export async function checkInvestorRegistration(userId: string) {
  try {
    await connectDB();

    // Fetch investor data based on userId
    const investor = await Investor.findOne({ userId });
    if (!investor) return null;

    // Return the investor data as a plain object
    return JSON.parse(JSON.stringify(investor));
  } catch (error) {
    console.error("Error fetching investor data:", error);
    return null;
  }
}

// Function to fetch all feedbacks
export async function fetchFeedbacks() {
  try {
    await connectDB(); // Connect to the database

    // Fetch all feedbacks from the database
    const feedbacks = await Feedback.find({}).sort({ createdAt: -1 }); // Sort by createdAt in descending order

    // Return the feedbacks as a plain JavaScript object
    return JSON.parse(JSON.stringify(feedbacks));
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw new Error("Failed to fetch feedbacks");
  }
}




export const updateBusinessProfile = async (
  userId: string, // Pass userId to identify the business
  formData: {
    businessName?: string;
    description?: string[];
    businessPitchVideo?: File | null; // Allow video file upload
  }
) => {
  try {
    await connectDB(); // Connect to MongoDB

    const { businessName, description, businessPitchVideo } = formData;

    // Find the business profile by userId
    const business = await Business.findOne({ userId });

    if (!business) {
      throw new Error("Business profile not found.");
    }

    // Update fields if provided
    if (businessName) business.businessName = businessName;
    if (description) business.description = description;

    // Handle video file upload
    if (businessPitchVideo) {
      const videoBuffer = await businessPitchVideo.arrayBuffer();
      const videoArray = Buffer.from(videoBuffer);

      // Upload video to Cloudinary
      const cloudinaryResponse = await new Promise<UploadApiResponse>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                resource_type: "video",
                folder: "business_pitch_videos", // Organize videos in a folder
              },
              (error, result) => {
                if (error) {
                  reject(error);
                } else if (result) {
                  resolve(result); // Ensure result is defined before resolving
                } else {
                  reject(new Error("Cloudinary upload failed: No result returned"));
                }
              }
            )
            .end(videoArray);
        }
      );

      // Update the business pitch video URL
      business.businessPitchVideo = cloudinaryResponse.secure_url;
    }

    await business.save();

    // Revalidate the path (if using Next.js caching)
    revalidatePath("/business-dashboard"); // Adjust the path as needed

    return { success: true, message: "Profile updated successfully!" };
  } catch (error) {
    console.error("Error updating business profile:", error);
    return { success: false, message: "Failed to update profile." };
  }
};