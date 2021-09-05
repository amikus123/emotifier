import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import facebookLogo from "../../../../public/facebookLogo.svg";
import { IconButton, Typography } from "@material-ui/core";
import Link from "next/link";
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
      width: "2rem",
      height: "2rem",
    },
    name:{
      marginLeft:"0.5rem",
    }
  })
);
interface Props {
  text?: string;
  className?: string;
  onClick?:(arg:any)=>any
}
const UserProfile = ({ text = "", className = "",onClick =()=>{}}: Props) => {
  const classes = useStyles();

  return (
    // <Link href="/user" passHref>
      <div className={`${classes.root} ${className}`} onClick={onClick}>
        <IconButton>
          <Avatar
            alt="Remy Sharp"
            src={facebookLogo.src}
            className={classes.img}
          />
        </IconButton>
        {text !== "" ? <Typography className={classes.name}>{text}</Typography> : null}
      </div>
    // </Link>
  );
};

export default UserProfile;
