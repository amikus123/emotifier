import { Picker } from "emoji-mart";
import React from "react";

// this component is used with other inputs to allow user to 
// enter emojis withouth special keyboard
interface Props {
  text: string;
  setText?: (e: string) => void;
  abs?: boolean;
  extraWidth?:string 
  
}
const PureEmojiInput = ({ text, setText, abs = false,extraWidth="0px" }: Props) => {
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
      title="Select emoji"
      onClick={(e: any) => {
        if (e.native !== undefined) {
          setText(text + e.native);
        }
      }}
    />
  );
};

export default PureEmojiInput;