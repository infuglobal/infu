// models/Feedback.js
import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // User ID from Clerk
  name: { type: String, required: true }, // User's name
  email: { type: String, required: true }, // User's email
  subject: { type: String, required: true }, // Feedback subject
  message: { type: String, required: true }, // Feedback message
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default Feedback;