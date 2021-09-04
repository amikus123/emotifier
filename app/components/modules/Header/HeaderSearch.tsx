import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  makeStyles,
  Theme,
  createStyles,
  alpha,
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
        backgroundColor: alpha(theme.palette.common.white,0.9),
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
    inputRoot: {
      color: "inherit",
      transition: "2s all",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      // transition: theme.transitions.create("width"),
      transition: "2s all",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);
interface Props {
  openSearch: boolean;
  handleSearchMenu: (arg0: any) => any;
}
const HeaderSearch = ({ openSearch, handleSearchMenu }: Props) => {
  const classes = useStyles();
  const [text,setText] = useState("")
  // add button to show it on mobile
  return (
    <>
      <div
        className={
          openSearch
            ? classes.search
            : `${classes.search}  ${classes.inputClosed}`
        }
      >

        <EmojiInput text={text} setText={setText} abs={true} label="Search" suggsestions={true}/>
      </div>

      <div className={classes.grow} />
    </>
  );
};

export default HeaderSearch;
