import React from "react";
import "./Home.css";
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
              <a className="nav-link" href="/">
                About
              </a>
              <a className="nav-link" href="/">
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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Our All Ages Communities</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat
            reprehenderit amet repellat perferendis quis ab nostrum ipsum iure
            nemo! Dolor animi impedit labore enim consequatur repellat quisquam.
            Voluptatum, iste ipsam? Eveniet neque doloribus cumque sapiente
            numquam voluptate voluptatem natus corrupti dolorum! Fugiat ut nisi,
            laborum saepe nihil distinctio iste enim et dicta commodi
            reprehenderit deserunt recusandae atque provident tempore? Sint,
            aspernatur a eaque perspiciatis repellat asperiores provident
            laudantium sed totam vero facere repellendus? Eum numquam cupiditate
            voluptatum earum magnam ipsa sed architecto, dolor reiciendis!
            Praesentium, repellendus omnis nostrum, quod quas numquam
            voluptatibus deserunt in, ex odio hic architecto? Totam?
          </p>
          <button className="btn btn-outline-success" type="button">
            See our All Ages communities
          </button>
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
          <hr />
        </div>

        {/* Feature Blocks */}
        <div className="row featured">
          {/* Feature Block 1 */}
          <div className="col-md-7">
            <h2 class="featured-heading">
              Feature Heading.{" "}
              <span class="text-muted">This is the first.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>
          <div className="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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

          {/* Feature Block 2 */}
          <div className="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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
          <div className="col-md-7">
            <h2 class="featured-heading">
              Feature Heading.{" "}
              <span class="text-muted">This is the first.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>

          {/* Feature Block 3 */}
          <div className="col-md-7">
            <h2 class="featured-heading">
              Feature Heading.{" "}
              <span class="text-muted">This is the first.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium debitis consectetur similique cupiditate, veritatis
              eveniet!
            </p>
          </div>
          <div className="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
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
    </>
  );
};

export default Home;
