import mongoose from "mongoose";

const GstDataSchema = new mongoose.Schema({
  gstNumber: { type: String,  unique: true },
  legalName: { type: String },
  centerJurisdiction: { type: String },
  stateJurisdiction: { type: String },
  dateOfRegistration: { type: Date },
  constitutionOfBusiness: { type: String },
  taxpayerType: { type: String },
  gstinStatus: { type: String },
  dateOfCancellation: { type: Date, default: null },
  fieldVisitConducted: { type: String },
  natureBusActivities: { type: [String] },
  coreBusinessActivityCode: { type: String },
  coreBusinessActivityDescription: { type: String },
  aadhaarValidation: { type: String },
  aadhaarValidationDate: { type: Date },
  address: { type: String },
  hsnInfo: { type: Object },
  filingFrequency: { type: [String] },
  reference: { type: String },
  addressDetails: { type: Object },
  einvoiceStatus: { type: Boolean },
  panNumber: { type: String },
  filingStatus: { type: [String] },
});

export default mongoose.model('GstData', GstDataSchema);