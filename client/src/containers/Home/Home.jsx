import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import USAMap from "react-usa-map";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faQuestionCircle,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Family from "../../assets/family.jpg";
import Hands from "../../assets/hands_together-min.jpg";
import FatherSon from "../../assets/father_and_son-min.jpg";

const Home = () => {
  const [mapResize, setMapResize] = useState({
    width: window.innerWidth - 100,
    height: (window.innerWidth - 100) * 0.6,
  });

  useEffect(() => {
    if (window.innerWidth >= 1120) {
      setMapResize({
        width: 1020,
        height: 600,
      });
    } else if (window.innerWidth < 400) {
      setMapResize({
        width: 300,
        height: 300 * 0.6,
      });
    } else {
      setMapResize({
        width: window.innerWidth - 100,
        height: (window.innerWidth - 100) * 0.6,
      });
    }
  }, []);

  useEffect(() => {
    // FUNCTION THAT RESIZES MAP ON WINDOW SIZE
    function handleMapResize() {
      if (window.innerWidth >= 1120) {
        setMapResize({
          width: 1020,
          height: 600,
        });
      } else if (window.innerWidth < 400) {
        setMapResize({
          width: 300,
          height: mapResize.width * 0.6,
        });
      } else {
        setMapResize({
          width: window.innerWidth - 100,
          height: mapResize.width * 0.6,
        });
      }
    }
    // CALLS THE RESIZE FUNCTION WHEN WINDOW SIZE CHANGES
    window.addEventListener("resize", handleMapResize);

    return (_) => {
      // REMOVES THE EVENT LISTENER TO PREVENT MEMORY LEAKS FROM TOO MANY RE-RENDERS
      window.removeEventListener("resize", handleMapResize);
    };
  });

  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  const statesCustomConfig = () => {
    return {
      AL: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#alabama"),
      },
      FL: {
        fill: "#2fc984",
        clickHandler: () => {
          window.location.href = "/communities#florida";
        },
      },
      // IN: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#indiana"),
      // },
      // KS: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#kansas"),
      // },
      // KY: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#kentucky"),
      // },
      MA: {
        fill: "#2fc984",
        clickHandler: () =>
          (window.location.href = "/communities#massachusettes"),
      },
      MD: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#maryland"),
      },
      MI: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#michigan"),
      },
      NC: {
        fill: "#2fc984",
        clickHandler: () =>
          (window.location.href = "/communities#northcarolina"),
      },
      ND: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#northdakota"),
      },
      NY: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#newyork"),
      },
      // OH: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#ohio"),
      // },
      OR: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#oregon"),
      },
      // PA: {
      //   fill: "#2fc984",
      //   clickHandler: () =>
      //     (window.location.href = "/communities#pennsylvania"),
      // },
      // TX: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#texas"),
      // },
      // WA: {
      //   fill: "#2fc984",
      //   clickHandler: () => (window.location.href = "/communities#washington"),
      // },
      WV: {
        fill: "#2fc984",
        clickHandler: () =>
          (window.location.href = "/communities#westvirginia"),
      },
    };
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      {/* Carousel */}
      <div id="home-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#home-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#home-carousel" data-slide-to="1"></li>
          <li data-target="#home-carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {/* First Slide */}
          <div id="slide-0" className="carousel-item active all-slides">
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Check Out Our{" "}
                <span style={{ color: "#2fc984" }}>Communities</span>{" "}
              </h2>
              <p>Find affordable Mobile Housing all across the U.S.</p>
              <p>
                <a className="btn btn-success" href="/communities">
                  See Communities
                </a>
              </p>
            </div>
          </div>
          {/* Second Slide */}
          <div id="slide-1" className="carousel-item all-slides">
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Send Us A <span style={{ color: "#2fc984" }}>Message</span>
              </h2>
              <p>Our team of experienced professionals are here for you!</p>
              <p>
                <a className="btn btn-success" href="/communities">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          {/* Third Slide */}
          <div id="slide-2" className="carousel-item all-slides">
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Ready? <span style={{ color: "#2fc984" }}>Apply</span> Now.
              </h2>
              <p>Dream it. Rent it. Buy it.</p>
              <p>
                <a
                  className="btn btn-success"
                  href="https://bedg.twa.rentmanager.com/applynow"
                >
                  Apply Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-background">
        {/* Small Heading Cards */}
        <div className="flex-container">
          <div className="row header-card-row">
            <div id="heading-card-1" className="col-lg-3 heading-card">
              <FontAwesomeIcon icon={faUserTie} className="heading-card-icon" />
              <h2>About Us</h2>
              <p>
                Our team has been in the manufactured housing space for decades.
                We aim to offer affordable living with equal standards and
                quality of living as other home communities.
              </p>
              <p>
                <a className="btn btn-primary" href="/about">
                  Learn More
                </a>
              </p>
            </div>
            <div id="heading-card-2" className="col-lg-3 heading-card">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="heading-card-icon"
              />
              <h2>Communities</h2>
              <p>
                View our fast growing list of communities. With locations all
                across the U.S. you're bound to find one that you can call your
                forever home. Come join the Parakeet flock!
              </p>
              <p>
                <a
                  className="btn btn-primary heading-card-btn"
                  href="/communities"
                >
                  See Communities
                </a>
              </p>
            </div>
            <div id="heading-card-3" className="col-lg-3 heading-card">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="heading-card-icon"
              />
              <h2>FAQs</h2>
              <p>
                Have a question about the move-in process? There are many common
                questions that residents have, check out our FAQ page to see if
                your question has already been answered!
              </p>
              <p>
                <a className="btn btn-primary" href="/faq">
                  FAQ
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Featured Section */}
        <div className="container home-featured">
          <hr className="divider" />
          {/* Feature Blocks */}
          <div className="row featured">
            {/* Feature Block 1 */}
            <div className="col-md-7 featured-centering">
              <h2 className="featured-heading">
                Welcome to the
                <span style={{ color: "#2fc984" }}> Flock</span>
              </h2>
              <p className="lead">
                We chose our name because the Green Parakeet is a reminder to
                not be careless with time, energy or money. The Green Parakeet
                is also known to build large communal roosts. We value these
                ideals and want to make roosts of our own that residents can
                live in and thrive together.
              </p>
              <p className="lead">Come fly home.</p>
            </div>
            <div className="col-md-5 featured-image-container">
              <img
                className="featured-img"
                src={Family}
                alt="Parakeet birds"
              />
            </div>
            <hr className="divider" />
            {/* Feature Block 2 */}
            <div className="col-md-5 featured-image-container">
              <img
                className="featured-img"
                src={Hands}
                alt="Hands stacked in unison"
              />
            </div>
            <div id="middleFeatured" className="col-md-7 featured-centering">
              <h2 className="featured-heading">
                We're
                <span style={{ color: "#2fc984" }}> Community</span> first
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium debitis consectetur similique cupiditate, veritatis
                eveniet!
              </p>
            </div>
            <hr className="divider" />
            {/* Feature Block 3 */}
            <div className="col-md-7 featured-centering">
              <h2 className="featured-heading">
                Find your
                <span style={{ color: "#2fc984" }}> Forever Home</span>
              </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium debitis consectetur similique cupiditate, veritatis
                eveniet!
              </p>
            </div>
            <div className="col-md-5 featured-image-container">
              <img
                className="featured-img"
                src={FatherSon}
                alt="A father and a son playing"
              />
            </div>
          </div>
          <hr id="map-divider" className="divider" />
        </div>
        {/* US Map */}
        <div className="map-container">
          <h1>Our Locations</h1>
          <USAMap
            customize={statesCustomConfig()}
            onClick={mapHandler}
            title="Parakeet community United States map"
            width={mapResize.width}
            height={mapResize.height}
            defaulFill={"darkgreen"}
          />
        </div>
      </div>
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Home;
