import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.css"; // Add your CSS styles here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userType = Cookies.get("usertype");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>SHEMA</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
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
          <li>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
