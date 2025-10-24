import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export const fetchHostawayMock = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../mock/hostaway_reviews.json");
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);

  return data.result.map((r) => ({
    listingName: r.listingName,
    guestName: r.guestName,
    rating:
      r.reviewCategory?.reduce((a, b) => a + b.rating, 0) /
      r.reviewCategory.length,
    categories: r.reviewCategory,
    type: r.type,
    submittedAt: r.submittedAt,
    publicReview: r.publicReview,
    channel: "Hostaway",
  }));
};
