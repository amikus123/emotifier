import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Hidden } from "@material-ui/core";
import HeaderSearch from "./HeaderSearch";
import IconSections from "./IconSections";
import LogoImage from "../../elements/Logo/LogoImage";
import Logo from "../../elements/Logo/Logo";
import FeedTabs from "./FeedTabs";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      position: "relative",
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      margin: "0 0.5rem",
    },
    tablet: {
      display: "block",

      [theme.breakpoints.down("sm")]: {
        display: "none!important",
      },
      [theme.breakpoints.up("md")]: {
        display: "none!important",
      },
    },
    mobileAndDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
    },
    mobile: {
      [theme.breakpoints.up("md")]: {
        display: "none!important",
      },
    },
    desktop: {
      [theme.breakpoints.down("sm")]: {
        display: "none!important",
      },
    },

    first: {
      padding: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "nowrap",

      // flexGrow: 1,
      // maxWidth: "400px",
    },

    header: {
      height: "6.75rem",
      [theme.breakpoints.up("md")]: {
        height: "4rem",
      },
    },
    toolbar: {
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    topRow: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 0.5rem",
      height: "100%",
    },
  })
);

interface Props {
  mobileMenuId: string;
  handleMobileMenuClose: (arg0: any) => any;
  handleDrawerToggle: (arg0: any) => any;
  handleProfileMenuOpen: (arg0: any) => any;
  handleSearchMenu: (any) => any;
  handleMobileMenuOpen: (any) => any;
  menuId: string;
  openSearch: boolean;
}
const CustomAppbar = ({
  menuId,
  openSearch,
  mobileMenuId,
  handleDrawerToggle,
  handleProfileMenuOpen,
  handleSearchMenu,
  handleMobileMenuOpen,
}: Props) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.topRow}>
          <div className={classes.first}>
            <LogoImage
              size="md"
              className={`${classes.menuButton} ${classes.desktop}`}
            />
            <Logo
              className={`${classes.menuButton} ${classes.tablet}`}
              size="sm"
              image={false}
            />

            {/* {showSearch ? null : (
              <LogoImage
                size="md"
                className={`${classes.menuButton} ${classes.mobile}`}
              />
            )} */}

          

            <HeaderSearch
              text={text}
              setText={setText}
              handleSearchMenu={handleSearchMenu}
              openSearch={openSearch}
              className={classes.desktop}
            />

            {true ? (
              <HeaderSearch
                abs={true}
                text={text}
                setText={setText}
                handleSearchMenu={handleSearchMenu}
                openSearch={openSearch}
                className={classes.mobile}
              />
            ) : null}
          </div>

          {/* Feed component has to be displayed in diffrent place depending on screen width */}
          <FeedTabs mobile={false} className={classes.desktop} />
          <IconSections
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            handleMobileMenuOpen={handleMobileMenuOpen}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </div>
        <FeedTabs mobile={true} className={classes.mobile} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
