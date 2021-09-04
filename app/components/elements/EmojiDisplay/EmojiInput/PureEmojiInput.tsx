import { Picker } from "emoji-mart";
import React from "react";

interface Props {
  text: string;
  setText?: (e: string) => void;
  abs?: boolean;
}
const PureEmojiInput = ({ text, setText, abs = false }: Props) => {
  return (
    <Picker
      style={
        abs
          ? {
              width: "100%",
              position: "absolute",
              zIndex: 400,
              top: "56px",
              left: 0,
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
