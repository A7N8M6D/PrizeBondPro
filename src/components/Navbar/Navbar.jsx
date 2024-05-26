import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.css"; // Add your CSS styles here
import { FaUserPlus } from 'react-icons/fa';
import { FaSignInAlt } from "react-icons/fa";
import { FaHome } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userType = Cookies.get("usertype");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Prize Bond Pro</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
          <FaHome />
          </Link>
        </li>

        {userType === "broker" && (
          <li>
            <Link to="/broker" onClick={() => setIsOpen(false)}>
              Broker
            </Link>
          </li>
        )}

        {userType === "user" ? (
          <li>
            <Link to="/bonds" onClick={() => setIsOpen(false)}>
              Bonds
            </Link>
          </li>
        ) : (
          <Link to="/signup" onClick={() => setIsOpen(false)}>
          <FaSignInAlt /> {" "}
            {/* Place the icon component before the text */}
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
