import mongoose from "mongoose";

export const testimonialSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  profilePic: {
    type: String,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  picture: {
    type: String,
    trim: true,
  },
  contentType: {
    type: String,
    enum: ["Text", "Video"],
    required: true,
  },
  content: {
    type: String, // URL for video or the text content itself
    required: true,
  },
});

