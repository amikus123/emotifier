import React from "react";
import Drawer from "@material-ui/core/Drawer";


import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import SideDrawerDesktopContent from "./LeftSidebarDesktopContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
    },
     drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    }
)
)
interface Props {}

const LeftSidebarDesktopDrawer = ({}: Props) => {
  const classes = useStyles();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        <SideDrawerDesktopContent />
      </Drawer>
    </nav>
  );
};

export default LeftSidebarDesktopDrawer;
