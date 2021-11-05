import React from "react";
import "./Careers.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="bzOpeningsContainer"></div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
