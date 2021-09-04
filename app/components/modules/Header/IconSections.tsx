import {
  IconButton,
  Badge,
  MenuItem,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import UserProfile from "../../elements/UserProfile/UserProfile";


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

    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

interface Props {
  menuId: string;
  mobileMenuId: string;
  handleMobileMenuOpen: (arg0: any) => any;
  handleProfileMenuOpen: (arg0: any) => any;
  handleDrawerToggle: (arg0: any) => any;
}

const IconSections = ({
  menuId,
  mobileMenuId,
  handleMobileMenuOpen,
  handleProfileMenuOpen,
  handleDrawerToggle,
}: Props) => {
  const classes = useStyles();

  /* ikonmy na srodku ala fb */

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        {/* user profile  */}
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={69} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <UserProfile/>
      </div>

      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
        <MenuItem>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </MenuItem>
        <UserProfile/>

      </div>
    </>
  );
};

export default IconSections;
