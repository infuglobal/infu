import mongoose from "mongoose";

const investorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  portfolio: [
    {
      businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
      investmentAmount: { type: Number, required: true },
      currentProfit: { type: Number, default: 0 },
      investmentDate: { type: Date, default: Date.now },
      lockInPeriod: { type: Date }, // Date until the investment is locked
      status: {
        type: String,
        enum: ['Active', 'Withdrawn', 'Closed'],
        default: 'Active',
      },
    }
  ],
  totalInvested: { type: Number, default: 0 },
  totalProfits: { type: Number, default: 0 },
  profitWithdrawals: [
    {
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending',
      },
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Investor', investorSchema);
