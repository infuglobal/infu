import mongoose from "mongoose";

const escrowSchema = new mongoose.Schema({
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
  escrowAmount: { type: Number, required: true },
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  investorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Investor', required: true },
  releaseDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Released', 'Refunded'],
    default: 'Pending',
  },
  releaseConditions: { type: String }, // Conditions under which funds will be released
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Escrow', escrowSchema);
