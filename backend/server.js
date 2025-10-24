import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import reviewsRouter from "./routes/reviews.js";

dotenv.config();

const app = express();

//  MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// Middleware
app.use(cors());
app.use(express.json());

//  Routes
app.use("/api/reviews", reviewsRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
