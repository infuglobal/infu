import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  userId: { type: String},
  businessName: { type: String},
  businessCategory: { type: String},
  description: { type: [String] },
  registrationDate: { type: Date, default: Date.now },
  isGstVerified: { type: Boolean},
  gstData: { type: mongoose.Schema.Types.ObjectId, ref: 'GstData', default: null },
  panNumber: { type: String },
});

export default mongoose.model('Business', BusinessSchema);