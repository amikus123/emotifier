import {
  Typography,
  Grid,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";
import Logo from "../../elements/Logo/Logo";
import ModalButton from "../../elements/Buttons/ModalButton/ModalButton";

const RegisterGroup = ({ className = "" }: { className?: string }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: "25rem",
        [theme.breakpoints.down("xs")]: {
          maxHeight: "100vh",
        },
      },
      logo: {
        margin: "1rem 0",
        fontSize: "4.5rem",
        [theme.breakpoints.down("xs")]: {
          fontSize: "3.5rem!important",
        },
      },

      innerWrap: {
        maxWidth: "22rem",
        width: "90vw",

        [theme.breakpoints.down("sm")]: {
          margin: "0 auto!important",
        },
      },

      motto: {
        fontSize: "1.176rem",
        lineHeight: "2rem",
        marginBottom: "2.5rem",
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.5rem!important",
          textAlign: "center",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.25rem!important",
        },
      },

      buttonsWrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginBottom: "1.5rem",
        "&> *": {
          marginBottom: "1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: "0rem",
        },
      },
      agreement: {
        fontSize: "0.8125rem",
        lineHeight: "1rem",
        marginBottom: "1.5rem",
        [theme.breakpoints.down("xs")]: {},
      },
      logged: {
        fontSize: "1rem",
        lineHeight: "1rem",
        marginBottom: "1.5rem",
        [theme.breakpoints.down("xs")]: {},
      },
    })
  );
  const classes = useStyles();

  return (
    <Grid className={`${classes.root} ${className}`}>
      <Logo className={classes.logo} />
      <Typography className={classes.motto}>
        Express yourself without words
      </Typography>
      <Grid className={classes.innerWrap}>
        <Grid className={classes.buttonsWrap}>
          <ModalButton type="google" />
          <ModalButton type="facebook" />
          <ModalButton type="email" />
        </Grid>

        <Typography className={classes.agreement}>
          By signing up, you agree to the
          <Link href="/tos">
            <a> Terms of Service </a>
          </Link>
          and
          <Link href="/privacy">
            <a> Privacy Policy </a>
          </Link>
          , including
          <Link href="/cookies">
            <a> Cookie Use </a>
          </Link>
          .
        </Typography>

        <Typography className={classes.logged}>
          Already have an account?&nbsp;
          <ModalButton type="login"/>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RegisterGroup;
