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
      "FL": {
        fill: "rgb(59, 187, 59)",
        clickHandler: () => alert('We have communities in Florida!')
      },
      "GA": {
        fill: "rgb(59, 187, 59)",
        clickHandler: () => alert('We have communities in Georgia!')
      }
    };
  };

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
        <div className="card" id="chara-card1">
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
        <div className="card" id="chara-card2">
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
        <div className="card" id="chara-card3">
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
      <div className="jumbotron jumbotron-fluid info-blocks" id="info-block1">
        <div className="container">
          <h1 className="display-4">Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt
            deserunt quidem commodi quos at veritatis optio exercitationem!
            Voluptates officiis, at nihil illo, ratione sapiente numquam alias
            explicabo nobis aspernatur praesentium asperiores ipsa quas tempora?
            Ad ducimus nam, accusantium odio sit consequuntur. Omnis, delectus
            dolore. Neque, animi culpa. In, exercitationem!
          </p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid info-blocks" id="info-block2">
        <div className="container">
          <h1 className="display-4">Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt
            deserunt quidem commodi quos at veritatis optio exercitationem!
            Voluptates officiis, at nihil illo, ratione sapiente numquam alias
            explicabo nobis aspernatur praesentium asperiores ipsa quas tempora?
            Ad ducimus nam, accusantium odio sit consequuntur. Omnis, delectus
            dolore. Neque, animi culpa. In, exercitationem!
          </p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid info-blocks" id="info-block3">
        <div className="container">
          <h1 className="display-4">Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt
            deserunt quidem commodi quos at veritatis optio exercitationem!
            Voluptates officiis, at nihil illo, ratione sapiente numquam alias
            explicabo nobis aspernatur praesentium asperiores ipsa quas tempora?
            Ad ducimus nam, accusantium odio sit consequuntur. Omnis, delectus
            dolore. Neque, animi culpa. In, exercitationem!
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
      </div>
    </>
  );
};

export default Home;
