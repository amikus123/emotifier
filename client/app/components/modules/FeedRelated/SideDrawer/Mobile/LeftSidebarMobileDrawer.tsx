import React from "react";
import Drawer from "@material-ui/core/Drawer";


import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import SideDrawerMobileContent from "./LeftSidebarMobileContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },

  })
);

interface Props {}

const LeftSidebarMobileDrawer = ({}: Props) => {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${classes.drawerClose}`}
        classes={{
          paper: `${classes.drawer} ${classes.drawerClose}`,
        }}
      >
        <SideDrawerMobileContent />
      </Drawer>
    </nav>
  );
};

export default LeftSidebarMobileDrawer;
