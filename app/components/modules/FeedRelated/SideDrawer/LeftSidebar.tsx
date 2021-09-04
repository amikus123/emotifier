import React from "react";

import Hidden from "@material-ui/core/Hidden";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import LeftSidebarDesktopDrawer from "./Desktop/LeftSidebarDesktopDrawer";
import LeftSidebarMobileDrawer from "./Mobile/LeftSidebarMobileDrawer";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export default function LeftSidebar({ mobileOpen, handleDrawerToggle }: Props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Hidden smDown>
        <LeftSidebarDesktopDrawer />
      </Hidden>
      <Hidden mdUp>
        <LeftSidebarMobileDrawer />
      </Hidden>
    </>
  );
}
