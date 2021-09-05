import React from "react";
import {
  Button,
  Avatar,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        justifyContent: "start",
        border: "0px  solid !important",
        fontWeight: "bold",
      },
    })
  );
interface Props {
  icon: any;
  onClick: () => any;
  className?: string;
  children: any;
}
const ButtonWithEmoji = ({ icon, onClick, className, children }: Props) => {
  
  const classes = useStyles();

  return (
    <Button
      className={`${className} ${classes.root}`}
      size="large"
      variant="contained"
      onClick={onClick}
      startIcon={
        <Avatar
          variant="square"
          src={icon?.src ? icon.src : icon}
          style={{ marginRight: "0.25rem" }}
        />
      }
    >
      {children}
    </Button>
  );
};

export default ButtonWithEmoji;
