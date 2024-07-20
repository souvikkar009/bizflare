import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userFullName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  companyType: {
    type: String,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
