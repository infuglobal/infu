import mongoose from "mongoose";

const learningResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['Investment Basics', 'Advanced Strategies', 'Financial Literacy'],
    required: true,
  },
  contentUrl: { type: String, required: true }, // URL to the content
  contentType: {
    type: String,
    enum: ['Video', 'Article', 'Webinar'],
    required: true,
  },
  difficultyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LearningResource', learningResourceSchema);
