import mongoose from "mongoose";

const OwnerContactSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  ownerName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  emailAddress: { type: String, default: null },
});

export default mongoose.model('businessOwner', OwnerContactSchema);