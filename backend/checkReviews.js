import mongoose from "mongoose";
import Review from "./models/Review.js";
import dotenv from "dotenv";

dotenv.config(); // to load your .env file

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const reviews = await Review.find({});
    console.log(`✅ Found ${reviews.length} reviews`);
    if (reviews.length > 0) {
      console.log(reviews[0]);
    } else {
      console.log("❌ No reviews found in the database");
    }

    process.exit(0);
  } catch (err) {
    console.error("❌ Error checking DB:", err);
    process.exit(1);
  }
};

run();
