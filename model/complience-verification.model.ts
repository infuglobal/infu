import mongoose from "mongoose";

const ComplianceVerificationSchema = new mongoose.Schema({
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    documentType: { 
      type: String, 
      enum: ['GST', 'PAN', 'Other'], 
      required: true 
    },
    documentFilePath: { type: String, required: true },
    verificationStatus: { type: Boolean, default: false },
    lastVerifiedDate: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Complience-verification', ComplianceVerificationSchema);
