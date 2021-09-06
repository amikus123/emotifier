import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, {  useEffect, useRef, useState } from "react";
import { allowEmojisAndDeleting } from "../../../../utils/forms/emojiInputs";
import { capitalize } from "../../../../utils/general/stringManipulation";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";
import PureEmojiInput from "../EmojiPicker/EmojiPicker";

function useOutsideAlerter(
  ref,
  toggle: React.Dispatch<React.SetStateAction<boolean>>,
  ignoredClass: string
) {
  useEffect(() => {
    function handleClickOutside(event) {
      let first = false;
      let second = false;
      const target = event.target;
      if (target.firstChild) {
        first = target.firstChild.classList.contains(ignoredClass)
      }
      if (target.partentElement) {
        second = target.partentElement.classList.contains(ignoredClass)
      }
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(event.target.classList.contains(ignoredClass) || first || second)
      ) {
        console.log("You clicked outside of me!");
        toggle(false);
      }
      console.log(
        event.target,
        event.target.parentElement,
        event.target.firstChild
      );
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
      "& >*": {
        width: "100%",
      },
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
  extraWidth?: string;
  counter?: number;
  ignoredClass?: string;
}

const EmojiInput = ({
  setText,
  text,
  abs = false,
  children = null,
  label = "",
  suggsestions = false,
  className = "",
  counter = 1,
  ignoredClass = "none",
}: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const x = useRef(null);
  const d = useRef(null);

  useEffect(() => {
    console.log(d, counter);
    if (x.current) {
      console.log("fiered");
      setShowEmojiPicker(true);
      x.current.focus();
    }
  }, [counter]);

  const classes = useStyles();

  useOutsideAlerter(x, setShowEmojiPicker, ignoredClass);

  return (
    <Grid
      item
      ref={x}
      onFocus={() => {
        console.log("focused");
        setShowEmojiPicker(true);
      }}
      className={`${classes.root} ${className}`}
    >
      {children === null ? (
        <FormControl variant="filled">
          {label !== "" ? (
            <InputLabel htmlFor="filled-adornment-password">
              {capitalize(label)}
            </InputLabel>
          ) : null}
          <FilledInput
            ref={d}
            inputProps={{ autoComplete: "off" }}
            name={label}
            type="text"
            value={text}
            onChange={allowEmojisAndDeleting(setText)}
          />
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
