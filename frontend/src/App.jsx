import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import PropertyPage from "./Pages/PropertyPage";
import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import BusinessHousing from "./components/publicPages/BusinessHousing";
import StayLonger from "./components/publicPages/StayLonger";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/property" element={<PropertyPage />} />
        </Routes>
      </main>
      <StayLonger />
      <BusinessHousing />
      <Footer />
    </Router>
  );
}

export default App;
