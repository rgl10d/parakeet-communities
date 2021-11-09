import React from "react";
import "./Careers.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Our Open Positions</h1>
        <div id="bzOpeningsContainer"></div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
