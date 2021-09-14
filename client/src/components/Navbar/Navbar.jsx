import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              Communities
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/faq">
              FAQ
            </a>
            <a className="nav-link" href="/">
              Apply Now
            </a>
            <a className="nav-link" href="/">
              Contact Us
            </a>
          </div>
        </div>
        <form className="form-inline">
          <button className="btn btn-outline-success" type="button">
            Resident Portal
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
