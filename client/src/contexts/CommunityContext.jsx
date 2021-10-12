import React, { createContext, useState } from "react";
import AlabamaShape from "../assets/US_States_Imgs/alabama.png";
import FloridaShape from "../assets/US_States_Imgs/florida.png";
import IndianaShape from "../assets/US_States_Imgs/indiana.png";
import KansasShape from "../assets/US_States_Imgs/kansas.png";
import KentuckyShape from "../assets/US_States_Imgs/kentucky.png";
import MarylandShape from "../assets/US_States_Imgs/maryland.png";
import MassachusettsShape from "../assets/US_States_Imgs/massachusetts.png";
import MichiganShape from "../assets/US_States_Imgs/michigan.png";
import NewYorkShape from "../assets/US_States_Imgs/newyork.png";
import NorthCarolinaShape from "../assets/US_States_Imgs/northcarolina.png";
import NorthDakotaShape from "../assets/US_States_Imgs/northdakota.png";
import OhioShape from "../assets/US_States_Imgs/ohio.png";
import OregonShape from "../assets/US_States_Imgs/oregon.png";
import PennsylvaniaShape from "../assets/US_States_Imgs/pennsylvania.png";
import TexasShape from "../assets/US_States_Imgs/texas.png";
import WashingtonShape from "../assets/US_States_Imgs/washington.png";
import WestVirginiaShape from "../assets/US_States_Imgs/westvirginia.png";

export const CommunityContext = createContext();

