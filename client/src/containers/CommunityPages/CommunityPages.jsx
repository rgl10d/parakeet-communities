import React, { useContext, useEffect, useState } from "react";
import "./CommunityPages.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CommunityContext } from "../../contexts/CommunityContext";

const CommunityPages = () => {
  const { communityStates } = useContext(CommunityContext);
  const [currentCommunity, setCurrentCommunity] = useState([]);

  //   FOR LOOP TO GET THE PAGE'S COMMUNITY INFORMATION FROM CONTEXT
  useEffect(() => {
    const communityPathName = window.location.pathname.replace(
      "/communities/",
      ""
    );

    for (let i = 0; i < communityStates.length; i++) {
      for (let j = 0; j < communityStates[i].communities.length; j++) {
        if (
          communityPathName === communityStates[i].communities[j].communityURL
        ) {
          setCurrentCommunity(communityStates[i].communities[j]);
        }
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <div id="community-page-container" className="container">
        <div className="community-page-title-div">
          <h1 className="community-page-title">
            Welcome to{" "}
            <span style={{ color: "#2fc984" }}>
              {currentCommunity.communityName}
            </span>
          </h1>
          <p>{currentCommunity.communitySubtitle}</p>
          <p>{currentCommunity.communityAddress} | (888)-888-8888</p>
        </div>
        <div
          id="community-carousel"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div style={{ backgroundColor: "red", height: "400px" }}></div>
            </div>
            <div class="carousel-item">
              <div style={{ backgroundColor: "green", height: "400px" }}></div>
            </div>
            <div class="carousel-item">
              <img
                src="https://via.placeholder.com/1110x400)"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#community-carousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#community-carousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div>
          <h3>About Our Community</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui
            voluptatibus unde, libero ipsam animi expedita illum voluptates
            dignissimos at consequuntur officiis aperiam ullam quas distinctio
            consectetur fugit sed quidem nihil similique dolor. Nesciunt
            necessitatibus dicta repellendus reiciendis possimus fugit
            laboriosam excepturi ad ullam, harum temporibus deserunt qui est
            reprehenderit ex corporis unde cumque deleniti quisquam optio quasi!
            Tempore totam fuga consequatur esse sit harum aspernatur beatae
            maiores, repellat quisquam similique doloribus. Rerum laborum
            reiciendis ipsum quam voluptatibus explicabo consectetur aliquam
            soluta impedit illum eaque nemo neque commodi eveniet maxime aperiam
            ab tempora laudantium at suscipit qui, ipsam atque reprehenderit.
          </p>
        </div>
        <div className="community-amenities">
          <h3>Park Amenities</h3>
          <p>{currentCommunity.communityAmenities}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunityPages;
