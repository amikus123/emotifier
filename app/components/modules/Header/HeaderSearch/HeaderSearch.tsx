import React, { useRef, useState } from "react";
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
      maxWidth: "320px",
      width: "min-content",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
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
      marginRight: "0.5rem",
      backgroundColor: alpha(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 1),
      },
      [theme.breakpoints.up("sm")]: {
        width: "3.5rem",
        height: "3.5rem",
      },
    },
    showInput: {
      width: "55vw",
      maxWidth: "320px",
      backgroundColor: alpha(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
      },
    },
    hideInput: {
      width: "0vw!important",
      overflow: "hidden",
    },
  })
);
interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}
const HeaderSearch = ({ text, setText, className = "" }: Props) => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(false);
  // const [counter, setCounter] = useState(1);
  const ignoredClass = "header";
  return (
    <div
      className={`${classes.search}   ${className} ${ignoredClass} ${
        showSearch ? "" : ""
      }`}
    >
      <IconButton
        aria-label="show search"
        onClick={(e) => {
          setShowSearch(!showSearch);
          // can be removed
          // setCounter(counter + 1);
        }}
        className={`${classes.abosluteButton} showMobile ${ignoredClass}`}
      >
        <SearchIcon className={ignoredClass} />
      </IconButton>
      <EmojiInput
        text={text}
        setText={setText}
        abs={true}
        label="Search"
        suggsestions={true}
        className={`${
          showSearch ? classes.showInput : classes.hideInput
        } showMobile`}
        ignoredClass={ignoredClass}
      />

      <EmojiInput
        text={text}
        setText={setText}
        abs={true}
        label="Search"
        suggsestions={true}
        className={`${classes.showInput} hideMobile`}
        ignoredClass={ignoredClass}
      />
    </div>
  );
};

export default HeaderSearch;
