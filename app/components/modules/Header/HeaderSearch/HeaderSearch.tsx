import React, { useRef, useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
  IconButton,
} from "@material-ui/core";
import EmojiInput from "../../../elements/Inputs/EmojiInput/EmojiInput";
import SelfClosingEmojiInput from "../../../elements/Inputs/EmojiInput/SelfClosingEmojiInput";

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

      [theme.breakpoints.up("sm")]: {
        width: "3.5rem",
        height: "3.5rem",
      },
    },
    showInput: {
      width: "55vw",
      maxWidth: "320px",
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
  // const [counter, setCounter] = useState(1);
  return (
    <div
      className={`${classes.search}   ${className}`}
    >
      <SelfClosingEmojiInput
        text={text}
        setText={setText}
        label="Search"
        className={`showMobile`}
      />

      <EmojiInput
        text={text}
        setText={setText}
        abs={true}
        label="Search"
        suggsestions={true}
        className={`${classes.showInput} hideMobile`}
        outlined={true}
      />
    </div>
  );
};

export default HeaderSearch;
