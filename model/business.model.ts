import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  businessName: { type: String, required: true },
 
  businessCategory: { type: String, required: true },
  productsOrServices: { type: [String], required: true },
  registrationDate: { type: Date, default: Date.now },
  
  // Linking to GST Data Schema
  gstData: { type: mongoose.Schema.Types.ObjectId, ref: 'GstData', default: null },
  
  panNumber: { type: String, default: null },
  
});

module.exports = mongoose.model('Business', BusinessSchema);
