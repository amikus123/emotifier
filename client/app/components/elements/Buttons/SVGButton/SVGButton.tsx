import { IconButton, createStyles, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
import React from "react";

const SVGButton = ({
  svg,
  onClick,
  brandName,
}: {
  svg: any;
  onClick: () => void;
  brandName: string;
}) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        margin: theme.spacing(1),
        borderRadius: "50%",
        padding: "0.5rem",
      },
    })
  );
  const classes = useStyles();

  return (
    <IconButton
      aria-label={`Logijn with ${brandName}`}
      className={classes.root}
      onClick={onClick}
    >
      <Image src={svg} height={50} width={50} alt={`${brandName} logo`} />
    </IconButton>
  );
};

export default SVGButton;
