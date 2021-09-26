import {
  Avatar,
  Box,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {},
  });
});

interface Props {
  filePaths: string[];
  removeFileGenertor: (index: number) => () => void;
}
const Images = ({ filePaths, removeFileGenertor }: Props) => {
  const classes = useStyles();
  const handleClick = (index: number) => {
    console.log("clicked");
    const res = removeFileGenertor(index);
    res();
  };

  return (
    <div>
      {filePaths.map((path, index) => {
        return (
          <Box
            sx={{ p: 2, border: "1px dashed grey", position: "relative" }}
            key={index}
          >
            <CloseIcon
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                fontSize: "2rem",
                cursor:"pointer"
              }}
              onClick={() => handleClick(index)}
            />
            <Avatar src={path}  />
          </Box>
        );
      })}
    </div>
  );
};

export default Images;
