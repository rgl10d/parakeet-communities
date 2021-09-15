import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import playingInYard from "../../assets/playingInYard.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="aboutHeaderImg"></div>
      <div id="aboutContainer" className="container">
        <h1 id="aboutTitle">
          Who <span style={{ color: "lightgreen" }}>We</span> Are
        </h1>
        <p id="aboutText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          excepturi consequuntur, fugit asperiores veritatis culpa earum nam
          nesciunt! Quae aut laudantium cumque animi corporis, ducimus
          blanditiis quas labore rem itaque illo eaque sed esse, quibusdam
          placeat in ullam dolores alias quasi officia libero repellendus? Vel
          mollitia placeat ducimus esse repudiandae earum culpa. Tempore dolor
          impedit alias quae asperiores corrupti delectus, cumque fuga illum et
          cum architecto tempora. Quas porro ullam obcaecati iste tenetur
          commodi sunt veniam ducimus quae doloremque est aperiam quam ratione
          dignissimos quod rerum nam, voluptate saepe laborum vero. Maiores
          repellat fugiat, magni ad adipisci eveniet distinctio ratione.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
