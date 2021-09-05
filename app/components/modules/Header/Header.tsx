import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconSections from "./IconSections";
import LogoImage from "../../elements/Logo/LogoImage";
import HeaderTabs from "./HeaderTabs/HeaderTabs";
import HeaderSearchController from "./HeaderSearch/HeaderSearchController";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      margin: "0 0.5rem",
    },

    first: {
      padding: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      flexGrow: 1,
      maxWidth: "400px",
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
    wrapper: {
      position: "relative",
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

interface Props {
  setTabNumber: React.Dispatch<React.SetStateAction<number>>;
  handleDrawerToggle: () => void;
}
const Header = ({ setTabNumber, handleDrawerToggle }: Props) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <div className={classes.wrapper}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.topRow}>
            <div className={classes.first}>
              <LogoImage
                size="md"
                className={`${classes.menuButton} hideMobile `}
              />
              <HeaderSearchController text={text} setText={setText} />
            </div>
            {/* Feed component has to be displayed in 
            diffrent place depending on screen width */}
            <HeaderTabs
              mobile={false}
              className="showDesktop"
              setTabNumber={setTabNumber}
            />
            <IconSections handleDrawerToggle={handleDrawerToggle} />
          </div>
          <HeaderTabs
            mobile={true}
            className="hideDesktop"
            setTabNumber={setTabNumber}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
