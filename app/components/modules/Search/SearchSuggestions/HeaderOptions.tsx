import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      backgroundColor: "purple",
      transform: "translateX(100%)",
      zIndex: theme.zIndex.drawer + 2,
      right: "-8px",
      top: "0",
    },
  })
);

const HeaderOptions = ({ text }: Props) => {
  const [suggestions, setSuggestions] = useState([]);
  // api call to get suggestions
  const classes = useStyles();
  useEffect(() => {
    setSuggestions([...suggestions, text]);
  }, [text]);
  return (
    <>
      {text !== "" ? (
        <div className={classes.root}>
          {suggestions.map((item, key) => {
            return <p key={key}> {item}</p>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default HeaderOptions;
