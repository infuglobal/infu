import mongoose from "mongoose";

const GstDataSchema = new mongoose.Schema({
  gstNumber: { type: String, required: true, unique: true },
  legalName: { type: String, required: true },
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
  addressDetails: { type: Object },  // Added field for address details
  einvoiceStatus: { type: Boolean },  // Added field for e-invoice status
  panNumber: { type: String },        // Added field for PAN number
  filingStatus: { type: [String] },   // Added field for filing status
});

export default mongoose.model('GstData', GstDataSchema);
