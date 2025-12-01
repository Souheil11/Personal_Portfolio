import "../styles/Navbar.css";
import { NavLink } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink style={{ border: 'none' }} to="/" onClick={closeMobileMenu}>
        <h1 className="navbarLogo">
          Souhaiel<span className="dot">.</span>
        </h1>
      </NavLink>

      <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span className={isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
        <span className={isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
        <span className={isMobileMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
      </button>

      <nav className={isMobileMenuOpen ? "navbarLinksContainer mobile-open" : "navbarLinksContainer"}>
        <NavLink to="/" className="navbarLinks" onClick={closeMobileMenu}>
          Home
        </NavLink>
        <NavLink to="/projects" className="navbarLinks" onClick={closeMobileMenu}>
          Projects
        </NavLink>
        <NavLink to="/resume" className="navbarLinks" onClick={closeMobileMenu}>
          Resume
        </NavLink>
        <NavLink to="/biography" className="navbarLinks" onClick={closeMobileMenu}>
          Biography
        </NavLink>

        <NavLink style={{ border: 'none' }} to="/contact" className="navbarLinks" onClick={closeMobileMenu}>
          <button>Hire Me</button>
        </NavLink>
      </nav>
    </nav>
  );
}
