import { createStyles, makeStyles, Theme, Hidden } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
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
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className={classes.root}>
      <UserProfile
        src={user.profilePic}
        className={` showMobile`}
        onClick={handleDrawerToggle}
      />
      <UserProfile
        src={user.profilePic}
        text={user.username}
        className={`hideMobile`}
        onClick={handleDrawerToggle}
      />
    </div>
  );
};

export default IconSections;
