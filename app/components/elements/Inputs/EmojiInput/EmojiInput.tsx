import {
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import PureEmojiInput from "../../EmojiDisplay/EmojiInput/PureEmojiInput";
import { allowDeletesGenerator } from "../../../../utils/forms/emojiInputs";
import { capitalize } from "../../../../utils/general/stringManipulation";
import Header from "../../../modules/Header/Header";
import HeaderOptions from "../../../modules/Search/SearchSuggestions/HeaderOptions";

function useOutsideAlerter(
  ref,
  toggle: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
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
  }, [ref, toggle]);
}
interface Props {
  setText: (e: string) => void;
  text: string;
  label?: string;
  abs?: boolean;
  children?: Element | null;
  suggsestions?:boolean
}

const EmojiInput = ({
  setText,
  text,
  abs = false,
  children = null,
  label = "",
  suggsestions=false
}: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const x = useRef(null);

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
  const classes = useStyles();

  useOutsideAlerter(x, setShowEmojiPicker);

  return (
    <Grid
      item
      ref={x}
      onFocus={() => {
        console.log(x.current.contains(document.activeElement), 2);
        setShowEmojiPicker(true);
      }}
      className={classes.root}
    >
      {children === null ? (
        <FormControl variant="filled">
          {label !== "" ? (
            <InputLabel htmlFor="filled-adornment-password">
              {capitalize(label)}
            </InputLabel>
          ) : null}
          <FilledInput
            inputProps={{ autocomplete: "off" }}
            name={label}
            type="text"
            value={text}
            onChange={allowDeletesGenerator(setText)}
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
