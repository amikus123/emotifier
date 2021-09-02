import React from "react";
import SideDrawer from "../../modules/FeedRelated/SideDrawer/LeftSidebar";
import SideFriends from "../../modules/FeedRelated/RightSidebar/RightSidebar";
import Footer from "../../modules/Footer/Footer";
import Header from "../../modules/Header/Header";

const Feed = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <Header
        handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}
      />
      <SideDrawer
        handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}
        mobileOpen={mobileOpen}
      />
      <SideFriends  handleDrawerToggle={() => {
          setMobileOpen(!mobileOpen);
        }}
        mobileOpen={mobileOpen} />
  
      <Footer />
    </>
  );
};

export default Feed;
