import Review from "../models/Review.js";
import { fetchHostawayMock } from "../services/hostawayService.js";

export const getHostawayReviews = async (req, res) => {
  try {
    let reviews = await Review.find({});

    if (reviews.length === 0) {
      console.log("⚙️ Database empty — seeding mock reviews...");
      const mockData = await fetchHostawayMock();
      await Review.insertMany(mockData);
      reviews = await Review.find({});
    }

    console.log("Returning reviews from MongoDB:", reviews.length);
    res.json(reviews);
  } catch (error) {
    console.error(" Error in getHostawayReviews:", error);
    res.status(500).json({ error: error.message });
  }
};

export const seedReviews = async (req, res) => {
  try {
    const data = await fetchHostawayMock();
    await Review.deleteMany({});
    await Review.insertMany(data);
    res.json({ message: "Mock reviews inserted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const approveReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing review ID" });

    const updated = await Review.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Review not found" });
    res.json(updated);
  } catch (err) {
    console.error("Error approving review:", err);
    res.status(500).json({ error: err.message });
  }
};
