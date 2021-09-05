import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
  IconButton,
} from "@material-ui/core";
import EmojiInput from "../../elements/Inputs/EmojiInput/EmojiInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      position: "relative",
      flexGrow: 1,
      zIndex: theme.zIndex.drawer + 1,
    },

    search: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,

      transition: "all 0.5s",
      flexGrow: 1,

      maxWidth: "320px",
      // width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
      },

      backgroundColor: alpha(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
      },
    },
    mobile: {
      [theme.breakpoints.up("sm")]: {
        display: "none!important",
      },
    },
    tablet: {
      display: "none",

      [theme.breakpoints.up("sm")]: {
        display: "block!important",
      },
    },
    inputClosed: {
      width: "25%!important",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    aboslute: {
      position: "absolute",
      left: "3.5rem",
      display: "flex",
    },
    abosluteButton: {
      width: "2rem",
      height: "2rem",
      padding: "0",
      // backgroundColor: theme.palette.common.white,
      [theme.breakpoints.up("sm")]: {
        width: "3.5rem",
        height: "3.5rem",
      },
    },
    openButton: {},

    absoluteOpen: {
      width: "60vw",
      left: "0.25rem",
      [theme.breakpoints.up("sm")]: {
        left: "-1rem",
      },
    },
    child: {
      width: "100%",
    },
  })
);
interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  abs?: boolean;
  className?: string;
}
const HeaderSearch = ({
  text,
  setText,
  abs = false,
  className = "",
}: Props) => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(false);

  // add button to show it on mobile
  return (
    <div
      className={
        abs
          ? `${classes.search} ${className} ${classes.aboslute} ${
              showSearch ? classes.absoluteOpen : ""
            } `
          : `${classes.search}   ${className}`
      }
    >
      {abs ? (
        <IconButton
          aria-label="delete"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className={`${classes.abosluteButton} ${
            showSearch ? classes.openButton : ""
          }`}
        >
          <SearchIcon />
        </IconButton>
      ) : null}

      {abs ? (
        showSearch ? (
          <>
            <EmojiInput
              text={text}
              setText={setText}
              abs={true}
              label="Search"
              suggsestions={true}
              className={`${classes.child} ${classes.mobile}`}
              extraWidth="2rem"
            />
            <EmojiInput
              text={text}
              setText={setText}
              abs={true}
              label="Search"
              suggsestions={true}
              className={`${classes.child} ${classes.tablet}`}
              extraWidth="3.5rem"
            />
          </>
        ) : null
      ) : (
        <EmojiInput
          text={text}
          setText={setText}
          abs={true}
          label="Search"
          suggsestions={true}
          className={classes.child}
        />
      )}
    </div>
  );
};

export default HeaderSearch;
