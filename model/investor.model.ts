import mongoose from "mongoose";

const investorSchema = new mongoose.Schema({
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
  investmentAmount: {
    type: Number,
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
    },
    aadhaar: {
      type: String,
      required: true,
    },
    passport: {
      type: String,
    },
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

export default mongoose.models.Investor || mongoose.model("Investor", investorSchema);