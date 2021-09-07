import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  createStyles,
  makeStyles,
  Theme,
  OutlinedInput,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useHeaderOutsideClick } from "../../../../hooks/header";
import { allowEmojisAndDeleting } from "../../../../utils/forms/emojiInputs";
import { capitalize } from "../../../../utils/general/stringManipulation";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";
import PureEmojiInput from "../EmojiPicker/EmojiPicker";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    input: {
      background: theme.palette.common.white,
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
  abs?: boolean;
  children?: Element | null;
  suggsestions?: boolean;
  className?: string;
  // dosent hide the emoji picker if
  // clicked element has this class
  outlined?: boolean;
}

const EmojiInput = ({
  setText,
  text,
  label,
  abs = false,
  children = null,
  suggsestions = false,
  outlined = false,
  className = "",
}: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const container = useRef(null);
  // TODO ADD AUTO FOCUS ON INPUT
  useEffect(() => {
    if (container.current) {
      console.log("fiered");
      setShowEmojiPicker(true);
      // dosnet workd :(
      container.current.focus();
    }
  }, []);

  const classes = useStyles();

  useHeaderOutsideClick(container, setShowEmojiPicker,showEmojiPicker);

  return (
    <Grid
      item
      ref={container}
      onFocus={() => {
        setShowEmojiPicker(true);
      }}
      className={`${classes.root} ${className}`}
    >
      {children === null ? (
        <FormControl variant="filled" fullWidth={true}>
          {label !== "" ? (
            <InputLabel htmlFor="filled-adornment-password">
              {capitalize(label)}
            </InputLabel>
          ) : null}
          {outlined ? (
            <OutlinedInput
              fullWidth={true}
              inputProps={{ autoComplete: "off" }}
              name={label}
              type="text"
              value={text}
              onChange={allowEmojisAndDeleting(setText)}
              classes={{
                root: classes.input,
                focused: classes.focused,
              }}
            />
          ) : (
            <FilledInput
              fullWidth={true}
              inputProps={{ autoComplete: "off" }}
              name={label}
              type="text"
              value={text}
              onChange={allowEmojisAndDeleting(setText)}
            />
          )}
        </FormControl>
      ) : (
        children
      )}

      {showEmojiPicker ? (
        <PureEmojiInput text={text} setText={setText} abs={abs} />
      ) : null}

      {suggsestions && showEmojiPicker ? <HeaderOptions text={text} /> : null}
    </Grid>
  );
};

export default EmojiInput;
