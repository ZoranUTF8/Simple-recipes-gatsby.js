import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import mainLogo from "../assets/images/logo.png";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={mainLogo} alt="simply recipes" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <FiAlignJustify />
          </button>
        </div>

        <div className={showLinks ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => {
              setShowLinks(false);
            }}>
            Početna
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShowLinks(false);
            }}
          >
            Recepti
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => {
              setShowLinks(false);
            }}>
            Onama
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => {
              setShowLinks(false);
            }}>
            Oznake
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
