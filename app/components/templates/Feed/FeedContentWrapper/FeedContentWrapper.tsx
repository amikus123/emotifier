import React from 'react'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
interface Props{
  children:any
}
const FeedContentWrapper = ({children=null}:Props) => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:"red",
      width:"30rem",
      height:"30rem",
      marginLeft:"255px",
    },}))
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default FeedContentWrapper
