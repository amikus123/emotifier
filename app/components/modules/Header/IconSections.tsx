import { createStyles, makeStyles, Theme, Hidden } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
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
  const user = useSelector((state:RootState) => state.user.username)
  return (
    <div className={classes.root}>
      <p>{user}</p>
      <UserProfile className={`${classes.button} showMobile`} onClick={handleDrawerToggle}/>
      <UserProfile text="pog" className={`${classes.button} hideMobile`} onClick={handleDrawerToggle}/>
    </div>
  );
};

export default IconSections;
