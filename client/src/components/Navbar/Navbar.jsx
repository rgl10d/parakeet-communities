import React from "react";
import "./Navbar.css";
import fullLogo from "../../assets/full-logo-cropped.png";

const Navbar = () => {
  return (
    <header id="navHeader" className="bg-light">
      <a id="logoLink" href="/">
        <img id="fullLogo" src={fullLogo} alt="Parakeet Communities Logo" />
      </a>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/communities">
                Communities
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/faq">
                FAQ
              </a>
              <a className="nav-link" href="/apply">
                Apply Now
              </a>
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
          <form className="form-inline">
            <button
              id="residentPortalBtn"
              className="btn btn-outline-success"
              type="button"
            >
              Resident Portal
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
