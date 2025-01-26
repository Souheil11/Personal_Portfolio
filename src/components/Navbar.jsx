import "../styles/Navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink style={{border: 'none'}} to="/">
          <h1 className="navbarLogo">
            Souhaiel<span className="dot">.</span>
          </h1>
        </NavLink>

        <nav className="navbarLinksContainer">
          <NavLink className={location.pathname === "/" ? "navbarLinks" : "navbarLinks"} to="/">
            Home
          </NavLink>
          <NavLink to="/projects" className="navbarLinks">
            Projects
          </NavLink>
          <NavLink to="/resume" className="navbarLinks">
            Resume
          </NavLink>
          <NavLink to="/biography" className="navbarLinks">
            Biography
          </NavLink>

          <NavLink style={{border: 'none'}} to="/contact" className="navbarLinks">
            <button>Hire Me</button>
          </NavLink>
        </nav>
      </nav>
    </>
  );
}
