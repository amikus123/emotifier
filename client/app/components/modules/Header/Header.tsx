import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MobileHeaderMenu from "./MobileHeaderMenu";
import DesktopHeaderMenu from "./DesktopHeaderMenu";
import { Hidden } from "@material-ui/core";
import CustomAppbar from "./CustonAppbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      position: "relative",
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);
interface Props {
  handleDrawerToggle: () => void;
}

export default function Header({ handleDrawerToggle }: Props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openSearch, setOpenSearch] = useState(true);
  const handleSearchMenu = () => {
    setOpenSearch(!openSearch);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <CustomAppbar
        handleSearchMenu={handleSearchMenu}
        openSearch={openSearch}
        mobileMenuId={mobileMenuId}
        menuId={menuId}
        handleMobileMenuClose={handleMobileMenuClose}
        handleDrawerToggle={handleDrawerToggle}
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />

      <Hidden mdUp>
        <MobileHeaderMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleDrawerToggle={handleDrawerToggle}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
      </Hidden>
      
      <Hidden mdDown>
        <DesktopHeaderMenu
          anchorEl={anchorEl}
          menuId={menuId}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
        />
      </Hidden>
    </div>
  );
}
