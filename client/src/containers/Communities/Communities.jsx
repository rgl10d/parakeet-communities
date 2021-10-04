import React from "react";
import "./Communities.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const communityStates = [
  {
    state: "Alabama",
    usStateId: "alabama",
    communities: ["Alabama Community", "Alabama Community"],
  },
  {
    state: "Florida",
    usStateId: "florida",
    communities: [
      "Florida Community",
      "Florida Community",
      "Florida Community",
      "Florida Community",
    ],
  },
  {
    state: "Indiana",
    usStateId: "indiana",
    communities: ["Indiana Community", "Indiana Community"],
  },
  {
    state: "Kansas",
    usStateId: "Kansas",
    communities: ["Kansas Community", "Kansas Community"],
  },
  {
    state: "Kentucky",
    usStateId: "kentucky",
    communities: ["Kentucky Community", "Kentucky Community"],
  },
  {
    state: "Maryland",
    usStateId: "maryland",
    communities: ["Maryland Community", "Maryland Community"],
  },
  {
    state: "Massachusettes",
    usStateId: "massachusettes",
    communities: ["Massachusettes Community", "Massachusettes Community"],
  },
  {
    state: "Michigan",
    usStateId: "michigan",
    communities: ["Michigan Community", "Michigan Community"],
  },
  {
    state: "New York",
    usStateId: "newyork",
    communities: ["New York Community", "New York Community"],
  },
  {
    state: "North Carolina",
    usStateId: "northcarolina",
    communities: ["North Carolina Community", "North Carolina Community"],
  },
  {
    state: "North Dakota",
    usStateId: "northdakota",
    communities: ["North Dakota Community", "North Dakota Community"],
  },
  {
    state: "Ohio",
    usStateId: "ohio",
    communities: ["Ohio Community", "Ohio Community"],
  },
  {
    state: "Oregon",
    usStateId: "oregon",
    communities: ["Oregon Community", "Oregon Community"],
  },
  {
    state: "Pennsylvania",
    usStateId: "pennsylvania",
    communities: ["Pennsylvania Community", "Pennsylvania Community"],
  },
  {
    state: "Texas",
    usStateId: "texas",
    communities: ["Texas Community", "Texas Community"],
  },
  {
    state: "Washington",
    usStateId: "washington",
    communities: ["Washinton Community", "Washington Community"],
  },
  {
    state: "West Virginia",
    usStateId: "westvirginia",
    communities: ["West Virginia Community", "West Virginia Community"],
  },
];

const Communities = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 id="communities-header">Communities</h1>
        {/* US STATE LIST MAP FUNCTION */}
        {communityStates.map((communityStates) => {
          return (
            <>
              {/* CONTAINER FOR EACH US STATE */}
              <div id={communityStates.usStateId}>
                {/* DISPLAYS US STATE NAME */}
                <h1 className="community-state-names">
                  {communityStates.state}
                </h1>
                {/* COMMUNITIES WITHIN EACH STATE MAP FUNCTION */}
                <div className="row us-state-card-container">
                  {communityStates.communities.map((communities) => {
                    return (
                      <div class="card community-card">
                        <div class="card-body">
                          {/* COMMUNITY NAME */}
                          <h3 class="card-title community-card-title">
                            {communities}
                          </h3>
                          {/* CITY/STATE OF THE COMMUNITY */}
                          <h5 className="card-title community-card-title">
                            City, {communityStates.state}
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
                          <p class="card-text">Address</p>
                          <p class="card-text">Type of Community</p>
                          <p class="card-text">Amenities?</p>
                          {/* LINK TO COMMUNITY PAGE */}
                          <a href="/communities" class="btn btn-primary">
                            Details
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
