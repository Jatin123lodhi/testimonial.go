import { User } from "@/types/User";
import mongoose, { Schema }  from "mongoose";

const UserSchema:Schema<User> =  new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  spaces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Space' }],
}); 

const UserModel = (mongoose.models.User as mongoose.Model<User>) ||
mongoose.model<User>("User", UserSchema);

export default UserModel;
