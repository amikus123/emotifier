import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  createStyles,
  makeStyles,
  Theme,
  OutlinedInput,
  FormHelperText,
  FormLabel,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useHeaderOutsideClick from "../../../../hooks/header";
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
  suggsestions?: boolean;
  className?: string;
  outlined?: boolean;
  errorText: string;
}

const EmojiInput = ({
  setText,
  text,
  label,
  abs = false,
  suggsestions = false,
  outlined = false,
  className = "",
  errorText = "",
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
      <FormControl variant="filled" fullWidth={true}>
        <TextField
          error={!!errorText}
          fullWidth={true}
          inputProps={{ autoComplete: "off" }}
          name={label}
          type="text"
          value={text}
          label={capitalize(label)}
          onChange={allowEmojisAndDeleting(setText)}
          classes={{
            root: classes.input,
            // focused: classes.focused,
          }}
          helperText={capitalize(errorText)}
          variant={outlined ? "outlined" : "filled"}
        />
      </FormControl>

      {showEmojiPicker ? (
        <PureEmojiInput text={text} setText={setText} abs={abs} />
      ) : null}

      {suggsestions && showEmojiPicker ? <HeaderOptions text={text} /> : null}
    </Grid>
  );
};

export default EmojiInput;
