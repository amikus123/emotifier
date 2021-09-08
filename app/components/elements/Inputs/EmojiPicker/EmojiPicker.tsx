import { Picker } from "emoji-mart";
import React from "react";

// this component is used with other inputs to allow user to
// enter emojis wihtouth special keyboard
// add emoji based where the input element is 
interface Props {
  text: string;
  setText?: (e: string) => void;
  abs?: boolean;
  extraWidth?: string;
  unicode?: boolean;
}
const EmojiPicker = ({
  text,
  setText,
  abs = false,
  extraWidth = "0px",
  unicode = false,
}: Props) => {
  return (
    <Picker
      style={
        abs
          ? {
              width: `calc(100% + ${extraWidth})`,
              position: "absolute",
              zIndex: 400,
              top: "56px",
              left: `-${extraWidth}`,
            }
          : {
              width: "100%",
            }
      }
      set="twitter"
      title=""
      emoji="rainbow"
      showPreview={false}
      emojiTooltip={true}
      onClick={(e: any) => {
        if (e.native !== undefined) {
          console.log(e, "halo");
          if (unicode) {
            setText(e.unified);
          } else {
            setText(text + e.native);
          }
        }
      }}
    />
  );
};

export default EmojiPicker;
