import React from "react";
import EmojiInput from "../../../elements/Inputs/EmojiInput/EmojiInput";
import SelfClosingEmojiInput from "../../../elements/Inputs/EmojiInput/SelfClosingEmojiInput";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

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

    showInput: {
      width: "55vw",
      maxWidth: "320px",
    },
  })
);
interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
const HeaderSearchController = ({ text, setText }: Props) => {
  const classes = useStyles();

  return (
    <>
      <SelfClosingEmojiInput
        text={text}
        setText={setText}
        label="Search"
        className={`showMobile ${classes.search}`}
      />
      <EmojiInput
        text={text}
        setText={setText}
        abs={true}
        label="Search"
        suggsestions={true}
        className={`${classes.showInput} ${classes.search} hideMobile`}
        outlined={false}
      />
    </>
  );
};

export default HeaderSearchController;
