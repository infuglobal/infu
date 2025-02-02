import mongoose from "mongoose";

const InvestmentDetailsSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  investorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  investorName: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
  totalFundingTillNow: { type: Number, default: 0 },
  paymentDetails: {
    razorpayPaymentId: { type: String, required: true },
    razorpayOrderId: { type: String, required: true },
    razorpaySignature: { type: String, required: true },
  },
  investmentDate: { type: Date, default: Date.now },
  expectedROI: { type: Number }, // Return on investment percentage
  paybackPeriod: { type: Number }, // In months or years
  investmentPurpose: { type: String }, // Description of how funds will be used
  agreementDocument: { type: String }, // URL of the signed agreement
  investmentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' }
});

const InvestmentDetails = mongoose.models.InvestmentDetails || mongoose.model("InvestmentDetails", InvestmentDetailsSchema);

export default InvestmentDetails;