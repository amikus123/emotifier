import {
  IconButton,
  Badge,
  MenuItem,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
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
    button: {
      padding: "0",
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
      display: "flex",
      marginRight: "1rem",
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
        <Hidden mdUp>
          <UserProfile text={false} className={classes.button} />
        </Hidden>
        <Hidden smDown>
          <UserProfile text={true} className={classes.button} />
        </Hidden>
      </div>
    </>
  );
};

export default IconSections;
