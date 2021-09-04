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

      first:{
        padding: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap:"none",
        flexGrow:1,
        maxWidth:"400px",
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
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.topRow}>
          {/* Different logo component is showed based on screen width */}
          <div className={classes.first}>
            <Hidden smDown>
              <LogoImage size="md" className={classes.menuButton} />
            </Hidden>
            <Hidden mdUp>
              <Logo className={classes.menuButton} size="sm" image={false} />
            </Hidden>

            <HeaderSearch
              handleSearchMenu={handleSearchMenu}
              openSearch={openSearch}
            />
          </div>

          {/* Feed component has to be displayed in diffrent place depending on screen width */}
          <Hidden smDown>
            <FeedTabs mobile={false} />
          </Hidden>
          <IconSections
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            handleMobileMenuOpen={handleMobileMenuOpen}
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </div>
        <Hidden mdUp>
          <FeedTabs mobile={true} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppbar;
