import mongoose from "mongoose"; 
import { questionSchema } from "./Question";
 

const spaceSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
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
});

export const Space = mongoose.model('Space', spaceSchema);


