import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  businessName: { type: String, required: true },
  description: { type: String, required: true },
  fundingGoal: { type: Number, required: true },
  currentFunding: { type: Number, default: 0 },
  fundingStatus: {
    type: String,
    enum: ['Pending', 'Funded', 'Closed'],
    default: 'Pending',
  },
  aiInsights: [
    {
      date: { type: Date, default: Date.now },
      insight: { type: String, required: true },
    }
  ],
  businessDocuments: [
    {
      type: String, // URL or file path for documents like business registration, PAN, etc.
      required: true,
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Business', businessSchema);
