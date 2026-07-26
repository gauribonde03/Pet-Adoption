import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav className="navbar">

      <div className="logo">
        🐾 Pet Haven
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/adopt">Adopt</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button onClick={() => navigate("/contact")}>Adopt Now</button>
      </div>

    </nav>
  );
};

export default Navbar;