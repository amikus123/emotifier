import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  InputAdornment,
  capitalize,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { allowEmojisAndDeleting } from "../../../../utils/forms/emojiInputs";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";
import PureEmojiInput from "../EmojiPicker/EmojiPicker";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useHeaderOutsideClick from "../../../../hooks/header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderRadius: theme.shape.borderRadius,

    },
    input: {
      borderRadius: theme.shape.borderRadius,
      background: theme.palette.common.white,
      "&:focus": {
        "& >  .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.common.black}!important`,
          display: "none",
        },
      },
    },
    button: {
      cursor: "pointer",
      margin: "0!important",
    },

    closeButton: {
      color: theme.palette.primary.main,
      
    },

    fullWidth: {
      width: "60vw",
    },
    short: {
      width: "52px",
    },
    focused: {
      "& >  .MuiOutlinedInput-notchedOutline": {
        borderColor: `${theme.palette.common.black}!important`,
      },
    },
  })
);

interface Props {
  setText: (e: string) => void;
  text: string;
  label: string;
  className?: string;
}

const SelfClosingEmojiInput = ({
  setText,
  text,
  label,
  className = "",
}: Props) => {
  const container = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const ignoredClass = "header_sadge";
  // TODO ADD AUTO FOCUS ON INPUT

  const classes = useStyles();
  useHeaderOutsideClick(
    container,
    setShowEmojiPicker,
    showEmojiPicker,
    ignoredClass
  );
  const toggleSearch = (e) => {
    console.log("CLICIKDE BUTTON");
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <Grid
      item
      ref={container}
      onFocus={() => {
        setShowEmojiPicker(true);
      }}
      className={`${classes.root} ${className}`}
    >
      <TextField
        fullWidth={true}
        inputProps={{
          autoComplete: "off",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              onClick={toggleSearch}
              className={`${ignoredClass} ${classes.button} `}
            >
              {showEmojiPicker ? (
                <CloseIcon
                  className={`${ignoredClass} ${classes.closeButton} `}
                />
              ) : (
                <SearchIcon
                  className={`${ignoredClass} ${classes.closeButton}`}
                />
              )}
            </InputAdornment>
          ),
        }}
        name={label}
        type="text"
        value={text}
        color="secondary"
        label=""
        onChange={() => {
          allowEmojisAndDeleting(setText);
        }}
        classes={{
          root: `${classes.input} ${
            showEmojiPicker ? classes.fullWidth : classes.short
          }`,
          // focused: classes.focused,
        }}
        variant="outlined"
      />

      {showEmojiPicker ? (
        <>
          <PureEmojiInput text={text} setText={setText} abs={true} />
          <HeaderOptions text={text} />
        </>
      ) : null}
    </Grid>
  );
};

export default SelfClosingEmojiInput;

{
  /* <OutlinedInput
          fullWidth={true}
          onChange={allowEmojisAndDeleting(setText)}
          classes={{
            root: `${classes.input} ${
              showEmojiPicker ? classes.fullWidth : classes.short
            }`,
            focused: classes.focused,
          }}
          color="secondary"
       
        /> */
}
