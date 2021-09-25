import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import UserProfile from "../../elements/UserProfile/UserProfile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginRight: "1rem",
    },
  })
);

interface Props {
  handleDrawerToggle: () => void;
}

const IconSections = ({ handleDrawerToggle }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UserProfile
        className={` showMobile`}
        onClick={handleDrawerToggle}
      showName={false}
      />
      <UserProfile
        className={`hideMobile`}
        onClick={handleDrawerToggle}
      />
    </div>
  );
};

export default IconSections;
