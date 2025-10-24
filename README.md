Flex Living — Reviews Dashboard Documentation

1. Project Overview

This project implements a Reviews Dashboard for Flex Living, enabling managers to view, filter, and approve guest reviews for properties.
Approved reviews are displayed on a public property page styled consistently with the Flex Living design system.

System Structure

Backend: Express + MongoDB for data fetching, normalization, and persistence.

Frontend: React for dashboards, filters, and review visualization.

---

2. Tech Stack
   Frontend

React.js (Vite) — UI framework

Axios — API communication

React Router DOM — page routing

React Icons — iconography

CSS3 — responsive, theme-based styling using Flex Living brand colors

Backend

Node.js + Express.js — REST API server

MongoDB + Mongoose — data persistence and queries

Dotenv — environment variable management

CORS + JSON middleware — secure and structured API responses

---

3. Design and Logic Decisions
   Backend Logic

Implemented GET /api/reviews/hostaway to fetch and normalize reviews from a mocked Hostaway API.

Normalized all review fields (listingName, guestName, rating, publicReview, etc.).

Integrated MongoDB for long-term storage and approval tracking.

Implemented PATCH /api/reviews/:id/approve to mark reviews as approved.

Added GET /api/reviews/approved to return only approved reviews for the public property page.

Frontend Logic
Dashboard Page

Displays all reviews in a sortable, filterable table.

Shows per-property statistics (average rating, total reviews, approvals).

Approve buttons update the UI immediately and synchronize with the backend.

Property Page

Fetches approved reviews via GET /api/reviews/approved.

Displays testimonials with clean UI: star ratings, avatar icons, navigation arrows, and pagination dots.

Styled with Flex Living colors (green #174b43 and beige tones).

UI/UX Design

Header and footer replicate The Flex brand style.

Navbar smoothly transitions color on scroll.

Components are modular and reusable for scalability and clarity.

---

4. API Overview
   GET /api/reviews/hostaway

Fetches and normalizes review data from a mocked Hostaway source.
If the database is empty, it seeds data automatically.

Response Example

[
{
"_id": "68fa7ba9e7f0c3e55e9ad884",
"listingName": "2B N1 A - 29 Shoreditch Heights",
"guestName": "Shane Finkelstein",
"rating": 10,
"publicReview": "Shane and family are wonderful! Would definitely host again :)",
"submittedAt": "2020-08-21T22:45:14.000Z",
"approved": false
}
]

PATCH /api/reviews/:id/approve

Marks a review as approved for public display.

Response Example

{
"\_id": "68fa7ba9e7f0c3e55e9ad884",
"listingName": "2B N1 A - 29 Shoreditch Heights",
"approved": true
}

GET /api/reviews/approved

Returns all reviews approved by managers (optionally filtered by listing name).
Used on the property page to display testimonials.

Response Example

[
{
"_id": "68fa7ba9e7f0c3e55e9ad884",
"listingName": "2B N1 A - 29 Shoreditch Heights",
"guestName": "Shane Finkelstein",
"publicReview": "Great stay, clean and well-located.",
"rating": 9,
"approved": true
}
]

---

5. Local Setup Instructions
   Backend Setup

Clone the repository and navigate to the backend folder:

cd backend
npm install

Create a .env file:

MONGO_URI=mongodb+srv://<your_connection_string>
PORT=5000

Run the backend server:

npm start

(Optional) Seed mock data:

curl -X POST http://localhost:5000/api/reviews/seed

Frontend Setup

Navigate to the frontend folder:

cd frontend
npm install

Start the frontend app:

npm run dev

Visit:

http://localhost:5173

---

6. Google Reviews Exploration
   Integration Attempt

Exploration was conducted using the Google Places API endpoint:

https://maps.googleapis.com/maps/api/place/details/json?place_id={PLACE_ID}&fields=name,rating,reviews&key={API_KEY}

However, the sandbox API key did not return the reviews field due to restricted permissions.
This integration is documented but not implemented in the current version.

Future Work

When connected to a production Google Cloud project, reviews can be fetched dynamically from Google Places and merged with the approved reviews collection in MongoDB.
