"use server";

import investorModel from "@/model/investor.model";
import connectDB from "@/lib/db";

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
    const newInvestor = new investorModel(formData);

    // Save the investor to the database
    await newInvestor.save();

    return { success: true, message: "Investor created successfully!" };
  } catch (error) {
    console.error("Error creating investor:", error);
    return { success: false, message: "Failed to create investor." };
  }
};




import { revalidatePath } from "next/cache";
import gstDataModel from "@/model/gst-data.model";
import businessOwnerModel from "@/model/businessOwner.model";
import businessModel from "@/model/business.model";
import businessAddressModel from "@/model/business-address.model";
import { currentUser } from "@clerk/nextjs/server";


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

      const newGstData = new gstDataModel(gstData);
      await newGstData.save();
      gstDataId = newGstData._id;
    }

    // Create Business
    const newBusiness = new businessModel({
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
    const newLocation = new businessAddressModel(locationData);
    await newLocation.save();

    // Business Owner
    const ownerData = {
      businessId: newBusiness._id,
      ownerName: formData.get("ownerName") as string,
      mobileNumber: formData.get("mobileNumber") as string,
      emailAddress: formData.get("emailAddress") as string,
    };
    const newOwner = new businessOwnerModel(ownerData);
    await newOwner.save();

    // Revalidate any necessary paths
    revalidatePath("/");

    return { success: true, message: "Business registered successfully!" };
  } catch (error) {
    console.error("Error registering business:", error);
    return { success: false, message: "Failed to register business. Please try again." };
  }
};
