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
      // marginRight:"0!important",

      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
      },
      transition: "all 2s",

      maxWidth: "320px",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
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
      width:"60vw",
      left:"32px"
    },
  })
);
interface Props {
  openSearch: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  abs?: boolean;
  handleSearchMenu: (arg0: any) => any;
  className?: string;
}
const HeaderSearch = ({
  openSearch,
  handleSearchMenu,
  text,
  setText,
  abs = false,
  className = "",
}: Props) => {
  const classes = useStyles();
  const [showSearch, setShowSearch] = useState(true);

  // add button to show it on mobile
  return (
    <div
      className={
        abs
          ? `${classes.search} ${className} ${classes.aboslute}`
          : `${classes.search}   ${className}`
      }
    >
      {abs?(  <IconButton
              aria-label="delete"
              onClick={() => {
                setShowSearch(!showSearch);
              }}
              className={classes.mobile}
            >
              <SearchIcon />
            </IconButton>):(
        null
      )
      }
      <EmojiInput
        text={text}
        setText={setText}
        abs={true}
        label="Search"
        suggsestions={true}
      />
    </div>
  );
};

export default HeaderSearch;
