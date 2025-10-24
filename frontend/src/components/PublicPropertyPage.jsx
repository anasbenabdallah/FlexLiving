import React, { useEffect, useState } from "react";
import { getApprovedReviews } from "../services/api";
import "./PublicPropertyPage.css";

const PublicPropertyPage = () => {
  const [reviews, setReviews] = useState([]);
  const [listingName, setListingName] = useState(
    "2B N1 A - 29 Shoreditch Heights"
  ); // dynamic later
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    getApprovedReviews(listingName)
      .then((res) => {
        setReviews(res.data);
        if (res.data.length > 0) {
          const avg =
            res.data.reduce((sum, r) => sum + (r.rating || 0), 0) /
            res.data.length;
          setAvgRating(avg.toFixed(1));
        }
      })
      .catch((err) => console.error("Error fetching approved reviews:", err));
  }, [listingName]);

  return (
    <div className="public-page">
      <header className="property-hero">
        <h1 className="property-title">{listingName}</h1>
        <p className="property-desc">
          Découvrez une expérience de séjour moderne avec{" "}
          <strong>Flex Living</strong> — un appartement lumineux, entièrement
          équipé et idéalement situé pour vos séjours courts ou longs.
        </p>
      </header>

      <section className="property-summary">
        <div className="summary-card">
          <h2>⭐ {avgRating}/10</h2>
          <p>{reviews.length} avis vérifiés</p>
        </div>
      </section>

      <section className="reviews-section">
        <h3>Avis des Invités</h3>
        {reviews.length === 0 ? (
          <p>Aucun avis disponible pour cette propriété.</p>
        ) : (
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r._id} className="review-card">
                <p className="review-text">“{r.publicReview}”</p>
                <p className="review-guest">
                  <strong>{r.guestName}</strong> — {r.rating}/10
                </p>
                <p className="review-date">
                  {new Date(r.submittedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PublicPropertyPage;
