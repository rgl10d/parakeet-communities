import React, { useEffect, useState } from "react";
import "./Footer.css";
import footerLogo from "../../assets/parakeet-White-Logomark.png";
import footerLogo2 from "../../assets/parakeet-Logomark.png";

const Footer = () => {
  const [footerLogoState, setFooterLogoState] = useState([]);

  useEffect(() => {
    setFooterLogoState(footerLogo);
  }, []);

  return (
    <footer id="footer">
      <div id="footer-container" className="container">
        <div className="row">
          <div id="footer-logo-div" className="col-sm-2">
            <a href="/">
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
                onClick={() => {}}
              />
            </a>
          </div>
          <div className="col-sm-4" id="footer-address">
            <strong>10221 River Road, #59831</strong>
            <p>Potomac, MD 20859</p>
          </div>
          <div id="footer-link-list" className="col-sm-6">
            <div className="row">
              <div className="col-sm-3">
                <a className="footer-link" href="/">
                  Home
                </a>
              </div>
              <div className="col-sm-3">
                <a className="footer-link" href="/about">
                  About
                </a>
              </div>
              <div className="col-sm-3">
                <a className="footer-link" href="/contact">
                  Contact
                </a>
              </div>
              <div className="col-sm-3">
                <a className="footer-link" href="/communities">
                  Communities
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <a
                  className="footer-link"
                  href="https://bedg.twa.rentmanager.com/applynow"
                >
                  Apply
                </a>
              </div>
              <div className="col-sm-3">
                <a className="footer-link" href="/careers">
                  Careers
                </a>
              </div>
              <div className="col-sm-3">
                <a className="footer-link" href="/faq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
