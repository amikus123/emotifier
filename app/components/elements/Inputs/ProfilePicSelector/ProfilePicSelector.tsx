import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import useHeaderOutsideClick from "../../../../hooks/header";
import EmojiPicker from "../EmojiPicker/EmojiPicker";
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import Image from "material-ui-image";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
    },
    input: {
      background: theme.palette.common.white,
    },
  })
);
const storage = getStorage();

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
const baseEmoji = "1f920"
const ProfilePicSelector = ({
  setText,
  text,
  label,
  abs = false,
  outlined = false,
  className = "",
}: Props) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [unicode, setUnicode] = useState(baseEmoji);
  const container = useRef(null);
  // TODO ADD AUTO FOCUS ON INPUT
  useEffect(() => {
    if (container.current) {
      setShowEmojiPicker(true);
      // dosnet workd :(
      container.current.focus();
    }
  }, []);

  const classes = useStyles();
  const storage = getStorage();

  useHeaderOutsideClick(container, setShowEmojiPicker, showEmojiPicker);

  useEffect(() => {
    const getImage = async (passedUnicode: string) => {
          try {
        const a = await getDownloadURL(
          ref(storage, `profilePictures/${passedUnicode}.svg`)
        );
        setText(a);
      } catch (e) {
        console.error(e);
      }
    };

    getImage(unicode);
  }, [unicode]);
  return (
    <Grid
      item
      ref={container}
      onFocus={() => {
        setShowEmojiPicker(true);
      }}
      className={`${classes.root} ${className}`}
    >
      {unicode !== "" ? (
        <Image
          imageStyle={{
            width: "100px",
            height: "100px",
            transform: "translateX(-50%)",
            left: "50%",
          }}
          style={{
            paddingTop: "0",
            height: "8rem",
          }}
          src={text}
          alt={unicode}
          disableTransition={true}
        />
      ) : null}

      <EmojiPicker text={text} setText={setUnicode} abs={abs} unicode={true} />
    </Grid>
  );
};

export default ProfilePicSelector;
