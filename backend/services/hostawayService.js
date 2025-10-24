import fs from "fs";

export const fetchHostawayMock = async () => {
  const rawData = fs.readFileSync("./mock/hostaway_reviews.json");
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
