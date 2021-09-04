import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import facebookLogo from "../../../../public/facebookLogo.svg";
import { SvgIcon, IconButton, Button } from "@material-ui/core";
import Link from "next/link";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: "flex", flexDirection: "row", alignItems: "center","&:hover":{
      cursor:"pointer"
    } },
    img: {},
  })
);

const UserProfile = () => {
  const classes = useStyles();

  return (
    <Link href="/user" passHref>
      <div className={classes.root}>
        <IconButton>
          <Avatar alt="Remy Sharp" src={facebookLogo.src} />
        </IconButton>
        <p>Amadeusz</p>
      </div>
    </Link>
  );
};

export default UserProfile;
