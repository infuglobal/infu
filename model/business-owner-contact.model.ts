import mongoose from "mongoose";

const OwnerContactSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    ownerName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    otpVerified: { type: Boolean, default: false },
    emailAddress: { type: String, default: null },
    additionalNotes: { type: String, default: null }
  });
module.exports = mongoose.model('BusinessOwner', OwnerContactSchema);
