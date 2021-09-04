import { Typography, createStyles, makeStyles, Theme } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import rainbowLogo from "../../../../public/rainbowLogo.png";
import LogoImage from "./LogoImage";

interface Props {
  className?: string;
  round?: boolean;
  size?: "lg" | "md" | "sm";
  image?:boolean;
}

const fontSize = {
  lg: "4.5rem",
  md: "2.25rem",
  sm: "1.5rem",
  inherit: "inherit",
};
const Logo = ({ className = "", size = "lg", round = false,image=true }: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      text: {
        fontSize: "inherit",
        fontFamily: "Expletus Sans",
        position: "relative",
        width: "fit-content",
        display: "flex",
        cursor: "pointer",
      },
      container: {
        fontSize: fontSize[size],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
    })
  );

  const classes = useStyles();

  return (
    <Link href="#" passHref>
      <div className={`${classes.container} ${className}`}>
        <Typography className={`${classes.text} `}>Emojifier </Typography>
        {
          image?(
            <LogoImage size="inherit" withText={true} round={round} />
          ):null
        }
      </div>
    </Link>
  );
};

export default Logo;
