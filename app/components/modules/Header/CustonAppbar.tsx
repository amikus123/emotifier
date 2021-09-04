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
        marginRight: theme.spacing(2),
      },
      header: {
        height: "6.75rem",
        [theme.breakpoints.up("sm")]: {
          height: "3.75rem",
        },
      },
      toolbar: {
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      },
      topRow: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0 0.5rem",
      },
    })
  );
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.topRow}>
          {/* Different logo component is showed based on screen width */}
          <Hidden smDown>
            <LogoImage size="md" className={classes.menuButton} round={true} />
          </Hidden>
          <Hidden mdUp>
            <Logo className={classes.menuButton} size="sm" image={false}/>
          </Hidden>

          <HeaderSearch
            handleSearchMenu={handleSearchMenu}
            openSearch={openSearch}
          />
          {/* Feed component has to be displayed in diffrent place depending on screen width */}
          <Hidden smDown>
            <FeedTabs  mobile={false} />
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
