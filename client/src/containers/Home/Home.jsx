import React from "react";
import "./Home.css";
import stockParakeet from "../../assets/stockParakeetedit.png";

const Home = () => {
  return (
    <>
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
      <div id="info-cards">
        <div className="card">
          <img src={stockParakeet} className="card-img-top mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Characteristic #1</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              atque molestias, quod earum beatae soluta sequi temporibus? Omnis
              iure quibusdam aperiam quos laudantium tenetur suscipit ab
              assumenda, minima asperiores vero!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={stockParakeet} className="card-img-top mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Characteristic #2</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ex,
              hic nostrum et neque iure exercitationem doloribus quibusdam animi
              saepe possimus veritatis numquam quis! Enim corporis earum
              laboriosam possimus vitae!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={stockParakeet} className="card-img-top mx-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Characteristic #3</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ex,
              hic nostrum et neque iure exercitationem doloribus quibusdam animi
              saepe possimus veritatis numquam quis! Enim corporis earum
              laboriosam possimus vitae!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
