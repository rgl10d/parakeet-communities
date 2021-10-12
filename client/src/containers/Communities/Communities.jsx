import React, { useContext, useEffect, useState } from "react";
import "./Communities.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CommunityContext } from "../../contexts/CommunityContext";

const Communities = () => {
  // STATE VARIABLES
  const { communityStates } = useContext(CommunityContext);
  const [usStatesState, setUsStatesState] = useState([]);
  // HOOK THAT OCCURS ON PAGE LOAD
  useEffect(() => {
    for (let i = 0; i < communityStates.length; i++) {
      if (
        window.location.hash.replace("#", "") === communityStates[i].usStateId
      ) {
        setUsStatesState([communityStates[i]]);
        break;
      } else if (i === communityStates.length - 1) {
        setUsStatesState(communityStates);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <div id="community-page-container" className="container">
        <h1 id="communities-header">Communities</h1>
        <h3 id="filter-header">Filters:</h3>
        <div className="row filters-container">
          {/* STATE SELECT DROPDOWN */}
          <div className="col-lg-4">
            <select
              className="form-select state-select-dropdown"
              aria-label="US State Select"
              onChange={(e) => {
                if (e.target.value === "") {
                  setUsStatesState(communityStates);
                } else {
                  setUsStatesState(
                    communityStates.filter(
                      (communityStates) =>
                        communityStates.state === e.target.value
                    )
                  );
                }
              }}
            >
              <option value="">State</option>
              <option value="Alabama">Alabama</option>
              <option value="Florida">Florida</option>
              <option value="Indiana">Indiana</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusettes">Massachusettes</option>
              <option value="Michigan">Michigan</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Texas">Texas</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
            </select>
          </div>
        </div>
        {/* TYPE SELECT */}
        
        {/* US STATE LIST MAP FUNCTION */}
        {usStatesState.map((communityStates) => {
          return (
            <>
              {/* CONTAINER FOR EACH US STATE */}
              <div key={communityStates.usStateId}>
                {/* DISPLAYS US STATE NAME */}
                <h1 className="community-state-names">
                  {communityStates.state}
                </h1>
                {/* COMMUNITIES WITHIN EACH STATE MAP FUNCTION */}
                <div className="row us-state-card-container">
                  {communityStates.communities.map((communities) => {
                    return (
                      <div
                        key={communities.communityID}
                        className="card community-card"
                        style={{backgroundImage: `url(${communityStates.stateBgURL})`}}
                      >
                        <div className="card-body">
                          {/* COMMUNITY NAME */}
                          <h3 className="card-title community-card-title community-name">
                            {communities.communityName}
                          </h3>
                          {/* CITY/STATE OF THE COMMUNITY */}
                          <h5 className="card-title community-card-title community-city">
                            {communities.communityCity}
                          </h5>
                          {/* COMMUNITY IMAGE */}
                          {/* <img src="..." class="card-img-top" alt="..." /> */}
                          <svg
                            viewBox="0 0 286 160"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="286" height="160" />
                          </svg>
                          {/* COMMUNITY ADDRESS */}
                          <p className="card-text community-card-address">
                            {communities.communityAddress}
                          </p>
                          <p className="card-text community-card-type">
                            Community Type: {communities.communityType}
                          </p>
                          <p className="card-text community-card-amenities">
                            {communities.communityAmenities}
                          </p>
                          {/* LINK TO COMMUNITY PAGE */}
                          <a
                            href={`/communities/${communities.communityURL}`}
                            className="btn btn-primary"
                            community={{ communities }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Communities;
