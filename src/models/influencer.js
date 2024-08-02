import mongoose, { Schema, Types } from "mongoose";

const influencerSchema = new Schema({
  instaId: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
});

const Influencer =
  mongoose.models.Influencer || mongoose.model("Influencer", influencerSchema);
export default Influencer;
