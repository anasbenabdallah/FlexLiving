import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  listingName: String,
  guestName: String,
  rating: Number,
  categories: Array,
  type: String,
  submittedAt: Date,
  publicReview: String,
  channel: String,
  approved: { type: Boolean, default: false },
});

export default mongoose.model("Review", ReviewSchema);
