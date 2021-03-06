import React, { Fragment, useContext, useEffect, useState } from "react";
import "./Communities.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CommunityContext } from "../../contexts/CommunityContext";
// import logomark from "../../assets/parakeet-Logomark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import rvIcon from "../../assets/rvIcon.png";
import uuid from "react-uuid";

const Communities = () => {
  // STATE VARIABLES
  const { communityStates } = useContext(CommunityContext);
  const [usStatesState, setUsStatesState] = useState([]);
  // const [filteredCommunities, setFilteredCommunities] = useState([]);
  const [defaultOption, setDefaultOption] = useState("");

  // HOOK THAT OCCURS ON PAGE LOAD
  useEffect(() => {
    setDefaultOption(window.location.hash.replace("#", ""));
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
      <div id="communities-container" className="container">
        <div id="communities-hero-image" />
        <h1 id="communities-header">
          Our <span style={{ color: "#2fc984" }}>Communities</span>
        </h1>
        <h3 id="filter-header">Filter by State:</h3>
        <div className="row filters-container justify-content-center">
          {/* STATE SELECT DROPDOWN */}
          <div className="col-lg-4">
            <select
              className="form-select state-select-dropdown"
              value={defaultOption}
              multiple={false}
              aria-label="US State Filter Select"
              onChange={(e) => {
                setDefaultOption(e.target.value);
                if (e.target.value === "") {
                  setUsStatesState(communityStates);
                } else {
                  setUsStatesState(
                    communityStates.filter(
                      (communityStates) =>
                        communityStates.usStateId === e.target.value
                    )
                  );
                }
              }}
            >
              <option value="">State</option>
              <option value="alabama">Alabama</option>
              <option value="florida">Florida</option>
              {/* <option value="indiana">Indiana</option> */}
              {/* <option value="kansas">Kansas</option> */}
              {/* <option value="kentucky">Kentucky</option> */}
              <option value="maryland">Maryland</option>
              <option value="massachusettes">Massachusettes</option>
              <option value="michigan">Michigan</option>
              <option value="newyork">New York</option>
              <option value="northcarolina">North Carolina</option>
              <option value="northdakota">North Dakota</option>
              {/* <option value="ohio">Ohio</option> */}
              <option value="oregon">Oregon</option>
              {/* <option value="pennsylvania">Pennsylvania</option> */}
              {/* <option value="texas">Texas</option> */}
              {/* <option value="washington">Washington</option> */}
              <option value="westvirginia">West Virginia</option>
            </select>
          </div>
          {/* COMMUNITY AGE SELECT */}
          {/* <div className="col-lg-4">
            <select
              className="form-select state-select-dropdown"
              aria-label="Community Age Filter Select"
            >
              <option value="communityage">Age Preference</option>
              <option value="allages">All Ages</option>
              <option value="55+">55+</option>
            </select>
          </div> */}
          {/* HOUSING TYPE SELECT */}
          {/* <div className="col-lg-4">
            <select
              className="form-select state-select-dropdown"
              aria-label="Housing Type Filter Select"
            >
              <option value="housingtype">Housing Type</option>
              <option value="houses">Houses</option>
              <option value="rv">RV's</option>
            </select>
          </div> */}
        </div>
        {/* US STATE LIST MAP FUNCTION */}
        {usStatesState.map((communityStates) => {
          return (
            <Fragment key={uuid()}>
              {/* CONTAINER FOR EACH US STATE */}
              <div key={uuid()}>
                {/* DISPLAYS US STATE NAME */}
                <h1 key={uuid()} className="community-state-names">
                  {communityStates.state}
                </h1>
                {/* COMMUNITIES WITHIN EACH STATE MAP FUNCTION */}
                <div key={uuid()} className="row us-state-card-container">
                  {communityStates.communities.map((communities) => {
                    return (
                      <div
                        key={uuid()}
                        className="card community-card"
                        style={{
                          backgroundImage: `url(${communityStates.stateBgURL})`,
                        }}
                      >
                        <div key={uuid()} className="card-body">
                          {/* COMMUNITY NAME */}
                          <h3
                            key={uuid()}
                            className="card-title community-card-title community-name"
                          >
                            {communities.communityName}
                          </h3>
                          {/* CITY/STATE OF THE COMMUNITY */}
                          <h5
                            key={uuid()}
                            className="card-title community-card-title community-city"
                          >
                            {communities.communityCity}
                          </h5>
                          {/* COMMUNITY IMAGE */}
                          {/* <img src="..." class="card-img-top" alt="..." /> */}
                          <img
                              key={uuid()}
                              src={communities.communityCardImage}
                              // className={communities.rvClass}
                              alt={communities.communityName}
                            />
                          {/* <svg
                            key={uuid()}
                            viewBox="0 0 286 160"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect key={uuid()} width="286" height="160" />
                          </svg> */}
                          {/* COMMUNITY ADDRESS */}
                          <p
                            key={uuid()}
                            className="card-text community-card-address"
                          >
                            {communities.communityAddress}
                          </p>
                          <p
                            key={uuid()}
                            className="card-text community-card-type"
                          >
                            Community Type: {communities.communityType}
                          </p>
                          {/* CARD ICONS DIV */}
                          <div key={uuid()} className="card-text card-icons">
                            {/* HOUSE ICON */}
                            <FontAwesomeIcon
                              key={uuid()}
                              icon={faHome}
                              className="card-house-icon"
                              alt="Manufactured Houses Allowed"
                            />
                            {/* RV ICON */}
                            <img
                              key={uuid()}
                              src={rvIcon}
                              className={communities.rvClass}
                              alt="RV's Allowed"
                            />
                          </div>

                          {/* <div key={uuid()} style={{ position: "relative" }}>
                            <img
                              key={uuid()}
                              alt="Parakeet Communities Logo"
                              className="community-card-logo"
                              src={logomark}
                            />
                          </div> */}
                          {/* LINK TO COMMUNITY PAGE */}
                          <a
                            key={uuid()}
                            href={`/communities/${communities.communityURL}`}
                            className="btn btn-primary community-card-button"
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
            </Fragment>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Communities;
