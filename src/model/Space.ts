import mongoose from "mongoose"; 
import { testimonialSchema } from "./Testimonial";

 
export const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const spaceSchema = new mongoose.Schema({
  spaceName: {
    type: String,
    required: true,
    trim: true,
  },
  spaceLogo: {
    type: String,
    required: true,
    trim: true,
  },
  headerTitle: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
  collectionType: {
    type: String,
    enum: ["Text and Video", "Only Text", "Only Video"],
    required: true,
  },
  rating: {
    type: Boolean,
    required: true,
  },
  testimonials: {
    type: [testimonialSchema],
    default: [],
  },
});

export const Space = mongoose.models.Space || mongoose.model('Space', spaceSchema);
 
