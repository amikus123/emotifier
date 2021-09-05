import { createStyles, makeStyles, Theme, Hidden } from "@material-ui/core";
import React from "react";
import UserProfile from "../../elements/UserProfile/UserProfile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: "0",
    },
    root: {
      display: "flex",
      marginRight: "1rem",
    },
  })
);

interface Props {handleDrawerToggle: ()=>void}

const IconSections = ({handleDrawerToggle}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UserProfile className={`${classes.button} showMobile`} onClick={handleDrawerToggle}/>
      <UserProfile text="pog" className={`${classes.button} hideMobile`} onClick={handleDrawerToggle}/>
    </div>
  );
};

export default IconSections;
