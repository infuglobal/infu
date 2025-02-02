import mongoose from "mongoose";

const PoolSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    profitability: {
      type: String,
      required: true,
    },
    revenueModel: {
      type: String,
      required: true,
    },
    executionPlan: {
      type: String,
      required: true,
    },
    lockInPeriod: {
      type: String,
      required: true,
    },
    hashtags: {
      type: [String], // Array of strings to store hashtags
      default: [], // Default empty array if no hashtags are provided
    },
  },
  { timestamps: true }
);


PoolSchema.index({ userId: 1 }, { unique: true });


const Pool = mongoose.models.Pool || mongoose.model("Pool", PoolSchema);

export default Pool;