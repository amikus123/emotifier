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
        position:"relative",

        justifyContent: "start",
        border: "0px  solid !important",
        fontWeight: "bold",
        "&>span>span":
        {
        }
      },
      label:{
      }
    })
  );
interface Props {
  ElementIcon?:any,
  icon?: any;
  onClick?: () => any;
  className?: string;
  children?: any;
}
const ButtonWithEmoji = ({ icon, onClick, className, children,ElementIcon }: Props) => {
  
  const classes = useStyles();

  return (
    <Button
      classes={{
        root:`${className} ${classes.root}`,
        label:classes.label
      }}
      size="large"
      variant="contained"
      onClick={onClick?onClick:null}
      startIcon={
        ElementIcon?<ElementIcon  style={children?{ marginRight: "1rem" }:{marginLeft:"1rem"}}/>:icon? (
          <Avatar
            variant="square"
            src={icon?.src ? icon.src : icon}
            style={children?{ marginRight: "0.25rem" }:{marginLeft:"0px"}}
          />
          ):null 
       
      }
    >
      {children}
    </Button>
  );
};

export default ButtonWithEmoji;
