import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const investorSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  riskPreference: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  investmentTypes: {
    type: [String],
    required: true,
  },
  kycStatus: {
    pan: {
      type: String,
      required: true,
      unique:true
    },
    aadhaar: {
      type: String,
      required: true,
      unique:true

    }
  
  },
  accreditedInvestor: {
    type: Boolean,
    required: true,
  },
  userRole: {
    type: String,
    enum: ["Retail Investor", "Institutional Investor", "HNI"],
    default: "Retail Investor",
  },
  country: {
    type: String,
    required: true,
  },
  taxResidency: {
    type: String,
    required: true,
  },
  bankAccountDetails: {
    accountNumber: {
      type: String,
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Investor = mongoose.models.Investor || mongoose.model("Investor", investorSchema);

export default Investor;