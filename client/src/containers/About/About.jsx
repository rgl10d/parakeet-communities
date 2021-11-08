import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="aboutContainer" className="container">
      <div id="about-hero-img">
        {/* <img id="about-logo" src={aboutLogo} alt="Business men talking" /> */}
      </div>
        <h1 id="aboutTitle">
          Who <span style={{ color: "#2fc984" }}>We</span> Are
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
      <section>
        <div id="find-community-action">
          <h1>
            Ready to find your new <span style={{ color: "#fa6261" }}>home</span>?
          </h1>
          <p>
            Check out all of our communities and choose the right one for you!
          </p>
          <a className="btn btn-success" href="/communities">
            Communities
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
