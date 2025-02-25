import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  userId: { type: String},
  userEmail: { type: String, required: true }, 
  businessName: { type: String},
  businessCategory: { type: String},
  description: { type: [String] },
  registrationDate: { type: Date, default: Date.now },
  isGstVerified: { type: Boolean},
  gstData: { type: mongoose.Schema.Types.ObjectId, ref: 'GstData', default: null },
  panNumber: { type: String },
  investments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InvestmentDetails' }],
});

const Business = mongoose.models.Business || mongoose.model("Business", BusinessSchema);
export default Business ;