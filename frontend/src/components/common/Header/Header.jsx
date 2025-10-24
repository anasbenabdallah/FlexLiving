import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex-header ${scrolled ? "scrolled" : ""}`}>
      <div className="flex-header-content">
        <div className="flex-logo">
          <img
            src={scrolled ? "/image 2.webp" : "/image.webp"}
            alt="The Flex logo"
            className="logo-img"
          />
        </div>

        <nav className="flex-nav">
          <Link to="/">Dashboard</Link>
          <Link to="/property">Property Page</Link>
        </nav>
      </div>
    </header>
  );
}
