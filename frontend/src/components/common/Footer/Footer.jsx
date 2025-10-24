import React from "react";
import "./Footer.css";
import { FiSend, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex-footer">
      <div className="footer-container">
        <div className="footer-column join">
          <h3>Join The Flex</h3>
          <p>
            Sign up now and stay informed about our latest news and exclusive
            offers, including 5% off your first stay!
          </p>
          <form className="footer-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <div className="footer-form-inline">
              <select>
                <option>GB +44</option>
                <option>FR +33</option>
                <option>DZ +213</option>
              </select>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <button type="submit">
              <FiSend size={16} style={{ marginRight: 6 }} />
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-column">
          <h3>The Flex</h3>
          <p>
            Professional property management services for owners, flexible
            corporate rentals for businesses, and quality accommodations for
            guests — both short and long term.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Locations</h3>
          <ul>
            <li>LONDON</li>
            <li>PARIS</li>
            <li>ALGIERS</li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>Contact Us</h3>
          <p className="contact-label">
            <FiPhone size={16} style={{ marginRight: 6 }} />
            Support Numbers
          </p>
          <ul>
            <li>United Kingdom — +44 77 2374 5646</li>
            <li>Algeria — +33 7 57 59 22 41</li>
            <li>France — +33 6 44 64 57 17</li>
          </ul>
          <p className="email">
            <FiMail size={16} style={{ marginRight: 6 }} />
            info@theflex.global
          </p>
        </div>
      </div>

      <div className="footer-bottom">© 2025 The Flex. All rights reserved.</div>
    </footer>
  );
}
