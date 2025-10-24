import "./BusinessHousing.css";
import { FaSearch, FaHeart, FaInfinity } from "react-icons/fa";

export default function BusinessHousing() {
  return (
    <section className="business-section">
      <div className="business-container">
        <h1 className="business-title">Corporate Housing</h1>
        <p className="business-description">
          The Flex partners with over <strong>150 companies</strong> worldwide
          to provide corporate housing solutions for staff, employee relocation,
          and temporary accommodation for insurance claims. Our flexible, fully
          furnished rentals are ideal for businesses and insurers looking for
          reliable, move-in-ready stays in locations around the world.
        </p>

        <div className="business-cards">
          <div className="business-card">
            <div className="icon-circle">
              <FaSearch />
            </div>
            <h3>Reservation Service</h3>
            <p>
              Skip the hassle — we’ll handle your property search. Whether you
              need one apartment or several, we’ll quickly provide the best
              options tailored to your specific needs.
            </p>
          </div>

          <div className="business-card">
            <div className="icon-circle">
              <FaHeart />
            </div>
            <h3>Dedicated Account Manager</h3>
            <p>
              Enjoy a personalized service with a dedicated account manager as
              your single point of contact. From new bookings to ongoing stays,
              you’ll receive expert support every step of the way.
            </p>
          </div>

          <div className="business-card">
            <div className="icon-circle">
              <FaInfinity />
            </div>
            <h3>Flexible Leasing</h3>
            <p>
              We understand that plans change. That’s why our flexible rental
              terms allow you to book for as short or long as you need — with
              monthly leases, hassle-free extensions, and easy move-outs to keep
              your business agile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
