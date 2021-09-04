import { makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import React from "react";
import Twemoji from "react-twemoji";
import EditIcon from "@material-ui/icons/Edit";

interface Props{
  emojis: string;
  handleClick?: () => void;
}
const EmojiLine = ({
  emojis,
  handleClick,
}: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display:"flex",
        alignItems:"start"
      },
      twemoji: {
        marginLeft: "0.5rem",
      },
      iconButton:{

      }
    })
  );
  const classes = useStyles();
  // toggle for edit mode
  return (
    <Twemoji
      noWrapper={false}
      options={{ className: classes.twemoji }}
      className={classes.root}
    >
      {emojis}
      <IconButton onClick={handleClick} className={classes.iconButton}>
        <EditIcon />
      </IconButton>
    </Twemoji>
  );
};

export default EmojiLine;
