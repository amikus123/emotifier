import React, { useState } from "react";
import SideDrawer from "../../modules/FeedRelated/SideDrawer/LeftSidebar";
import SideFriends from "../../modules/FeedRelated/RightSidebar/RightSidebar";
import Footer from "../../modules/Footer/Footer";
import Header from "../../modules/Header/Header";
import Home from "./Home/Home";
import Messages from "./Messages/Messages";
import Favorites from "./Favorites/Favorites";
import Notifications from "./Notifications/Notifications";
import Settings from "./Settings/Settings";

import FeedContentWrapper from "./FeedContentWrapper/FeedContentWrapper";

const Feed = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabNumber, setTabNumber] = useState(0);
  const listOfFeeds = [
    <Home key={0} />,
    <Favorites key={1} />,
    <Messages key={2} />,
    <Notifications key={3} />,
    <Settings key={4} />,
  ];
  return (
    <>
      <Header setTabNumber={setTabNumber}    handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}/>
      {/* <SideDrawer
        handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}
        mobileOpen={mobileOpen}
      /> */}
      <FeedContentWrapper>{listOfFeeds[tabNumber]}</FeedContentWrapper>
      <SideFriends
        handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}
        mobileOpen={mobileOpen}
      />

      <Footer />
    </>
  );
};

export default Feed;
