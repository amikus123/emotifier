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
import { allowEmojisAndDeleting } from "../../../../utils/forms/emojiInputs";
import { capitalize } from "../../../../utils/general/stringManipulation";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";
import PureEmojiInput from "../EmojiPicker/EmojiPicker";

function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  ignoredClass: string
) {
  useEffect(() => {
    function handleClickOutside(event) {
      let first = false;
      let second = false;
      const target = event.target;
      if (target.firstChild) {
        first = target.firstChild.classList.contains(ignoredClass);
      }
      if (target.partentElement) {
        second = target.partentElement.classList.contains(ignoredClass);
      }
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(event.target.classList.contains(ignoredClass) || first || second)
      ) {
        console.log("You clicked outside of me!");
        toggle(false);
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, toggle, ignoredClass]);
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },

    notchedOutline: {
      backgroundColor: "#fff",
      borderColor: "rgba(0, 0, 0, 0.23)!important",
    },
  })
);

interface Props {
  setText: (e: string) => void;
  text: string;
  label?: string;
  abs?: boolean;
  children?: Element | null;
  suggsestions?: boolean;
  className?: string;
  // dosent hide the emoji picker if
  // clicked element has this class
  ignoredClass?: string;
  outlined?: boolean;
}
const settings = {

}

const EmojiInput = ({
  setText,
  text,
  abs = false,
  children = null,
  suggsestions = false,
  outlined = false,
  label = "",
  className = "",
  ignoredClass = "none",
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

  useOutsideAlerter(container, setShowEmojiPicker, ignoredClass);

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
                notchedOutline: classes.notchedOutline,
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
