import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
});

const BusinessAddress = mongoose.models.BusinessLocation || mongoose.model("BusinessLocation", LocationSchema);

export default BusinessAddress;