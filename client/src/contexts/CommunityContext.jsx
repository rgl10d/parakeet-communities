import React, { createContext, useState } from "react";
import AlabamaShape from "../assets/US_States_Imgs/alabama.png";
import FloridaShape from "../assets/US_States_Imgs/florida.png";
// import IndianaShape from "../assets/US_States_Imgs/indiana.png";
// import KansasShape from "../assets/US_States_Imgs/kansas.png";
// import KentuckyShape from "../assets/US_States_Imgs/kentucky.png";
import MarylandShape from "../assets/US_States_Imgs/maryland.png";
import MassachusettsShape from "../assets/US_States_Imgs/massachusetts.png";
import MichiganShape from "../assets/US_States_Imgs/michigan.png";
import NewYorkShape from "../assets/US_States_Imgs/newyork.png";
import NorthCarolinaShape from "../assets/US_States_Imgs/northcarolina.png";
import NorthDakotaShape from "../assets/US_States_Imgs/northdakota.png";
// import OhioShape from "../assets/US_States_Imgs/ohio.png";
import OregonShape from "../assets/US_States_Imgs/oregon.png";
// import PennsylvaniaShape from "../assets/US_States_Imgs/pennsylvania.png";
// import TexasShape from "../assets/US_States_Imgs/texas.png";
// import WashingtonShape from "../assets/US_States_Imgs/washington.png";
import WestVirginiaShape from "../assets/US_States_Imgs/westvirginia.png";
import SeashellsImageOne from "../assets/Community_Pictures/Seashells/seashells-entrance.jpeg";
import SeashellsImageTwo from "../assets/Community_Pictures/Seashells/seashells-street.jpeg";
import SeashellsImageThree from "../assets/Community_Pictures/Seashells/seashells-dock.jpeg";

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
          communityName: "Wolf Bay",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Elberta, AL",
          communityAddress: "9741 Wilson Rd, Elberta, AL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "wolfbay",
          communityID: "AL-1",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
          communityDescription:
            "Whether you're visiting Cape Canaveral for the best winter relaxation Florida's east coast can offer, or you're looking for a new a home that's brimming with the essence of Florida, pick Sea Shells Mobile Home park. Not every Cape Canaveral Mobile Home Park like Shells can offer both incredible views of the shuttle launches, as well as facing west on the water for the most beautiful sunsets, but that's exactly what you'll come to expect at Sea Shells!",
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
          communityName: "Applegate",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Deland, FL",
          communityAddress: "399 Circle Dr, Deland, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "applegate",
          communityID: "FL-1",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Bay Oaks Village I",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Panama City, FL",
          communityAddress: "409 School Ave, Panama City, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "bayoaksvillage",
          communityID: "FL-2",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Bay Oaks Village II",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "Panama City, FL",
          communityAddress: "420 N Kimbrel Ave, Panama City, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "bayoaksvillage",
          communityID: "FL-3",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Congress",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "West Palm Beach, FL",
          communityAddress: "1960 Congress Avenue, West Palm Beach, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "congress",
          communityID: "FL-4",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Everglades",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Clewiston, FL",
          communityAddress: "500 S Francisco Street Clewiston, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "everglades",
          communityID: "FL-5",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Gulf Breeze",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Hudson, FL",
          communityAddress: "7530 Maryland Ave, Hudson, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "gulfbreeze",
          communityID: "FL-6",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Hunter Springs",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Crystal River, FL",
          communityAddress: "316 NE 2nd Street, Crystal River, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "huntersprings",
          communityID: "FL-7",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "J Bar J Estates",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "Miami, FL",
          communityAddress: "2980 NW 79th St, Miami, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "jbarjestates",
          communityID: "FL-8",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Lake Saunders",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Miami, FL",
          communityAddress: "2980 NW 79th St, Miami, FL",
          communityType: "55+",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "lakesaunders",
          communityID: "FL-9",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Lake Wales",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Lake Wales, FL",
          communityAddress: "705 N. Scenic Highway, Lake Wales, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "lakewales",
          communityID: "FL-10",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Oceanaire",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "New Smyrna Beach, FL",
          communityAddress: "1311 Turnbull Street, New Smyrna Beach, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "oceanaire",
          communityID: "FL-11",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Ormond Beach Oasis",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "Ormond Beach, FL",
          communityAddress: "955 S. Nova Rd, Ormond Beach, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "ormondbeachoasis",
          communityID: "FL-12",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Palm Spring Estates",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Tarpon Springs, FL",
          communityAddress: "40110 US 19 N, Tarpon Springs, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "palmspringestates",
          communityID: "FL-13",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Royal Oaks",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Vero Beach, FL",
          communityAddress: "8125 US 1 Highway, Vero Beach, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "royaloaks",
          communityID: "FL-14",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Sea Shells",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Cape Canaveral, FL",
          communityAddress: "51 Hitching Post Rd, Cape Canaveral, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "seashells",
          communityID: "FL-15",
          rvClass: "card-rv-icon",
          communityPhone: "(321)-613-3990",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Shady Oaks",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Miami, FL",
          communityAddress: "14701 NE 6 Avenue, Miami, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "shadyoaks",
          communityID: "FL-16",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Town & Country",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Jacksonville, FL",
          communityAddress: "7835 Morse Avenue, Jacksonville, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "townandcountry",
          communityID: "FL-17",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Tradewinds",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Cocoa, FL",
          communityAddress: "4100 N Cocoa Blvd, Cocoa, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "tradewinds",
          communityID: "FL-18",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Westwood",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Ormond Beach, FL",
          communityAddress: "1804 Nelson Av, Ormond Beach, FL",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "westwood",
          communityID: "FL-19",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
      ],
    },
    // {
    //   state: "Indiana",
    //   usStateId: "indiana",
    //   stateAbbr: "IN",
    //   stateBgURL: IndianaShape,
    //   communities: [
    //     {
    //       communityName: "Moores Hill MHP",
    //       communityCity: "Aurora, IN",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "mooreshill",
    //       communityID: "IN-1",
    //     },
    //   ],
    // },
    // {
    //   state: "Kansas",
    //   usStateId: "kansas",
    //   stateAbbr: "KS",
    //   stateBgURL: KansasShape,
    //   communities: [
    //     {
    //       communityName: "Cherrywoods MHP",
    //       communityCity: "Ottawa, KS",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "cherrywoods",
    //       communityID: "KS-1",
    //     },
    //     {
    //       communityName: "Fishin' MHP",
    //       communityCity: "Wichita, KS",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "fishin",
    //       communityID: "KS-2",
    //     },
    //   ],
    // },
    // {
    //   state: "Kentucky",
    //   usStateId: "kentucky",
    //   stateAbbr: "KY",
    //   stateBgURL: KentuckyShape,
    //   communities: [
    //     {
    //       communityName: "Ponderosa MHP",
    //       communityCity: "Elizabethtown, KY",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "ponderosa",
    //       communityID: "KY-1",
    //     },
    //   ],
    // },
    {
      state: "Maryland",
      usStateId: "maryland",
      stateAbbr: "MD",
      stateBgURL: MarylandShape,
      communities: [
        {
          communityName: "Mobile Manor",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "Rosedale, MD",
          communityAddress: "1302 Evering Ave, Rosedale, MD",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "mobilemanor",
          communityID: "MD-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Royal Palm",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Potomac, MD",
          communityAddress: "10221 River Road #59831, Potomac, MD",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "royalpalm",
          communityID: "MD-2",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
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
          communityName: "Mayflower Hills",
          communitySubtitle: "A Manufactured Housing Community",
          communityCity: "Plymouth, MA",
          communityAddress: "0 Minuteman Lane, Plymouth, MA",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "mayflowerhills",
          communityID: "MA-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
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
          communityName: "Lamberton Lake",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Grand Rapids, MI",
          communityAddress: "1561 Sherin Drive NE, Grand Rapids,",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "lambertonlake",
          communityID: "MI-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        // {
        //   communityName: "Victoria Woods MHC",
        //   communityCity: "Midland, MI",
        //   communityAddress: "Address",
        //   communityType: "All Ages",
        //             communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
        //   communityURL: "victoriawoods",
        //   communityID: "MI-2",
        // },
        // {
        //   communityName: "Kimball Estates",
        //   communityCity: "Kimball, MI",
        //   communityAddress: "Address",
        //   communityType: "All Ages",
        //             communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
        //   communityURL: "kimballestates",
        //   communityID: "MI-3",
        // },
      ],
    },
    {
      state: "New York",
      usStateId: "newyork",
      stateAbbr: "NY",
      stateBgURL: NewYorkShape,
      communities: [
        {
          communityName: "Collins",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Plattsburgh, NY",
          communityAddress: "53 Mill Lane, Plattsburgh, NY",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "collins",
          communityID: "NY-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Underwood Estates",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Plattsburgh, NY",
          communityAddress: "53 Mill Lane, Plattsburgh, NY",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "underwoodestates",
          communityID: "NY-2",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
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
          communityName: "Cedar Grove",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Kernersville, NC",
          communityAddress: "209 Pegg Farm Lane, Kernersville, NC",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "cedargrove",
          communityID: "NC-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Colonial",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "New Bern, NC",
          communityAddress: "76 Morningstar Drive, New Bern, NC",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "colonial",
          communityID: "NC-2",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Lambeth",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Winston-Salem, NC",
          communityAddress: "4630 South Main Street, Winston-Salem, NC",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "lambeth",
          communityID: "NC-3",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Parkwood",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Winston-Salem, NC",
          communityAddress: "338 Barnes Road Lot 100, Winston-Salem, NC",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "parkwood",
          communityID: "NC-4",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Vandemere",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Greenville, NC",
          communityAddress: "474 Earl Road, Greenville, NC",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "vandemere",
          communityID: "NC-5",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
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
          communityName: "Apple Creek",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Bismarck, ND",
          communityAddress: "111 Albatross Drive, Bismarck, ND",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "applecreek",
          communityID: "ND-1",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Countryside",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Mandan, ND",
          communityAddress: "103 Countryside Lane, Mandan, ND",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "countryside",
          communityID: "ND-2",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
        {
          communityName: "Parktown",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Mandan, ND",
          communityAddress: "703 6th Ave SE, Mandan, ND",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "parktown",
          communityID: "ND-3",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
      ],
    },
    // {
    //   state: "Ohio",
    //   usStateId: "ohio",
    //   stateAbbr: "OH",
    //   stateBgURL: OhioShape,
    //   communities: [
    //     {
    //       communityName: "Northgate MHP",
    //       communityCity: "Mt Gilead, OH",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "northgate",
    //       communityID: "OH-1",
    //     },
    //   ],
    // },
    {
      state: "Oregon",
      usStateId: "oregon",
      stateAbbr: "OR",
      stateBgURL: OregonShape,
      communities: [
        {
          communityName: "Valley View",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Roseburg, OR",
          communityAddress: "200 Emils Way, Roseburg, OR",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "valleyview",
          communityID: "OR-1",
          rvClass: "card-rv-icon",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
        },
      ],
    },
    // {
    //   state: "Pennsylvania",
    //   usStateId: "pennsylvania",
    //   stateAbbr: "PA",
    //   stateBgURL: PennsylvaniaShape,
    //   communities: [
    //     {
    //       communityName: "Tracey Acres MHP",
    //       communityCity: "Erie, PA",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "traceyacres",
    //       communityID: "PA-1",
    //     },
    //     {
    //       communityName: "Tri-State MHP",
    //       communityCity: "Erie, PA",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "tristatemhp",
    //       communityID: "PA-2",
    //     },
    //   ],
    // },
    // {
    //   state: "Texas",
    //   usStateId: "texas",
    //   stateAbbr: "TX",
    //   stateBgURL: TexasShape,
    //   communities: [
    //     {
    //       communityName: "Knollwood Village",
    //       communityCity: "Knollwood, TX",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "knollwood",
    //       communityID: "TX-1",
    //     },
    //   ],
    // },
    // {
    //   state: "Washington",
    //   usStateId: "washington",
    //   stateAbbr: "WA",
    //   stateBgURL: WashingtonShape,
    //   communities: [
    //     {
    //       communityName: "University MHP",
    //       communityCity: "Spokane Valley, WA",
    //       communityAddress: "Address",
    //       communityType: "All Ages",
    //                 communityAmenities: ["amenity #1", "amenity #2", "amenity #3", "amenity #4", "amenity #5"],
    //       communityURL: "universitymhp",
    //       communityID: "WA-1",
    //     },
    //   ],
    // },
    {
      state: "West Virginia",
      usStateId: "westvirginia",
      stateAbbr: "WV",
      stateBgURL: WestVirginiaShape,
      communities: [
        {
          communityName: "Cambridge",
          communitySubtitle: "Manufactured Housing Community",
          communityCity: "Charles Town, WV",
          communityAddress: "11 Manchester Drive, Charles Town, WV",
          communityType: "All Ages",
          communityAmenities: [
            "amenity #1",
            "amenity #2",
            "amenity #3",
            "amenity #4",
            "amenity #5",
          ],
          communityURL: "cambridge",
          communityID: "WV-1",
          rvClass: "no-rv",
          communityPhone: "(999)-999-9999",
          communityImage1: SeashellsImageOne,
          communityImage2: SeashellsImageTwo,
          communityImage3: SeashellsImageThree,
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
