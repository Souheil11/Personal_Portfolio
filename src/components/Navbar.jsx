import "../styles/Navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink >
          <h1 to="/" className="navbarLogo">
            Souhaiel<span className="dot">.</span>
          </h1>
        </NavLink>

        <nav className="navbarLinksContainer">
          <NavLink to="/" className="navbarLinks">
            Home
          </NavLink>
          <NavLink to="/" className="navbarLinks">
            Projects
          </NavLink>
          <NavLink to="/" className="navbarLinks">
            Resume
          </NavLink>
          <NavLink to="/" className="navbarLinks">
            Biography
          </NavLink>

          <NavLink to="/" className="navbarLinks">
            Biography
          </NavLink>


          <NavLink to="/" className="navbarLinks">
          <button>Hire Me</button>
          </NavLink>
         
        </nav>
      </nav>
    </>
  );
}
