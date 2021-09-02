import React from "react";
import Image from "next/image";

import LandingBackground from "../../../../public/landingBackground.jpg";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  useTheme,
} from "@material-ui/core";
import RegisterGroup from "../../modules/RegisterGroup/RegisterGroup";
const LandingPage = () => {
  const theme = useTheme();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column-reverse",
          justifyContent: "center",
        },
        flexWrap: "nowrap",
        height: "100vh",
        maxHeight: "1500px",
      },
      imageContainer: {
        height: "100%",
        minWidth: "45vw",
        position: "relative",
        display: "flex",
        flexGrow: 1,
        [theme.breakpoints.down("sm")]: {
          minWidth: "100vw",
          display:"none"
        },
      },
      registerContainer: {
        width:"45vw",
        minWidth: "33rem",
        display:"flex",
        justifyContent:"center",
        [theme.breakpoints.down("sm")]: {
          minWidth: "1px",
          width: "100%",
        },
      },
  
    })
  );

  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid className={classes.imageContainer}>
        <Image src={LandingBackground} layout="fill" alt="emoji background" />
      </Grid>
      <Grid className={classes.registerContainer}>
        <RegisterGroup  />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
