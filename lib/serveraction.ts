"use server";

import connectDB from "@/lib/db";

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
    const result = await cloudinary.uploader.upload(`data:${file.type};base64,${base64File}`, {
      folder: "thumbnails", // Organize thumbnails in a folder
      transformation: [
        { width: 1280, height: 720, crop: "fill", gravity: "auto" }, // Incoming transformation
        { quality: "auto:good", format: "webp" }, // Optimize format and quality
      ],
      eager: [
        { width: 640, height: 360, crop: "fill", gravity: "auto", quality: "auto:good", format: "webp" }, // Eager transformation 1
        { width: 320, height: 180, crop: "fill", gravity: "auto", quality: "auto:good", format: "webp" }, // Eager transformation 2
      ],
    });

    // Return the secure URL of the uploaded image
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};

interface InvestorData {
  fullName: string;
  dob: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  email: string;
  phoneNumber: string;
  investmentAmount: number;
  riskPreference: string;
  investmentTypes: string[]; // Assuming this is an array of investment categories
  kycStatus: {
    pan: string;
    aadhaar: string;
    passport: string;
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

export const createInvestor = async (formData:InvestorData) => {
  try {
    // Connect to the database
    await connectDB();

    // Create a new investor document
    const newInvestor = new Investor(formData);

    // Save the investor to the database
    await newInvestor.save();

    return { success: true, message: "Investor created successfully!" };
  } catch (error) {
    console.error("Error creating investor:", error);
    return { success: false, message: "Failed to create investor." };
  }
};




import { revalidatePath } from "next/cache";

import {currentUser } from "@clerk/nextjs/server";
import  { FilterQuery, Types } from "mongoose";
import GstData from "@/model/gst-data.model";
import Business from "@/model/business.model";
import BusinessAddress from "@/model/business-address.model";
import BusinessOwner from "@/model/businessOwner.model";
import Pool from "@/model/pool.model";
import Investor from "@/model/investor.model";



export const registerBusiness = async (formData: FormData) => {
  try {
    await connectDB();
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not authenticated." };
    }

    // Business Data
    const businessData = {
      userId: user?.id,
      businessName: formData.get("businessName") as string,
      businessCategory: formData.get("businessCategory") as string,
      description: formData.get("description") as string,
      isGstVerified: !!formData.get("gstNumber"), // GST is optional
      panNumber: formData.get("panNumber") as string,
    };

    let gstDataId = null;
    const gstNumber = formData.get("gstNumber") as string;

    if (gstNumber) {
      const gstData = {
        gstNumber,
        legalName: formData.get("legalName") as string,
        centerJurisdiction: formData.get("centerJurisdiction") as string,
        stateJurisdiction: formData.get("stateJurisdiction") as string,
        dateOfRegistration: new Date(formData.get("dateOfRegistration") as string),
        constitutionOfBusiness: formData.get("constitutionOfBusiness") as string,
        taxpayerType: formData.get("taxpayerType") as string,
        gstinStatus: formData.get("gstinStatus") as string,
        dateOfCancellation: formData.get("dateOfCancellation")
          ? new Date(formData.get("dateOfCancellation") as string)
          : null,
        fieldVisitConducted: formData.get("fieldVisitConducted") as string,
        natureBusActivities: JSON.parse(formData.get("natureBusActivities") as string),
        coreBusinessActivityCode: formData.get("coreBusinessActivityCode") as string,
        coreBusinessActivityDescription: formData.get("coreBusinessActivityDescription") as string,
        aadhaarValidation: formData.get("aadhaarValidation") as string,
        aadhaarValidationDate: new Date(formData.get("aadhaarValidationDate") as string),
        address: formData.get("address") as string,
        hsnInfo: JSON.parse(formData.get("hsnInfo") as string),
        filingFrequency: JSON.parse(formData.get("filingFrequency") as string),
        reference: formData.get("reference") as string,
        addressDetails: JSON.parse(formData.get("addressDetails") as string),
        einvoiceStatus: formData.get("einvoiceStatus") === "true",
        panNumber: formData.get("panNumber") as string,
        filingStatus: JSON.parse(formData.get("filingStatus") as string),
      };

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

    // Business Location
    const locationData = {
      businessId: newBusiness._id,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      pinCode: formData.get("pinCode") as string,
    };
    const newLocation = new BusinessAddress(locationData);
    await newLocation.save();

    // Business Owner
    const ownerData = {
      businessId: newBusiness._id,
      ownerName: formData.get("ownerName") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      emailAddress: formData.get("emailAddress") as string,
    };
    const newOwner = new BusinessOwner(ownerData);
    await newOwner.save();

    // Revalidate any necessary paths
    revalidatePath("/");

    return { success: true, message: "Business registered successfully!" };
  } catch (error) {
    console.error("Error registering business:", error);
    return { success: false, message: "Failed to register business. Please try again." };
  }
};




// Fetch business ID by user ID
export const fetchBusinessIdByUserId = async (userId:string) => {
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

export const createPool = async (formData: FormData): Promise<CreatePoolResponse> => {
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
    return { success: false, message:` ${error} || "Failed to create pool.`};
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
export async function fetchPoolDetails(poolId: string): Promise<PoolDetails | null> {
  try {
    await connectDB();

    // Fetch the pool and populate the businessId field
    const pool = await Pool.findById(poolId)
      .populate("businessId")
      .exec();

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
    const businesses = await Business.find({})
      .populate('gstData')
      .exec();

    // Fetch additional details for each business
    const businessesWithDetails = await Promise.all(
      businesses.map(async (business) => {
        const address = await BusinessAddress.findOne({ businessId: business._id }).exec();
        const owner = await BusinessOwner.findOne({ businessId: business._id }).exec();
        return {
          ...business.toObject(),
          address,
          owner,
        };
      })
    );

    return businessesWithDetails;
  } catch (error) {
    console.error('Error fetching businesses:', error);
    return [];
  }
};