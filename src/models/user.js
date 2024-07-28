import mongoose, { Types, Schema } from "mongoose";

const userSchema = new Schema({
  userFullName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    default: `client`,
  },
  businessId: {
    type: Types.ObjectId,
    ref: "Business",
    default: null,
  },
  userMetaAdId: {
    type: String,
    default: null,
  },
  userGoogleAdId: {
    type: String,
    default: null,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
