import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import USAMap from "react-usa-map";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faQuestionCircle, faUserTie } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [mapResize, setMapResize] = useState({
    width: window.innerWidth -100,
    height: ((window.innerWidth - 100) * 0.6)
  });

  useEffect(() => {
    if (window.innerWidth >= 1120) {
      setMapResize({
        width: 1020,
        height: 600
      });
    } else if (window.innerWidth < 400) {
      setMapResize({
        width: 300,
        height: (300 * 0.6),
      });
    } else {
      setMapResize({
        width: window.innerWidth - 100,
        height: ((window.innerWidth - 100) * 0.6),
      });
    }
  }, [])

  useEffect(() => {
    // FUNCTION THAT RESIZES MAP ON WINDOW SIZE
    function handleMapResize() {
      if (window.innerWidth >= 1120) {
        setMapResize({
          width: 1020,
          height: 600
        });
      } else if (window.innerWidth < 400) {
        setMapResize({
          width: 300,
          height: (mapResize.width * 0.6),
        });
      } else {
        setMapResize({
          width: window.innerWidth - 100,
          height: (mapResize.width * 0.6),
        });
      }
    }
    // CALLS THE RESIZE FUNCTION WHEN WINDOW SIZE CHANGES
    window.addEventListener('resize', handleMapResize)

    return _ => {
      // REMOVES THE EVENT LISTENER TO PREVENT MEMORY LEAKS FROM TOO MANY RE-RENDERS
      window.removeEventListener('resize', handleMapResize)
    }
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
        clickHandler: () => (window.location.href = "/communities#florida"),
      },
      IN: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#indiana"),
      },
      KS: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#kansas"),
      },
      KY: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#kentucky"),
      },
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
      OH: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#ohio"),
      },
      OR: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#oregon"),
      },
      PA: {
        fill: "#2fc984",
        clickHandler: () =>
          (window.location.href = "/communities#pennsylvania"),
      },
      TX: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#texas"),
      },
      WA: {
        fill: "#2fc984",
        clickHandler: () => (window.location.href = "/communities#washington"),
      },
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
      <div id="homeCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#homeCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#homeCarousel" data-slide-to="1"></li>
          <li data-target="#homeCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="600px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Our <span style={{ color: "#2fc984" }}>All Ages</span>{" "}
                Communities
              </h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>
                <a className="btn btn-success" href="/communities">
                  See Communities
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="600px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Our <span style={{ color: "#2fc984" }}>55+</span> Communities
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                <a className="btn btn-success" href="/communities">
                  See Communities
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="600px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Ready? <span style={{ color: "#2fc984" }}>Apply</span> Now.
              </h2>
              <p>Dream it. Rent it. Buy it.</p>
              <p>
                <a className="btn btn-success" href="/apply">
                  Apply Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="home-background">
      <div className="flex-container">
        {/* Small Heading Cards */}
        <div className="row header-card-row">
          <div id="heading-card-1" className="col-lg-3 heading-card">
            <FontAwesomeIcon icon={faUserTie} className="heading-card-icon" />
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/about">
                About Us
              </a>
            </p>
          </div>
          <div id="heading-card-2" className="col-lg-3 heading-card">
            <FontAwesomeIcon icon={faHouseUser} className="heading-card-icon" />
            <h2>Communities</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/communities">
                Communities
              </a>
            </p>
          </div>
          <div id="heading-card-3" className="col-lg-3 heading-card">
            <FontAwesomeIcon icon={faQuestionCircle} className="heading-card-icon" />
            <h2>FAQs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/faq">
                FAQ
              </a>
            </p>
          </div>
        </div>
        </div>
      
      
      <div className="container home-featured">
        {/* Small Heading Cards */}
        {/* <div className="row">
          <div id="heading-card-1" className="col-lg-4 heading-card">
            <img
              src={stockParakeet}
              className="card-img-top mx-auto"
              alt="..."
            />
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/">
                A link
              </a>
            </p>
          </div>
          <div id="heading-card-2" className="col-lg-4 heading-card">
            <img
              src={stockParakeet}
              className="card-img-top mx-auto"
              alt="..."
            />
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/">
                A link
              </a>
            </p>
          </div>
          <div id="heading-card-3" className="col-lg-4 heading-card">
            <img
              src={stockParakeet}
              className="card-img-top mx-auto"
              alt="..."
            />
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corporis quidem molestias, magnam quisquam possimus?
            </p>
            <p>
              <a className="btn btn-outline-success" href="/">
                A link
              </a>
            </p>
          </div>
        </div> */}
        <hr className="divider" />
        {/* Feature Blocks */}
        <div className="row featured">
          {/* Feature Block 1 */}
          <div className="col-md-7 featured-center">
            <h2 className="featured-heading">
              Feature Heading.{" "}
              <span className="text-muted">This is the first.</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>
          <div className="col-md-5 featured-image-container">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
          <hr className="divider" />
          {/* Feature Block 2 */}
          <div className="col-md-5 featured-image-container">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
          <div id="middleFeatured" className="col-md-7 featured-center">
            <h2 className="featured-heading">
              Feature Heading.{" "}
              <span className="text-muted">This is the second.</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>
          <hr className="divider" />
          {/* Feature Block 3 */}
          <div className="col-md-7 featured-center">
            <h2 className="featured-heading">
              Feature Heading.{" "}
              <span className="text-muted">This is the third.</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>
          <div className="col-md-5 featured-image-container">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
        <hr className="divider" />
        {/* US Map */}
        <div className="map-container">
          <h1>Select your state!</h1>
          <USAMap
            customize={statesCustomConfig()}
            onClick={mapHandler}
            title="United States Map"
            width={mapResize.width}
            height={mapResize.height}
            defaulFill="#{darkgreen}"
          />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
