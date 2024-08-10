import mongoose from "mongoose"; 

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

export const QuestionModel = mongoose.model('Question',questionSchema)