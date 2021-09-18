import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { IconButton, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
      "& >*": {
        padding: "0",
      },
    },
    img: {
      width: "3rem",
      height: "3rem",
    },
    name: {
      marginRight: "0.5rem",
    },
  })
);
interface Props {
  text?: string;
  className?: string;
  src?: string;
  onClick?: (arg: any) => any;
}
const UserProfile = ({
  text,
  className = "",
  onClick = () => {},
  src = "",
}: Props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`} onClick={onClick}>
      {text !== undefined ? (
          text===""?(
<Skeleton variant="text"    animation="wave" width={40}  className={classes.name}/>
          ):(
            <Typography className={classes.name}>{text}</Typography>
          )      
      ) : null}

      <IconButton>
        {
          src!==""?
          <Avatar
          alt="Remy Sharp"
          src={src}
          className={classes.img}
          variant="square"
        />:<Skeleton variant="rect" animation="wave" width={48} height={48} />
        }
       
      </IconButton>
    </div>
    // </Link>
  );
};

export default UserProfile;
