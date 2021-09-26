import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  TextField,
} from "@material-ui/core";
import React, { useRef, useState } from "react";
import useHeaderOutsideClick from "../../../../hooks/header";
import { allowEmojisAndDeleting } from "../../../../utils/forms/emojiInputs";
import { capitalize } from "../../../../utils/general/stringManipulation";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";
import PureEmojiInput from "../EmojiPicker/EmojiPicker";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width:"100%",
      borderRadius: theme.shape.borderRadius,
    },
    input: {
      background: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      
    },
  })
);

interface Props {
  setText: (e: string) => void;
  text: string;
  label?: string;
  abs?: boolean;
  size?: "medium" | "small";
  suggsestions?: boolean;
  className?: string;
  outlined?: boolean;
  errorText?: string;
  helperText?: string;
  resetErrorText?: () => void;
}

const EmojiInput = ({
  setText,
  text,
  label = "",
  abs = false,
  suggsestions = false,
  outlined = false,
  className = "",
  errorText = "",
  size = "medium",
  helperText = "",
  resetErrorText,
}: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const container = useRef(null);
  const classes = useStyles();

  useHeaderOutsideClick(container, setShowEmojiPicker, showEmojiPicker);

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

        size={size}
        error={!!errorText}
        inputProps={{ autoComplete: "off" }}
        name={label}
        type="text"
        value={text}
        label={capitalize(label)}
        onChange={(e) => {
          allowEmojisAndDeleting(setText)(e);
          if (errorText && resetErrorText) {
            resetErrorText();
          }
        }}
        classes={{
          root: classes.input,
          // focused: classes.focused,
        }}
        helperText={
          !!errorText ? capitalize(errorText) : capitalize(helperText)
        }
        variant={outlined ? "outlined" : "filled"}
      />

      {showEmojiPicker ? (
        <PureEmojiInput
          text={text}
          setText={(emoji: string) => {
            setText(emoji);
            if (errorText && resetErrorText) {
              resetErrorText();
            }
          }}
          abs={abs}
        />
      ) : null}

      {suggsestions && showEmojiPicker ? <HeaderOptions text={text} /> : null}
    </Grid>
  );
};

export default EmojiInput;
