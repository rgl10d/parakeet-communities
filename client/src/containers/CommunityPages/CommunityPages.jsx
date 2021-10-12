import React, { useContext, useEffect, useState } from "react";
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
  }, []);

  return (
    <>
      <Navbar />
      <p>{currentCommunity.communityName}</p>
      <p>{currentCommunity.communityCity}</p>
      <p>{currentCommunity.communityAddress}</p>
      <Footer />
    </>
  );
};

export default CommunityPages;
