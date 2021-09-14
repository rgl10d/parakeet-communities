import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import stockParakeet from "../../assets/stockParakeetedit.png";
import USAMap from "react-usa-map";

const Home = () => {
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  const statesCustomConfig = () => {
    return {
      FL: {
        fill: "rgb(59, 187, 59)",
        clickHandler: () => alert("We have communities in Florida!"),
      },
      GA: {
        fill: "rgb(59, 187, 59)",
        clickHandler: () => alert("We have communities in Georgia!"),
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
              height="400px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Our <span style={{ color: "lightgreen" }}>All Ages</span>{" "}
                Communities
              </h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>
                <a className="btn btn-success" href="/">
                  See Communities
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="400px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>
                Our <span style={{ color: "lightgreen" }}>55+</span> Communities
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                <a className="btn btn-success" href="/">
                  See Communities
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="400px"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <div className="carousel-caption d-none d-md-block">
              <h2>Ready? <span style={{ color: "lightgreen" }}>Apply</span> Now.</h2>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>
                <a className="btn btn-success" href="/">
                  Apply Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container page-core">
        {/* Small Heading Cards */}
        <div className="row">
          <div className="col-lg-4 heading-card">
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
          <div className="col-lg-4 heading-card">
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
          <div className="col-lg-4 heading-card">
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
        </div>
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
        <div className=" map-container">
          <USAMap
            customize={statesCustomConfig()}
            onClick={mapHandler}
            title="United States Map"
            width={800}
          />
        </div>
      </div>
      <nav className="footer bg-dark">
        <button href="/" className="fa fa-youtube" />
        <button href="/" className="fa fa-linkedin" />
      </nav>
    </>
  );
};

export default Home;
