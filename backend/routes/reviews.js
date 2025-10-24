import express from "express";
import {
  getHostawayReviews,
  approveReview,
  seedReviews,
} from "../controllers/reviewsController.js";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/hostaway", getHostawayReviews);
router.patch("/:id/approve", approveReview);
router.post("/seed", seedReviews);

router.get("/approved", async (req, res) => {
  try {
    const { listing } = req.query;
    let query = { approved: true };

    if (listing) {
      query.listingName = { $regex: new RegExp(listing, "i") };
    }

    const reviews = await Review.find(query).sort({ submittedAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(" Error fetching approved reviews:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
