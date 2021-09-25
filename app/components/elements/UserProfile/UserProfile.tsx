import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { IconButton, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
      "& >*": {
        padding: "0",
      },
    },
    img: {
      width: "3rem",
      height: "3rem",
    },
    name: {
      marginRight: "0.5rem",
    },
  })
);
interface Props {
  showName?: boolean;
  className?: string;
  onClick?: (arg: any) => any;
}
const UserProfile = ({
  showName = true,
  className = "",
  onClick = () => {},
}: Props) => {
  const classes = useStyles();
  // gets user data from global store
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={`${classes.root} ${className}`} onClick={onClick}>
      {showName ? (
        user.username === "" ? (
          <Skeleton
            variant="text"
            animation="wave"
            height={24}
            width={56}
            className={classes.name}
          />
        ) : (
          <Typography className={classes.name}>{user.username}</Typography>
        )
      ) : null}

      <IconButton>
        {user.profilePic !== "" ? (
          <Avatar
            alt="Remy Sharp"
            src={user.profilePic}
            className={classes.img}
            variant="square"
          />
        ) : (
          <Skeleton variant="rect" animation="wave" width={48} height={48} />
        )}
      </IconButton>
    </div>
    // </Link>
  );
};

export default UserProfile;
