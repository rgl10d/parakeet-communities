import React, { useEffect, useState } from "react";
import "./Footer.css";
import footerLogo from "../../assets/parakeet-White-Logomark.png";
import footerLogo2 from "../../assets/parakeet-Logomark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [footerLogoState, setFooterLogoState] = useState([]);

  useEffect(() => {
    setFooterLogoState(footerLogo);
  }, []);

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div id="links-left" className="col-sm-5">
            {/* <h4 className="footer-link-title"> Left Links </h4> */}
            <ul>
              <li>
                <a className="footer-link" href="/">
                  Home
                </a>
                <FontAwesomeIcon className="footer-icon" icon={faChevronLeft} />
              </li>{" "}
              <li>
                <a className="footer-link" href="/communities">
                  Communities
                </a>
                <FontAwesomeIcon className="footer-icon" icon={faChevronLeft} />
              </li>{" "}
              <li>
                <a className="footer-link" href="/about">
                  About Us
                </a>
                <FontAwesomeIcon className="footer-icon" icon={faChevronLeft} />
              </li>
            </ul>
          </div>
          <div id="footer-logo-div" className="col-sm-2">
            <img
              id="footerLogo"
              src={footerLogoState}
              alt="Parakeet Communities Logo"
              onMouseOver={() => {
                setFooterLogoState(footerLogo2);
              }}
              onMouseOut={() => {
                setFooterLogoState(footerLogo);
              }}
            />
          </div>
          <div id="links-right" className="col-sm-5">
            {/* <h4 className="footer-link-title"> Right Links </h4> */}
            <ul>
              <li>
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={faChevronRight}
                />
                <a className="footer-link" href="/faq">
                  FAQ
                </a>
              </li>{" "}
              <li>
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={faChevronRight}
                />
                <a className="footer-link" href="/apply">
                  Apply Now
                </a>
              </li>{" "}
              <li>
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={faChevronRight}
                />
                <a className="footer-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
