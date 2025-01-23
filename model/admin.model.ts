import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: {
    type: String,
    enum: ['SuperAdmin', 'Manager'],
    required: true,
  },
  permissions: {
    type: [String],
    enum: ['ManageUsers', 'ViewReports', 'ManageContent', 'ApproveBusinesses'],
    required: true,
  },
  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Admin', adminSchema);
