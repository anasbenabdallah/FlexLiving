import "./StayLonger.css";

export default function StayLonger() {
  const discounts = [
    { period: "1 Week", percent: "10%" },
    { period: "2 Weeks", percent: "15%" },
    { period: "1 Month", percent: "20%" },
    { period: "3 Months", percent: "29%" },
    { period: "6 Months", percent: "30%" },
    { period: "1 Year", percent: "38%" },
  ];

  return (
    <section className="stay-section">
      <div className="stay-container">
        <h1 className="stay-title">Stay Longer, Save More</h1>
        <p className="stay-subtitle">
          The longer you stay, the more you save — great news for anyone looking
          for long-term rentals without the hassle, extended business trips, or
          corporate relocations.
        </p>

        <div className="discount-grid">
          {discounts.map((d, i) => (
            <div key={i} className="discount-card">
              <p className="discount-period">{d.period}</p>
              <h2 className="discount-value">{d.percent}</h2>
              <p className="discount-label">discount</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
