import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    locationId: { type: mongoose.Schema.Types.ObjectId, auto: true },
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, default: null },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    latitude: { type: Number },
    longitude: { type: Number }
  });
module.exports = mongoose.model('BusinessLocation', LocationSchema);
