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
              {/* CONTAINER FOR EACH STATE */}
              <div id={communityStates.usStateId}>
                {/* DISPLAYS US STATE NAME */}
                <h1 className="community-state-names">{communityStates.state}</h1>
                {/* COMMUNITIES WITHIN EACH STATE MAP FUNCTION */}
                {communityStates.communities.map((communities) => {
                  return <p className="community-list">{communities}</p>;
                })}
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
