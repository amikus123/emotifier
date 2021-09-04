import {Avatar, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Link from "next/link";
interface Props {
  link?: boolean;
  className?:string;
  size?:"lg" | "md" | "sm" | "inherit"
  round?:boolean,
  withText?:boolean
}
const fontSize = {
  lg:"4.5rem",
  md:"2.25rem",
  sm:"1.5rem",
  inherit:"inherit"
}
const LogoImage = ({ link = false,className="",size="lg",withText=false,round=false}: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
  // deafault
    createStyles({
      div: {
        width: `1em`,
        height: `1em`,
        position: "relative",
        display: "inline-block",
        marginLeft: "0.25rem",
        marginTop: withText?`calc(-1em /3)`:`0`,
        fontSize: fontSize[size],
      },
      round:{
        borderRadius:"50%",
        backgroundColor:"white",
      }
    })
  );

  const classes = useStyles();

  return (
    <>
      {link ? (
        <Avatar 
          alt="Rainbow"
          src="./rainbowLogo.png"
          variant="square"
          className={`${classes.div} ${className} ${round? classes.round:""}`}
        />
      ) : (
        <Link href="#" passHref>
          <Avatar
            alt="Rainbow"
            src="./rainbowLogo.png"
            variant="square"
            className={`${classes.div} ${className} ${round? classes.round:""}`}
            />
        </Link>
      )}
    </>
  );
};

export default LogoImage;
