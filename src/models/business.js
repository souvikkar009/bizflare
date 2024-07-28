import mongoose, { Schema, Types } from "mongoose";

const businessSchema = new Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessIndustry: {
    type: String,
    required: true,
  },
  businessDomain: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  businessAddress: {
    type: String,
  },
  ownerId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Business =
  mongoose.models.Business || mongoose.model("Business", businessSchema);
export default Business;
