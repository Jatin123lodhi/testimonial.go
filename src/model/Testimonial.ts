import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  text: {
    type: String,
    required: true,
    trim: true,
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
});

export const Testimonial = mongoose.model('Testimonial', testimonialSchema);
