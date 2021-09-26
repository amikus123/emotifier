import React from "react";
import ButtonWithEmoji from "../../Buttons/ButtonWithEmoji/ButtonWithEmoji";
// import ImageIcon from '@mui/icons-material/Image';
import ImageIcon from "@mui/icons-material/Image";
import { Grid, Typography } from "@mui/material";

interface Props {
  handleChange: (arg0: any) => Promise<any>;
  errorText: string;
}

const ImageButton = ({ handleChange, errorText }: Props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <ButtonWithEmoji>
        <label
          htmlFor="single"
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            left:"0"
          }}
        >
          <ImageIcon />
        </label>
        <label
          htmlFor="single"
          style={{ height: "100%", width: "100%", visibility: "hidden" }}
        >
          <ImageIcon />
        </label>
      </ButtonWithEmoji>
      <input
        value=""
        type="file"
        id="single"
        name="single"
        style={{ visibility: "hidden", position: "absolute" }}
        onChange={handleChange}
      />
      <Typography style={{ paddingTop: "1rem", color: "red" }}>
        {errorText}
      </Typography>
    </Grid>
  );
};

export default ImageButton;
