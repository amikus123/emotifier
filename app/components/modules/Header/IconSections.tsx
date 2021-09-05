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

interface Props {}

const IconSections = ({}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UserProfile className={`${classes.button} showMobile`} />
      <UserProfile text="pog" className={`${classes.button} hideMobile`} />
    </div>
  );
};

export default IconSections;
