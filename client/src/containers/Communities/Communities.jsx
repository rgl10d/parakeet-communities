import React from "react";
import "./Communities.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const communityStates = [
  {
    state: "Alabama",
    usStateId: "alabama",
    stateAbbr: "AL",
    communities: [
      {
        communityName: "Wolf Bay MHC",
        communityCity: "Elberta, AL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "AL-1"
      },
    ],
  },
  {
    state: "Florida",
    usStateId: "florida",
    stateAbbr: "FL",
    communities: [
      {
        communityName: "Bay Oaks Village I & II",
        communityCity: "Panama City, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-1"
      },
      {
        communityName: "Everglades MHP",
        communityCity: "Clewiston, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-2"
      },
      {
        communityName: "Gulf Breeze MHC",
        communityCity: "Hudson, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-3"
      },
      {
        communityName: "Journey's End",
        communityCity: "Okeechobee, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-4"
      },
      {
        communityName: "Lake Wales MHC",
        communityCity: "Lake Wales, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-5"
      },
      {
        communityName: "Oceanaire MHC",
        communityCity: "New Smyrna Beach, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-6"
      },
      {
        communityName: "Ormond Beach Oasis",
        communityCity: "Ormond Beach, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-7"
      },
      {
        communityName: "Palm Springs Estates",
        communityCity: "Tarpon Springs, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-8"
      },
      {
        communityName: "Royal Oaks MHC",
        communityCity: "Vero Beach, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-9"
      },
      {
        communityName: "Royal Palm Trailer Park",
        communityCity: "Clewiston, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-10"
      },
      {
        communityName: "Town & Country MHC",
        communityCity: "Jacksonville, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-11"
      },
      {
        communityName: "Westwood MHC",
        communityCity: "Ormond Beach, FL",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "FL-12"
      },
    ],
  },
  {
    state: "Indiana",
    usStateId: "indiana",
    stateAbbr: "IN",
    communities: [
      {
        communityName: "Moores Hill MHP",
        communityCity: "Aurora, IN",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "IN-1"
      },
    ],
  },
  {
    state: "Kansas",
    usStateId: "kansas",
    stateAbbr: "KS",
    communities: [
      {
        communityName: "Cherrywoods MHP",
        communityCity: "Ottawa, KS",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "KS-1"
      },
      {
        communityName: "Fishin' MHP",
        communityCity: "Wichita, KS",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "KS-2"
      },
    ],
  },
  {
    state: "Kentucky",
    usStateId: "kentucky",
    stateAbbr: "KY",
    communities: [
      {
        communityName: "Ponderosa MHP",
        communityCity: "Elizabethtown, KY",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "KY-1"
      },
    ],
  },
  {
    state: "Maryland",
    usStateId: "maryland",
    stateAbbr: "MD",
    communities: [
      {
        communityName: "Mobile Manor",
        communityCity: "Rosedale, MD",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MD-1"
      },
      {
        communityName: "Rio Vista MHP",
        communityCity: "Lothian, MD",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MD-2"
      },
    ],
  },
  {
    state: "Massachusettes",
    usStateId: "massachusettes",
    stateAbbr: "MA",
    communities: [
      {
        communityName: "Mayflower Hills MHC",
        communityCity: "Plymouth, MA",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MA-1"
      },
    ],
  },
  {
    state: "Michigan",
    usStateId: "michigan",
    stateAbbr: "MI",
    communities: [
      {
        communityName: "Lamberton Lake MHC",
        communityCity: "Grand Rapids, MI",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MI-1"
      },
      {
        communityName: "Victoria Woods MHC",
        communityCity: "Midland, MI",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MI-2"
      },
      {
        communityName: "Kimball Estates",
        communityCity: "Kimball, MI",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "MI-3"
      },
    ],
  },
  {
    state: "New York",
    usStateId: "newyork",
    stateAbbr: "NY",
    communities: [
      {
        communityName: "Collins MHC",
        communityCity: "Plattsburgh, NY",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NY-1"
      },
      {
        communityName: "Underwood Estates",
        communityCity: "Plattsburgh, NY",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NY-2"
      },
    ],
  },
  {
    state: "North Carolina",
    usStateId: "northcarolina",
    stateAbbr: "NC",
    communities: [
      {
        communityName: "Cedar Grove MHC",
        communityCity: "Kernersville, NC",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NC-1"
      },
      {
        communityName: "Colonial MHC",
        communityCity: "New Bern, NC",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NC-2"
      },
      {
        communityName: "Lambeth MHC",
        communityCity: "Winston-Salem, NC",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NC-3"
      },
      {
        communityName: "Parkwood MHC",
        communityCity: "Winston-Salem, NC",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NC-4"
      },
      {
        communityName: "Vandemere MHC",
        communityCity: "Greenville, NC",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "NC-5"
      },
    ],
  },
  {
    state: "North Dakota",
    usStateId: "northdakota",
    stateAbbr: "ND",
    communities: [
      {
        communityName: "Apple Creek MHC",
        communityCity: "Bismarck, ND",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "ND-1"
      },
      {
        communityName: "Countryside MHC",
        communityCity: "Mandan, ND",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "ND-2"
      },
      {
        communityName: "Parktown MHC",
        communityCity: "Mandan, ND",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "ND-3"
      },
    ],
  },
  {
    state: "Ohio",
    usStateId: "ohio",
    stateAbbr: "OH",
    communities: [
      {
        communityName: "Northgate MHP",
        communityCity: "Mt Gilead, OH",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "OH-1"
      },
    ],
  },
  {
    state: "Oregon",
    usStateId: "oregon",
    stateAbbr: "OR",
    communities: [
      {
        communityName: "Shasta Glen MHC",
        communityCity: "Klamath Falls, OR",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "OR-1"
      },
      {
        communityName: "Valley View MHC",
        communityCity: "Roseburg, OR",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "OR-2"
      },
    ],
  },
  {
    state: "Pennsylvania",
    usStateId: "pennsylvania",
    stateAbbr: "PA",
    communities: [
      {
        communityName: "Tracey Acres MHP",
        communityCity: "Erie, PA",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "PA-1"
      },
      {
        communityName: "Tri-State MHP",
        communityCity: "Erie, PA",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "PA-2"
      },
    ],
  },
  {
    state: "Texas",
    usStateId: "texas",
    stateAbbr: "TX",
    communities: [
      {
        communityName: "Knollwood Village",
        communityCity: "Knollwood, TX",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "TX-1"
      },
    ],
  },
  {
    state: "Washington",
    usStateId: "washington",
    stateAbbr: "WA",
    communities: [
      {
        communityName: "University MHP",
        communityCity: "Spokane Valley, WA",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "WA-1"
      },
    ],
  },
  {
    state: "West Virginia",
    usStateId: "westvirginia",
    stateAbbr: "WV",
    communities: [
      {
        communityName: "Cambridge MHC",
        communityCity: "Charles Town, WV",
        communityAddress: "Address",
        communityType: "All Ages",
        communityAmenities: "Amenities",
        communityID: "WV-1"
      },
    ],
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
              <div key={communityStates.usStateId}>
                {/* DISPLAYS US STATE NAME */}
                <h1 className="community-state-names">
                  {communityStates.state}
                </h1>
                {/* COMMUNITIES WITHIN EACH STATE MAP FUNCTION */}
                <div className="row us-state-card-container">
                  {communityStates.communities.map((communities) => {
                    return (
                      <div key={communities.communityID} className="card community-card">
                        <div className="card-body">
                          {/* COMMUNITY NAME */}
                          <h3 className="card-title community-card-title">
                            {communities.communityName}
                          </h3>
                          {/* CITY/STATE OF THE COMMUNITY */}
                          <h5 className="card-title community-card-title">
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
                          <p className="card-text">{communities.communityAddress}</p>
                          <p className="card-text">Community Type: {communities.communityType}</p>
                          <p className="card-text">{communities.communityAmenities}</p>
                          {/* LINK TO COMMUNITY PAGE */}
                          <a href="/communities" className="btn btn-primary">
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
