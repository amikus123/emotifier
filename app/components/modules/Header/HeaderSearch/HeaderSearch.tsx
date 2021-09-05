import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
  IconButton,
} from "@material-ui/core";
import EmojiInput from "../../../elements/Inputs/EmojiInput/EmojiInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,
      transition: "all 0.5s",
      flexGrow: 1,
      maxWidth: "320px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
      },

      backgroundColor: alpha(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
      },
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
        <IconButton
          aria-label="delete"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className={`${classes.abosluteButton} showMobile ${
            showSearch ? classes.openButton : ""
          }`}
        >
          <SearchIcon />
        </IconButton>
     
       { showSearch ? (
          <>
            <EmojiInput
              text={text}
              setText={setText}
              abs={true}
              label="Search"
              suggsestions={true}
              className={`${classes.child} showMobile`}
              extraWidth="0"
            />
            <EmojiInput
              text={text}
              setText={setText}
              abs={true}
              label="Search"
              suggsestions={true}
              className={`${classes.child} showTablet`}
              extraWidth="3.5rem"
            />
          </>
        ) : null}
         <EmojiInput
              text={text}
              setText={setText}
              abs={true}
              label="Search"
              suggsestions={true}
              className={`${classes.child} showDesktop`}
              extraWidth="3.5rem"
            />
      
    </div>
  );
};

export default HeaderSearch;