const CommunityContextProvider = (props) => {
  const [communityStates] = useState([
    {
      state: "Alabama",
      usStateId: "alabama",
      stateAbbr: "AL",
      stateBgURL: AlabamaShape,
      communities: [
        {
          communityName: "Wolf Bay MHC",
          communityCity: "Elberta, AL",
          communityAddress: "9741 Wilson Rd, Elberta, AL",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "wolfbay",
          communityID: "AL-1",
        },
      ],
    },
    {
      state: "Florida",
      usStateId: "florida",
      stateAbbr: "FL",
      stateBgURL: FloridaShape,
      communities: [
        {
          communityName: "Bay Oaks Village I & II",
          communityCity: "Panama City, FL",
          communityAddress: "409 School Ave, Panama City, FL",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "bayoaksvillage",
          communityID: "FL-1",
        },
        {
          communityName: "Everglades MHP",
          communityCity: "Clewiston, FL",
          communityAddress: "800 E Obispo Avenue Clewiston, FL",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "everglades",
          communityID: "FL-2",
        },
        {
          communityName: "Gulf Breeze MHC",
          communityCity: "Hudson, FL",
          communityAddress: "7530 Bolton Ave, Hudson, FL",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "gulfbreeze",
          communityID: "FL-3",
        },
        {
          communityName: "Journey's End",
          communityCity: "Okeechobee, FL",
          communityAddress: "480 Highway 441 SE, Okeechobee, FL",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "journeysend",
          communityID: "FL-4",
        },
        {
          communityName: "Lake Wales MHC",
          communityCity: "Lake Wales, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "lakewales",
          communityID: "FL-5",
        },
        {
          communityName: "Oceanaire MHC",
          communityCity: "New Smyrna Beach, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "oceanaire",
          communityID: "FL-6",
        },
        {
          communityName: "Ormond Beach Oasis",
          communityCity: "Ormond Beach, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "ormondbeachoasis",
          communityID: "FL-7",
        },
        {
          communityName: "Palm Springs Estates",
          communityCity: "Tarpon Springs, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "palmspringsestates",
          communityID: "FL-8",
        },
        {
          communityName: "Royal Oaks MHC",
          communityCity: "Vero Beach, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "roiyaloaks",
          communityID: "FL-9",
        },
        {
          communityName: "Royal Palm Trailer Park",
          communityCity: "Clewiston, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "royalpalm",
          communityID: "FL-10",
        },
        {
          communityName: "Town & Country MHC",
          communityCity: "Jacksonville, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "townandcountry",
          communityID: "FL-11",
        },
        {
          communityName: "Westwood MHC",
          communityCity: "Ormond Beach, FL",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "westwood",
          communityID: "FL-12",
        },
      ],
    },
    {
      state: "Indiana",
      usStateId: "indiana",
      stateAbbr: "IN",
      stateBgURL: IndianaShape,
      communities: [
        {
          communityName: "Moores Hill MHP",
          communityCity: "Aurora, IN",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "mooreshill",
          communityID: "IN-1",
        },
      ],
    },
    {
      state: "Kansas",
      usStateId: "kansas",
      stateAbbr: "KS",
      stateBgURL: KansasShape,
      communities: [
        {
          communityName: "Cherrywoods MHP",
          communityCity: "Ottawa, KS",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "cherrywoods",
          communityID: "KS-1",
        },
        {
          communityName: "Fishin' MHP",
          communityCity: "Wichita, KS",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "fishin",
          communityID: "KS-2",
        },
      ],
    },
    {
      state: "Kentucky",
      usStateId: "kentucky",
      stateAbbr: "KY",
      stateBgURL: KentuckyShape,
      communities: [
        {
          communityName: "Ponderosa MHP",
          communityCity: "Elizabethtown, KY",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "ponderosa",
          communityID: "KY-1",
        },
      ],
    },
    {
      state: "Maryland",
      usStateId: "maryland",
      stateAbbr: "MD",
      stateBgURL: MarylandShape,
      communities: [
        {
          communityName: "Mobile Manor",
          communityCity: "Rosedale, MD",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "mobilemanor",
          communityID: "MD-1",
        },
        {
          communityName: "Rio Vista MHP",
          communityCity: "Lothian, MD",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "riovista",
          communityID: "MD-2",
        },
      ],
    },
    {
      state: "Massachusettes",
      usStateId: "massachusettes",
      stateAbbr: "MA",
      stateBgURL: MassachusettsShape,
      communities: [
        {
          communityName: "Mayflower Hills MHC",
          communityCity: "Plymouth, MA",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "mayflowerhills",
          communityID: "MA-1",
        },
      ],
    },
    {
      state: "Michigan",
      usStateId: "michigan",
      stateAbbr: "MI",
      stateBgURL: MichiganShape,
      communities: [
        {
          communityName: "Lamberton Lake MHC",
          communityCity: "Grand Rapids, MI",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "lambertonlake",
          communityID: "MI-1",
        },
        {
          communityName: "Victoria Woods MHC",
          communityCity: "Midland, MI",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "victoriawoods",
          communityID: "MI-2",
        },
        {
          communityName: "Kimball Estates",
          communityCity: "Kimball, MI",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "kimballestates",
          communityID: "MI-3",
        },
      ],
    },
    {
      state: "New York",
      usStateId: "newyork",
      stateAbbr: "NY",
      stateBgURL: NewYorkShape,
      communities: [
        {
          communityName: "Collins MHC",
          communityCity: "Plattsburgh, NY",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "collins",
          communityID: "NY-1",
        },
        {
          communityName: "Underwood Estates",
          communityCity: "Plattsburgh, NY",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "underwoodestates",
          communityID: "NY-2",
        },
      ],
    },
    {
      state: "North Carolina",
      usStateId: "northcarolina",
      stateAbbr: "NC",
      stateBgURL: NorthCarolinaShape,
      communities: [
        {
          communityName: "Cedar Grove MHC",
          communityCity: "Kernersville, NC",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "cedargrove",
          communityID: "NC-1",
        },
        {
          communityName: "Colonial MHC",
          communityCity: "New Bern, NC",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "colonial",
          communityID: "NC-2",
        },
        {
          communityName: "Lambeth MHC",
          communityCity: "Winston-Salem, NC",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "lambeth",
          communityID: "NC-3",
        },
        {
          communityName: "Parkwood MHC",
          communityCity: "Winston-Salem, NC",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "parkwood",
          communityID: "NC-4",
        },
        {
          communityName: "Vandemere MHC",
          communityCity: "Greenville, NC",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "vandemere",
          communityID: "NC-5",
        },
      ],
    },
    {
      state: "North Dakota",
      usStateId: "northdakota",
      stateAbbr: "ND",
      stateBgURL: NorthDakotaShape,
      communities: [
        {
          communityName: "Apple Creek MHC",
          communityCity: "Bismarck, ND",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "applecreek",
          communityID: "ND-1",
        },
        {
          communityName: "Countryside MHC",
          communityCity: "Mandan, ND",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "countrysidemhc",
          communityID: "ND-2",
        },
        {
          communityName: "Parktown MHC",
          communityCity: "Mandan, ND",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "parktown",
          communityID: "ND-3",
        },
      ],
    },
    {
      state: "Ohio",
      usStateId: "ohio",
      stateAbbr: "OH",
      stateBgURL: OhioShape,
      communities: [
        {
          communityName: "Northgate MHP",
          communityCity: "Mt Gilead, OH",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "northgate",
          communityID: "OH-1",
        },
      ],
    },
    {
      state: "Oregon",
      usStateId: "oregon",
      stateAbbr: "OR",
      stateBgURL: OregonShape,
      communities: [
        {
          communityName: "Shasta Glen MHC",
          communityCity: "Klamath Falls, OR",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "shastaglen",
          communityID: "OR-1",
        },
        {
          communityName: "Valley View MHC",
          communityCity: "Roseburg, OR",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "valleyview",
          communityID: "OR-2",
        },
      ],
    },
    {
      state: "Pennsylvania",
      usStateId: "pennsylvania",
      stateAbbr: "PA",
      stateBgURL: PennsylvaniaShape,
      communities: [
        {
          communityName: "Tracey Acres MHP",
          communityCity: "Erie, PA",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "traceyacres",
          communityID: "PA-1",
        },
        {
          communityName: "Tri-State MHP",
          communityCity: "Erie, PA",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "tristatemhp",
          communityID: "PA-2",
        },
      ],
    },
    {
      state: "Texas",
      usStateId: "texas",
      stateAbbr: "TX",
      stateBgURL: TexasShape,
      communities: [
        {
          communityName: "Knollwood Village",
          communityCity: "Knollwood, TX",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "knollwood",
          communityID: "TX-1",
        },
      ],
    },
    {
      state: "Washington",
      usStateId: "washington",
      stateAbbr: "WA",
      stateBgURL: WashingtonShape,
      communities: [
        {
          communityName: "University MHP",
          communityCity: "Spokane Valley, WA",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "universitymhp",
          communityID: "WA-1",
        },
      ],
    },
    {
      state: "West Virginia",
      usStateId: "westvirginia",
      stateAbbr: "WV",
      stateBgURL: WestVirginiaShape,
      communities: [
        {
          communityName: "Cambridge MHC",
          communityCity: "Charles Town, WV",
          communityAddress: "Address",
          communityType: "All Ages",
          communityAmenities: "Amenities",
          communityURL: "cambridge",
          communityID: "WV-1",
        },
      ],
    },
  ]);
  return (
    <CommunityContext.Provider value={{ communityStates }}>
      {props.children}
    </CommunityContext.Provider>
  );
};

export default CommunityContextProvider;
