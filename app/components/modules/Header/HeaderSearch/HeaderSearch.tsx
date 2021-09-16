import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
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
      marginTop:"4px",

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
