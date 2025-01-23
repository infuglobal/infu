import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  amount: { type: Number, required: true },
  transactionType: {
    type: String,
    enum: ['Investment', 'Withdrawal', 'Business Funding'],
    required: true,
  },
  transactionDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Bank Transfer', 'Escrow'],
  },
  transactionDetails: { type: String }, // Any additional info related to the transaction
});

module.exports = mongoose.model('Transaction', transactionSchema);
