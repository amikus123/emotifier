import React from "react";
import ButtonWithEmoji from "../../Buttons/ButtonWithEmoji/ButtonWithEmoji";
// import ImageIcon from '@mui/icons-material/Image';
import ImageIcon from "@mui/icons-material/Image";

interface Props {
  handleChange: (arg0: any) => Promise<any>;
}
const ImageButton = ({ handleChange }: Props) => {
  return (
    <div className="buttons fadein">
          <ButtonWithEmoji >
        <label htmlFor="single"          style={{ height: "24px"}}
 >

      <ImageIcon/>
        </label>
        </ButtonWithEmoji>
        <input
          type="file"
          id="single"
          name="single"
          style={{ visibility: "hidden", position: "absolute" }}
          onChange={handleChange}
        />
    </div>
  );
};

export default ImageButton;
